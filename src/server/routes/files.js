
const router = require('express').Router();
// const pool = require('../db');
const authorization = require('../middleware/authorization');
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
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
