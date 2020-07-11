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

router.post('/videos', authorization, async (req, res) => {
  try {
    const { course_id } = req.body;

    const course = await pool.query(
      `SELECT c.course_id, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.class, v.length, v.views, v.thumbnail, v.time_created
      FROM courses AS c
      LEFT JOIN videos as v ON c.course_id = v.course_id
      WHERE c.course_id = $1`,
      [course_id]
    );

    if(course.rows.length === 0) {
      return res.status(401).json("No lectures in this course!");
    }

   res.json(course.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.post('/video', authorization, async (req, res) => {
  try {
    const { video_id } = req.body;

    const video = await pool.query(
      `SELECT t.username, c.course_id, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.class, v.length, v.views, v.time_created
      FROM teachers AS t
      LEFT JOIN courses AS c ON c.teacher_id = t.user_id
      LEFT JOIN videos AS v ON c.course_id = v.course_id
      WHERE v.video_id = $1`,
      [video_id]
    );

    if(video.rows.length === 0) {
      return res.status(401).json("Video does not exist!");
    }

   res.json(video.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

router.get('/allVideos', authorization, async (req, res) => {
  try {

    const videos = await pool.query(
      `SELECT t.username, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.thumbnail, v.class, v.length, v.views, v.time_created
      FROM teachers AS t
      INNER JOIN videos AS v ON t.user_id = v.teacher_id`
    );

    if(videos.rows.length === 0) {
      return res.status(401).json("No videos!");
    }

   res.json(videos.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
