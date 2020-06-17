
const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
  try {

    // res.json(req.user);
    let user;

    if(req.user.role === 'S') {
      user = await pool.query(
        "SELECT u.user_id, u.username, u.email, u.role, s.image, s.class, s.school FROM users AS u LEFT JOIN student_profiles AS s ON u.user_id = s.user_id WHERE u.user_id = $1",
        [req.user.id]
      );
    } else if(req.user.role === 'T') {
      user = await pool.query(
        "SELECT u.user_id, u.username, u.email, u.role, t.image, t.degree, t.experience FROM users AS u LEFT JOIN teacher_profiles AS t ON u.user_id = t.user_id WHERE u.user_id = $1",
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

router.put('/updateImage', authorization, async (req, res) => {
  try {

    let updateProfile;
    console.log(req.body.imageLink);

    if(req.user.role === "S") {
      updateProfile = await pool.query(
        "UPDATE student_profiles SET image = $1 where user_id = $2",
        [req.body.imageLink, req.user.id]
      );
    } else if (req.user.role === "T") {
      updateProfile = await pool.query(
        "UPDATE teacher_profiles SET image = $1 where user_id = $2",
        [req.body.imageLink, req.user.id]
      );
    } else {
      return res.status(500).json("Server error");
    }

    res.json("Image successfully updated!");

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});


module.exports = router;
