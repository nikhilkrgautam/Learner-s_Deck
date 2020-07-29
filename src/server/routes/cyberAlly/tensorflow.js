const router = require("express").Router();
// const tf = require("@tensorflow/tfjs-node");
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
		const { sentence } = req.body;

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
		// 			console.log(predictions[i].label + " was found with probability of " + predictions[i].results[0].probabilities[1]);
		// 	}
		// }

		res.json({predictions: predictions});


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
	  console.log(predictions);

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
