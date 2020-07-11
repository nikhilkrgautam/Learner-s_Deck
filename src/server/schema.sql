
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
  thumbnail VARCHAR(2083),
  time_created TIMESTAMP,
  PRIMARY KEY (video_id),
  FOREIGN KEY (teacher_id) REFERENCES teachers(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Sample data

INSERT INTO teachers (username, email, password)
VALUES (
  'Meet Soni',
  'meetsoni@gmail.com',
  'chemislife123'
);

INSERT INTO courses (teacher_id, title, description, subject, class, time_created, thumbnail)
VALUES (
  'fc904cb2-382f-494f-97db-615877beb327',
  'Set Theory',
  'Introduction to the Set Thoery.',
  'Maths',
  11,
  '2016-06-20 21:45:25-07',
  'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videoThumbnails/maths1.webp'
);

INSERT INTO videos (teacher_id, course_id, video_link, title, description, subject, class, length, views, thumbnail, time_created)
VALUES (
  '81a355a5-3fab-45d5-8f1a-6d71c7e68db6',
  null,
  'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videos/chemistry-mole-concept.mp4',
  'Chemistry: Mole Concept',
  'In this video, we will learn about Mole concept, one of the most basic and import concepts in chemistry',
  'Chemistry',
  11,
  4234,
  11,
  'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videoThumbnails/chem3.jpg',
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

UPDATE courses SET thumbnail = 'https://learners-deck-21-1143.sgp1.cdn.digitaloceanspaces.com/videoThumbnails/maths1.jpg' WHERE course_id = '767c7207-04e6-4219-a1a0-33afa68e99ba';

UPDATE videos SET title = 'Physics: Quantum Theory' WHERE video_id = 'd636684a-c123-43e8-9efb-a7586f1857a3';
