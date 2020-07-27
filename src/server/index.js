
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require("dotenv").config();
// const busboy = require('connect-busboy');
const port = process.env.PORT || 5000;

const dashRouter = require('./routes/dashboard');
const authRouter = require('./routes/jwtAuth');
const fileRouter = require('./routes/files');
const courseRouter = require('./routes/courses');
const cyberRouter = require('./routes/cyberAlly/tensorflow.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
// app.use(busboy({
//     highWaterMark: 2 * 1024 * 1024,
// }));

// Routes
app.use('/api/dash', dashRouter);
app.use('/api/auth', authRouter);
app.use('/api/file', fileRouter);
app.use('/api/courses', courseRouter);
app.use('/api/cyberAlly', cyberRouter);


app.use(express.static(path.join("dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join("dist", "index.html"), {root: path.join(__dirname, "..", "..")});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
