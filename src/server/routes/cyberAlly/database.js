const router = require('express').Router();
const pool = require('../../db');

router.get('/allcomments', async (req, res) => {
  try {

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments`
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allcomments/youtube', async (req, res) => {
  try {

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1`,
      ['youtube']
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allcomments/twitter', async (req, res) => {
  try {

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1`,
      ['twitter']
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allcomments/facebook', async (req, res) => {
  try {

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1`,
      ['facebook']
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
