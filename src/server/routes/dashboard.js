
const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async (req, res) => {
  try {

    // res.json(req.user);

    const user = await pool.query("SELECT user_id, username FROM users WHERE user_id = $1", [req.user]);

    res.json(user.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/ping', function (req, res) {
 return res.json('pong');
});

module.exports = router;
