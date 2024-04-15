-- db/schema.sql
DROP DATABASE IF EXISTS fiber_creations;

CREATE DATABASE fiber_creations;


\c fiber_creations

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE creations (
    id SERIAL PRIMARY KEY,
    creation_type TEXT NOT NULL,
    stitch TEXT DEFAULT NULL,
    material TEXT NOT NULL,
    image TEXT NOT NULL,
    description VARCHAR(500) DEFAULT NULL,
    for_sale BOOLEAN,
    price NUMERIC DEFAULT NULL,
    is_favorite BOOLEAN DEFAULT false,
    created_at TEXT,
    updated_at TEXT DEFAULT NULL,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES cart(id),
    creation_id INTEGER REFERENCES creations(id)
);


