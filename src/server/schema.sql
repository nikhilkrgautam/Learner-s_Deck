
-- Users Table
CREATE TABLE users (
  user_id UUID DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role CHAR(1) NOT NULL,
  PRIMARY KEY (user_id)
);

-- Student Profiles Table
CREATE TABLE student_profiles (
  profile_id SERIAL,
  user_id UUID,
  image VARCHAR(2083),
  class SMALLINT,
  school VARCHAR(255),
  date_created DATE,
  PRIMARY KEY (profile_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Teacher Profile Table
CREATE TABLE teacher_profiles (
  profile_id SERIAL,
  user_id UUID,
  image VARCHAR(2083),
  degree VARCHAR(255),
  experience VARCHAR(255),
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

-- Sample data
INSERT INTO student_profiles (user_id, image, class, school)
VALUES ('20ba0790-180f-48db-bbe9-a57b0f654a0d', 'https://learners-deck-17-255.sgp1.digitaloceanspaces.com/profile_pic.jpeg', 10, 'IES VN Sule');

-- Join
SELECT * FROM users JOIN student_profiles ON users.user_id = student_profiles.user_id;
