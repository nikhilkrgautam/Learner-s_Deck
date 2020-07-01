
const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validation = require('../middleware/validation');
const authorization = require('../middleware/authorization');

// Register route
router.post('/register', validation, async (req, res) => {
  try {

    const { username, email, password, role } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if(user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    // Using bcrypt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, bcryptPassword, role]
    );

    if(role === 'S') {
      const newProfile = await pool.query(
        "INSERT INTO student_profiles (user_id, date_created) VALUES ($1, NOW()) RETURNING *",
        [newUser.rows[0].user_id]
      );
    } else if(role === 'T') {
      const newProfile = await pool.query(
        "INSERT INTO teacher_profiles (user_id, date_created) VALUES ($1, NOW()) RETURNING *",
        [newUser.rows[0].user_id]
      );
    } else {
      return res.status(500).json("Server error");
    }

    const token = jwtGenerator(newUser.rows[0].user_id, role);

    // res.cookie('eBuzzToken', token, { httpOnly: true, secure: true, maxAge: 86400000, domain: 'ebuzzet.com', sameSite: true });
    res.cookie('eBuzzToken', token, { httpOnly: true });

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

    const token = jwtGenerator(user.rows[0].user_id, user.rows[0].role);

    // res.cookie('eBuzzToken', token, { httpOnly: true, secure: true, maxAge: 86400000, domain: 'ebuzzet.com', sameSite: true });
    res.cookie('eBuzzToken', token, { httpOnly: true });

    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Verify route
router.get("/is-verify", authorization, async (req, res) => {
  try {

    res.json(true);

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Logout route
router.get("/logout", authorization, async (req, res) => {
  try {

    // res.clearCookie('eBuzzToken', { httpOnly: true, secure: true, domain: 'ebuzzet.com', sameSite: true });
    res.clearCookie('eBuzzToken', { httpOnly: true });
    res.json('Log out success');

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// Joinus route
router.post('/joinus', validation, async (req, res) => {
  try {

    const { email } = req.body;

    const user = await pool.query("SELECT * FROM waitlist WHERE email = $1", [email]);

    if(user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    const newUser = await pool.query(
      "INSERT INTO waitlist (email, date_joined) VALUES ($1, NOW()) RETURNING *",
      [email]
    );

    res.json('Joined successfully');

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

module.exports = router;
