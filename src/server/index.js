
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/routes');
const authRouter = require('./routes/jwtAuth');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', indexRouter);
app.use('/auth', authRouter);


app.use(express.static(path.join("dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join("dist", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
