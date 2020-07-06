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

router.post('/course', authorization, async (req, res) => {
  try {
    const { course_id } = req.body;

    const course = await pool.query(
      `SELECT t.username, c.teacher_id, c.course_id, c.description, c.title, c.class, c.subject, c.thumbnail
      FROM courses AS c
      LEFT JOIN teachers AS t ON c.teacher_id = t.user_id
      WHERE c.course_id = $1`,
      [course_id]
    );

    if(course.rows.length === 0) {
      return res.status(401).json("Course does not exist!");
    }

   res.json(course.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
