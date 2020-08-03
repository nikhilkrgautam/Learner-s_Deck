const router = require('express').Router();
const pool = require('../../db');
const nlp = require("nlp-toolkit")
const fs = require('fs');
const es = require('event-stream');
const axios = require('axios');

router.post('/report', async (req, res) => {
  try {

    const { account } = req.body;

    const newReport = await pool.query(
      "INSERT INTO userReported (account) VALUES ($1) RETURNING *",
      [account]
    );

    res.json(newReport.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allcomments', async (req, res) => {
  try {

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink FROM comments`
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allimages', async (req, res) => {
  try {

    const images = await pool.query(
      `SELECT imgUrl, username, image_id FROM nsfwImages`
    );

    const imageLinks = await pool.query(
      `SELECT link, image_id FROM nsfwReverseSearch`
    );

    res.json({images: images.rows, imageLinks: imageLinks.rows});

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

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

router.post('/allcomments/youtube', async (req, res) => {
  try {

    const { email } = req.body;

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1 AND email = $2`,
      ['youtube', email]
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.post('/allcomments/twitter', async (req, res) => {
  try {

    const { email } = req.body;

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1 AND email = $2`,
      ['twitter', email]
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.post('/allcomments/facebook', async (req, res) => {
  try {

    const { email } = req.body;

    const comments = await pool.query(
      `SELECT website, comment, username, commentLink, user_id FROM comments WHERE website = $1 AND email = $2`,
      ['facebook', email]
    );

   res.json(comments.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.post('/login', async (req, res) => {
  try {

    const { email } = req.body;

    const user = await pool.query("SELECT * FROM cyberUsers WHERE email = $1", [email]);

    if(user.rows.length === 0) {
      return res.status(401).json("Failure");
    }

    res.json("Success");

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});



module.exports = router;
