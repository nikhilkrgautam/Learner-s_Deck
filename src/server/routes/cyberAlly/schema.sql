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

CREATE TABLE nsfwImages (
  image_id UUID DEFAULT uuid_generate_v4(),
  imgUrl VARCHAR(2083) NOT NULL,
  username VARCHAR(255),
  PRIMARY KEY (image_id)
);

CREATE TABLE nsfwReverseSearch (
  link_id SERIAL,
  image_id UUID,
  link VARCHAR(1023),
  PRIMARY KEY (link_id),
  FOREIGN KEY (image_id) REFERENCES nsfwImages(image_id)
);

-- CREATE TABLE userReported (
--   user_id UUID DEFAULT uuid_generate_v4(),
--   email VARCHAR(255) NOT NULL,
--   username VARCHAR(255),
--   PRIMARY KEY (user_id)
-- );

INSERT INTO cyberUsers (email)
VALUES (
  'meet@gmail.com'
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
  'Get fucked!!!',
  'Joker',
  '',
  'yukta@gmail.com',
  '00a86bc4-5d96-4231-8127-dbd73488c0f3'
);
