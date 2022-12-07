DROP TABLE if exists comments;
Drop TABLE if exists boards;
Drop TABLE if exists users;
DROP TABLE IF EXISTS rich_content;

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ) UNIQUE NOT NULL,
  email VARCHAR ( 50 ) UNIQUE NOT NULL,
  full_name VARCHAR ( 100 ) NOT NULL,
  last_login TIMESTAMP,
  created_on TIMESTAMP NOT NULL
);
CREATE TABLE boards (
  board_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  board_name VARCHAR ( 50 ) UNIQUE NOT NULL,
  board_description TEXT NOT NULL
);
CREATE TABLE comments (
  comment_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(board_id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  time TIMESTAMP
);
CREATE TABLE rich_content (
  content_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  comment_id INT REFERENCES comments(comment_id) ON DELETE CASCADE,
  content JSONB NOT NULL
);

INSERT INTO users (username, email, full_name, created_on) VALUES ('btholt3', 'lol2@exa3ple.com', 'Brian2 Holt', NOW());
INSERT INTO users (username, email, full_name, created_on) VALUES ('btholt4', 'lol@exam4ple.com', 'Brian Holt', NOW());

INSERT INTO boards (board_name, board_description) VALUES ('bthol1t', 'lol@ex41ample.comBrian Holt');
INSERT INTO boards (board_name, board_description) VALUES ('bthol22t', 'lol@ex422ample.comBrian Holt');

INSERT INTO comments (user_id, board_id, comment) VALUES (2,1,'1bth22olol@exa5mple.comBrian Holt');
INSERT INTO comments (user_id, board_id, comment) VALUES (2,1,'2bth22olol@exa5mple.comBrian Holt');
INSERT INTO comments (user_id, board_id, comment) VALUES (2,1,'3bth22olol@exa5mple.comBrian Holt');
INSERT INTO comments (user_id, board_id, comment) VALUES (2,1,'4bth22olol@exa5mple.comBrian Holt');
INSERT INTO comments (user_id, board_id, comment) VALUES (2,1,'5bth22olol@exa5mple.comBrian Holt');

INSERT INTO rich_content
  (comment_id, content)
VALUES
  (4, '{ "type": "poll", "question": "What is your favorite color?", "options": ["blue", "red", "green", "yellow"] }'),
  (5, '{ "type": "video", "url": "https://youtu.be/dQw4w9WgXcQ", "dimensions": { "height": 1080, "width": 1920 }}'),
  (1, '{ "type": "poll", "question": "Is this your favorite video?", "options": ["yes", "no", "oh you"] }'),
  (4, '{ "type": "image", "url": "https://btholt.github.io/complete-intro-to-linux-and-the-cli/WORDMARK-Small.png", "dimensions": { "height": 400, "width": 1084 }}'),
  (2, '{ "type": "image", "url": "https://btholt.github.io/complete-intro-to-linux-and-the-cli/HEADER.png", "dimensions": { "height": 237 , "width": 3301 }}');

  
SELECT * FROM users;
SELECT * FROM comments;
