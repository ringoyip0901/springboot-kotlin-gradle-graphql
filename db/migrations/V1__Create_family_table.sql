--CREATE TYPE music_instrument AS enum('trumpet', 'drums', 'clarinet', 'triangle', 'violin');

CREATE TABLE IF NOT EXISTS family (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL
);