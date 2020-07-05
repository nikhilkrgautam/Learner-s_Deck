const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.post('/subject', authorization, async (req, res) => {
  try {
    const { subject } = req.body;

    const courses = await pool.query(
      `SELECT t.username, c.teacher_id, c.course_id, c.description, c.title, c.class, c.subject, c.thumbnail
      FROM courses AS c
      LEFT JOIN teachers AS t ON c.teacher_id = t.user_id
      WHERE c.subject = $1`,
      [subject]
    );

   res.json(courses.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
