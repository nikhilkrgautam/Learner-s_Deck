
-- Users Table
CREATE TABLE users (
  user_id UUID DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

-- Student Profiles Table
CREATE TABLE student_profiles (
  profile_id SERIAL,
  user_id UUID,
  image VARCHAR(511),
  class SMALLINT,
  school VARCHAR(255),
  date_created DATE,
  PRIMARY KEY (profile_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Waitlist Table
CREATE TABLE waitlist (
  user_id UUID DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  date_joined DATE,
  PRIMARY KEY (user_id)
);

-- Teachers Table
CREATE TABLE teachers (
  user_id UUID DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

-- Teacher Profile Table
CREATE TABLE teacher_profiles (
  profile_id SERIAL,
  user_id UUID,
  image VARCHAR(511),
  degree VARCHAR(255),
  experience VARCHAR(255),
  date_created DATE,
  PRIMARY KEY (profile_id),
  FOREIGN KEY (user_id) REFERENCES teachers(user_id)
);

-- Courses Table
CREATE TABLE courses (
  course_id UUID DEFAULT uuid_generate_v4(),
  teacher_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(511),
  subject VARCHAR(255),
  class SMALLINT NOT NULL,
  time_created TIMESTAMP,
  thumbnail VARCHAR(2083),
  PRIMARY KEY (course_id),
  FOREIGN KEY (teacher_id) REFERENCES teachers(user_id)
);

CREATE TABLE videos (
  video_id UUID DEFAULT uuid_generate_v4(),
  teacher_id UUID NOT NULL,
  course_id UUID,
  video_link VARCHAR(511),
  title VARCHAR(255) NOT NULL,
  description VARCHAR(511),
  subject VARCHAR(255),
  class SMALLINT NOT NULL,
  length INT,
  views INT,
  time_created TIMESTAMP,
  PRIMARY KEY (video_id),
  FOREIGN KEY (teacher_id) REFERENCES teachers(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Sample data

INSERT INTO teachers (username, email, password)
VALUES (
  'H C Verma',
  'hcverma@gmail.com',
  'physicsislife123'
);

INSERT INTO courses (teacher_id, title, description, subject, class, time_created, thumbnail)
VALUES (
  '14488caf-17d5-442b-a92b-b9b458899375',
  'Introduction to Quantum Physics',
  'A very brief introduction to the world of quantum physics. Welcome!',
  'Physics',
  12,
  '2016-06-22 19:10:25-07',
  'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videoThumbnails/physics2.webp'
);

INSERT INTO videos (teacher_id, course_id, video_link, title, description, subject, class, length, views, time_created)
VALUES (
  '14488caf-17d5-442b-a92b-b9b458899375',
  '2760dc7e-2f93-42f0-96b3-b6c36bd6bbf5',
  'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videos/CyberAlly.mp4',
  'Chapter Two: Photoelectricity',
  'In this lecture, we will look at Photoelectricity Principle.',
  'Physics',
  12,
  4489,
  14,
  '2016-06-23 15:16:25-07'
);

-- Join
SELECT * FROM users JOIN student_profiles ON users.user_id = student_profiles.user_id;

SELECT c.course_id, c.description, c.title, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.class, v.length, v.views, v.time_created
FROM courses AS c
LEFT JOIN videos as v ON c.course_id = v.course_id;

SELECT t.username, c.course_id, c.description, c.title, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.class, v.length, v.views, v.time_created
FROM courses AS c
LEFT JOIN teachers AS t ON c.teacher_id = t.user_id
LEFT JOIN videos AS v ON c.course_id = v.course_id;

SELECT t.username, c.course_id, c.description, c.title, v.teacher_id, v.video_id, v.title, v.video_link, v.description, v.subject, v.class, v.length, v.views, v.time_created
FROM teachers AS t
LEFT JOIN courses AS c ON c.teacher_id = t.user_id
LEFT JOIN videos AS v ON c.course_id = v.course_id;
