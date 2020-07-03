
const router = require('express').Router();
// const pool = require('../db');
require("dotenv").config();
const authorization = require('../middleware/authorization');
const path = require("path");
const multer = require("multer");
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
// const busboy = require('connect-busboy');
// const fs = require('fs-extra');

// const uploadPath = path.join(__dirname, '..', '..', '..', 'uploads');
// fs.ensureDir(uploadPath);
//
// router.post('/uploadLarge', authorization, async (req, res) => {
//   try {
//
//     req.pipe(req.busboy);
//
//     req.busboy.on('file', (fieldname, file, filename) => {
//         console.log(`Upload of '${filename}' started`);
//
//         const fstream = fs.createWriteStream(path.join(uploadPath, filename));
//
//         file.pipe(fstream);
//
//         fstream.on('close', () => {
//             console.log(`Upload of '${filename}' finished`);
//             res.json("File uploaded.");
//         });
//     });
//
//   } catch (err) {
//     console.error(err);
//     res.status(500).json("Server error");
//   }
// });


const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET
});

const storage = multerS3({
  s3: s3,
  bucket: 'learners-deck-21-1143',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key: function (request, file, cb) {

    cb(null, "videos/video-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 200000000},
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "video/mp4") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .mp4 format allowed!'));
    }
  }
}).single("myFile");

router.post('/uploadLarge', authorization, async (req, res) => {
  try {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(406).json(err.message);
      } else if (err) {
        return res.status(406).json(err.message);
      }

      console.log("Request file ---", req.file);
      res.json(req.file.location);
    });

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
