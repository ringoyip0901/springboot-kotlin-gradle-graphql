--CREATE TYPE music_instrument AS enum('trumpet', 'drums', 'clarinet', 'triangle', 'violin');

CREATE TABLE IF NOT EXISTS family (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS superheroes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image VARCHAR(100) NOT NULL,
  ability VARCHAR(100) NOT NULL
);
