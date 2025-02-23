-- Removes table if it already exists
DROP TABLE IF EXISTS countryquest;

-- Creates table
CREATE TABLE IF NOT EXISTS countryquest (
  id SERIAL PRIMARY KEY,
  country VARCHAR(100) NOT NULL UNIQUE,
  capital VARCHAR(100),
  flag TEXT
);

-- Imports the CSV file
\copy countryquest FROM 'countryquest.csv' WITH (FORMAT CSV, HEADER);