
const router = require('express').Router();
const pool = require('../db');
require("dotenv").config();
const authorization = require('../middleware/authorization');
const path = require("path");
const multer = require("multer");
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

router.get('/', authorization, async (req, res) => {
  try {

    // res.json(req.user);
    let user;

    if(req.user.role === 'S') {
      user = await pool.query(
        "SELECT u.user_id, u.username, u.email, u.role, s.image, s.class, s.school, s.date_created FROM users AS u LEFT JOIN student_profiles AS s ON u.user_id = s.user_id WHERE u.user_id = $1",
        [req.user.id]
      );
    } else if(req.user.role === 'T') {
      user = await pool.query(
        "SELECT u.user_id, u.username, u.email, u.role, t.image, t.degree, t.experience, t.date_created FROM users AS u LEFT JOIN teacher_profiles AS t ON u.user_id = t.user_id WHERE u.user_id = $1",
        [req.user.id]
      );
    } else {
      return res.status(500).json("Server error");
    }

   res.json(user.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

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
  key: function (req, file, cb) {
    cb(null, "profile-images/" + req.user.id + "-" + Date.now() + path.extname(file.originalname));
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

router.put('/updateImage', authorization, async (req, res) => {
  try {

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(406).json(err.message);
      } else if (err) {
        return res.status(406).json(err.message);
      }

      const imageName = req.file.location.split('.');
      imageName.splice(2, 0, 'cdn');
      const newImage = imageName.join('.');

      let updateProfile;

      if(req.user.role === "S") {
        updateProfile = await pool.query(
          "UPDATE student_profiles SET image = $1 where user_id = $2",
          [newImage, req.user.id]
        );
      } else if (req.user.role === "T") {
        updateProfile = await pool.query(
          "UPDATE teacher_profiles SET image = $1 where user_id = $2",
          [newImage, req.user.id]
        );
      } else {
        return res.status(500).json("Server error");
      }

      res.json(newImage);

    });

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.put('/updateInfo', authorization, async (req, res) => {
  try {

    let updateProfile;

    if(req.user.role === "S") {

      if(req.body.type === "Class") {
        updateProfile = await pool.query(
          "UPDATE student_profiles SET class = $1 where user_id = $2",
          [req.body.data, req.user.id]
        );
      }
      else if (req.body.type === "School") {
        updateProfile = await pool.query(
          "UPDATE student_profiles SET school = $1 where user_id = $2",
          [req.body.data, req.user.id]
        );
      }
    }

    else if (req.user.role === "T") {

      if(req.body.type === "Degree") {
        updateProfile = await pool.query(
          "UPDATE teacher_profiles SET degree = $1 where user_id = $2",
          [req.body.data, req.user.id]
        );
      }
      else if (req.body.type === "Experience") {
        updateProfile = await pool.query(
          "UPDATE teacher_profiles SET experience = $1 where user_id = $2",
          [req.body.data, req.user.id]
        );
      }
    }

    else {
      return res.status(500).json("Server error");
    }

    res.json({ type: req.body.type, data: req.body.data });

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});


module.exports = router;
