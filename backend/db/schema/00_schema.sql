DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quantity INTEGER, 
    image VARCHAR(255) NOT NULL, 
    price FLOAT, 
    category VARCHAR(255) NOT NULL
)