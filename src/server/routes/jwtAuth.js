
const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validation = require('../middleware/validation');

// Register route
router.post('/register', validation, async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if(user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    // Using bcrypt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
    );

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Login route
router.post('/login', validation, async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if(user.rows.length === 0) {
      return res.status(401).json("Email or Password is incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if(!validPassword) {
      return res.status(401).json("Email or Password is incorrect");
    }

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});
module.exports = router;
