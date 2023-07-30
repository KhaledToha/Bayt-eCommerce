BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    price INT NOT NULL,
    category VARCHAR(55) NOT NULL,
    in_stock INT NOT NULL
);

COMMIT;