CREATE TABLE comments (
  comment_id UUID DEFAULT uuid_generate_v4(),
  website VARCHAR(255) NOT NULL,
  comment VARCHAR(2047) NOT NULL,
  username VARCHAR(255) NOT NULL,
  commentLink VARCHAR(2047),
  email VARCHAR(255),
  user_id UUID,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (user_id) REFERENCES commenters(user_id)
);

CREATE TABLE commenters (
  user_id UUID DEFAULT uuid_generate_v4(),
  username VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  comments SMALLINT NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE cyberUsers (
  user_id UUID DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (user_id)
);

INSERT INTO cyberUsers (email)
VALUES (
  'yukta@gmail.com'
);

INSERT INTO commenters (username, website, comments)
VALUES (
  'Joker',
  'facebook',
  0
);

INSERT INTO comments (website, comment, username, commentLink, email, user_id)
VALUES (
  'facebook',
  'I hate this fucking website!!!',
  'Joker',
  '',
  'yukta@gmail.com',
  '3d324f9f-1a34-4c5b-b785-067dd2810893'
);
