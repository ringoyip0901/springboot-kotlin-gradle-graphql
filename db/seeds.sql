TRUNCATE TABLE postgres RESTART IDENTITY CASCADE;

INSERT INTO family (name, title)
VALUES
  ('Queen Elizabeth', "Queen"),
  ('Prince Harry', "Prince");

INSERT INTO superheroes (name, ability)
VALUES
  ('Storm', "Weather Control"),
  ('Wolverine', "Regeneration");