const router = require("express").Router();
const tf = require("@tensorflow/tfjs-node");
const tokenizers = require("tokenizers");
// const spawn = require("child_process").spawn;

router.post('/model', async (req, res) => {
	try {
		const { sentence } = req.body;

		const model = await tf.node.loadSavedModel("./saved_model");
		console.log(model);

		const wordPieceTokenizer = await tokenizers.BertWordPieceTokenizer.fromOptions({ vocabFile: "./vocab.txt", lowercase : false });
		wordPieceTokenizer.setPadding({maxLength : 192});

		const {ids} = await wordPieceTokenizer.encode(sentence);
		console.log(ids);

		const result = tf.tidy(() => {
		    const input_tensor = tf.tensor(ids,undefined,"int32");
		    const ip = input_tensor.expandDims(0);

		    return model.predict({
		        "input_ids": ip
		    });
		});

		console.log(result);

		const answer = await result["output_0"].squeeze().array();
		console.log(answer);

		res.json({answer: answer});



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
