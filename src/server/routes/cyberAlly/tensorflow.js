const router = require("express").Router();
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

let matched = false;

router.post('/model', async (req, res) => {
	try {
		const { sentence, username, email } = req.body;

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
		// for(i=0; i<7; i++){
		// 	if(predictions[i].results[0].match){
		// 			// console.log(predictions[i].label + " was found with probability of " + predictions[i].results[0].probabilities[1]);
		// 			matched = true;
		// 	}
		// }

		res.json({predictions: predictions});

		if(matched) {

			const commenter = await pool.query("SELECT * FROM commenters WHERE username = $1 AND website = $2", [username, website]);

	    if(commenter.rows.length !== 0) {
				const newComment = await pool.query(
		      "INSERT INTO comments (website, comment, username, commentLink, email, user_id) VALUES ($1, $2, $3) RETURNING *",
		      [website, sentence, username, '', email, commenter.rows[0].user_id]
		    );
	    }
			else {
				const newCommenter = await pool.query(
		      "INSERT INTO commenters (username, website, comments) VALUES ($1, $2, $3) RETURNING *",
		      [username, website, 1]
		    );

				const newComment = await pool.query(
		      "INSERT INTO comments (website, comment, username, commentLink, email, user_id) VALUES ($1, $2, $3) RETURNING *",
		      [website, sentence, username, '', email, newCommenter.rows[0].user_id]
		    );
			}
		}
		matched = false;

	} catch (err) {
			console.log(err);
			res.sendStatus(500).json("Server error");
	}
});

router.post('/nsfw', async (req, res) => {
	try {

		const { imgUrl } = req.body;

		const pic = await axios.get(imgUrl, {
	    responseType: 'arraybuffer',
	  });
	  // const model_nsfw = await nsfw.load();
	  const image = await tf.node.decodeImage(pic.data,3);
	  const predictions = await model_nsfw.classify(image);
	  image.dispose();

		res.json({predictions: predictions});

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
