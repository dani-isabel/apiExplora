use experience;
CREATE TABLE IF NOT EXISTS rooms (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  room_name char(20) NOT NULL
);

INSERT INTO rooms (room_name) VALUES
('En escena'),
('Mente'),
('Sala Infantil'),
('Sala Música'),
('Tiempo');

CREATE TABLE IF NOT EXISTS  experiences (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(60) NOT NULL,
  description varchar(60) NOT NULL,
  room_id int NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms (id)
);