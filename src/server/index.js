
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const port = process.env.PORT || 5000;
const dashRouter = require('./routes/dashboard');
const authRouter = require('./routes/jwtAuth');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api/dash', dashRouter);
app.use('/api/auth', authRouter);

app.get('/api/ping', function (req, res) {
 return res.json('pong');
});

app.use(express.static(path.join("dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join("dist", "index.html"), {root: path.join(__dirname, "..", "..")});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
