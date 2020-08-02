const router = require("express").Router();
const pool = require('../../db');
const tf = require("@tensorflow/tfjs-node");
// const tokenizers = require("tokenizers");
const nsfw = require('nsfwjs');
const axios = require('axios');
// const spawn = require("child_process").spawn;
const toxicity = require('@tensorflow-models/toxicity');

// let model1;
//
// tf.node.loadSavedModel("./saved_model").then((mdl) => {
// 	model1 = mdl;
// });
//
// let wordPieceTokenizer;
// tokenizers.BertWordPieceTokenizer.fromOptions({ vocabFile:  "./vocab.txt", lowercase : false }).then(wPT => {
// 	wordPieceTokenizer = wPT;
// 	wordPieceTokenizer.setPadding({maxLength : 192});
// });

const Threshold = 0.7;
let model_toxicity;
toxicity.load(Threshold).then(mdl => {
	model_toxicity = mdl;
});


let model_nsfw;
nsfw.load().then(mdl => {
	model_nsfw = mdl;
});


router.post('/model', async (req, res) => {
	try {
		const { sentence, website, username, email } = req.body;
		let matched = false;

		// const {ids} = await wordPieceTokenizer.encode(sentence);
		// console.log(ids);
		//
		// const result = tf.tidy(() => {
		//     const input_tensor = tf.tensor(ids,undefined,"int32");
		//     const ip = input_tensor.expandDims(0);
		//
		//     return model1.predict({
		//         "input_ids": ip
		//     });
		// });
		//
		// console.log(result);
		//
		// const answer = await result["output_0"].squeeze().array();
		// console.log(answer);
		//
		// res.json({answer: answer});

		const predictions = await model_toxicity.classify(sentence);
		// console.log(predictions);
		for(i=0; i<7; i++){
			if(predictions[i].results[0].match){
					// console.log(predictions[i].label + " was found with probability of " + predictions[i].results[0].probabilities[1]);
					matched = true;
			}
		}

		res.json({predictions: predictions});

		if(matched) {
			if(website) {
				const commenter = await pool.query("SELECT * FROM commenters WHERE username = $1 AND website = $2", [username, website]);

		    if(commenter.rows.length !== 0) {
					const newComment = await pool.query(
			      "INSERT INTO comments (website, comment, username, commentLink, email, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			      [website, sentence, username, '', email, commenter.rows[0].user_id]
			    );
		    }
				else {
					const newCommenter = await pool.query(
			      "INSERT INTO commenters (username, website, comments) VALUES ($1, $2, $3) RETURNING *",
			      [username, website, 1]
			    );

					const newComment = await pool.query(
			      "INSERT INTO comments (website, comment, username, commentLink, email, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			      [website, sentence, username, '', email, newCommenter.rows[0].user_id]
			    );
				}
			}
		}

	} catch (err) {
			console.log(err);
			res.sendStatus(500).json("Server error");
	}
});

router.post('/nsfw', async (req, res) => {
	try {

		const { imgUrl, username } = req.body;
		let isNsfw = false;

		const pic = await axios.get(imgUrl, {
	    responseType: 'arraybuffer',
	  });
	  // const model_nsfw = await nsfw.load();
	  const image = await tf.node.decodeImage(pic.data,3);
	  const predictions = await model_nsfw.classify(image);
	  image.dispose();

		res.json({predictions: predictions});

		predictions.forEach(item => {
      if(item.className === "Porn") {
        if(item.probability > 0.7) {
					isNsfw = true;
        }
      }
			if(item.className === "Sexy") {
        if(item.probability > 0.97) {
					isNsfw = true;
        }
      }
    });

		if(isNsfw) {
			const newImage = await pool.query(
				"INSERT INTO nsfwImages (imgUrl, username) VALUES ($1, $2) RETURNING *",
				[imgUrl, username]
			);
			axios.post('https://cyberally.herokuapp.com/search', {image_url: imgUrl, resized_images: false}, {
				headers: {"Content-Type": "application/json"}
			}).then(res => {
				if(res.data.links.length > 0) {
					res.data.links.forEach((item, i) => {
						pool.query(
							"INSERT INTO nsfwReverseSearch (image_id, link) VALUES ($1, $2) RETURNING *",
							[newImage.rows[0].image_id, item]
						);
					});
				}
			});
		}
		isNsfw = false;

	} catch (err) {
			console.log(err);
			res.sendStatus(500).json("Server error");
	}
});

// router.get('/process', (req, res) => {
//   const process = spawn('python', ['./hello.py']);
//   process.stdout.on('data', (data) => {
//     res.send(data.toString());
//   });
// });

module.exports = router;
