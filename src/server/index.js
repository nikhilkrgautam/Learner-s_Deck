require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join("dist")));

app.get('/api/ping', function (req, res) {
 return res.send('pong');
});

app.get("*", (req, res) => {
	res.sendFile(path.join("dist", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
