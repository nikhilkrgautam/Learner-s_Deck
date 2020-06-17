
const router = require('express').Router();
// const pool = require('../db');
require("dotenv").config();
const authorization = require('../middleware/authorization');
const path = require("path");
const multer = require("multer");
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET
});

const storage = multerS3({
  s3: s3,
  bucket: 'learners-deck-17-255',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: function (request, file, cb) {

    cb(null, path.basename(file.originalname, path.extname(file.originalname)) + "-image-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 10000000},
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single("myImage");

// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: function(req, file, cb) {
//     cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//   }
// });


router.post('/upload', authorization, async (req, res) => {
  try {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(406).json(err.message);
      } else if (err) {
        return res.status(406).json(err.message);
      }

      console.log("Request file ---", req.file);
      res.json("File uploaded successfully");
    })

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});


module.exports = router;
