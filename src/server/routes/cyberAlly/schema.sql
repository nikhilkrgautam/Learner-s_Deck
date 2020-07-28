CREATE TABLE comments (
  comment_id UUID DEFAULT uuid_generate_v4(),
  website VARCHAR(255) NOT NULL,
  comment VARCHAR(2047) NOT NULL,
  username VARCHAR(255) NOT NULL,
  commentLink VARCHAR(2047),
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

INSERT INTO commenters (username, website, comments)
VALUES (
  'Jordan Belfort',
  'twitter',
  0
);

INSERT INTO comments (website, comment, username, commentLink, user_id)
VALUES (
  'twitter',
  'Fuck off dickwad #getoffmylawn',
  'Jordan Belfort',
  '',
  '65118d24-da59-4240-bcb8-4ab69264a7ca'
);
