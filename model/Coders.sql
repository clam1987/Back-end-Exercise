-- Drops the Database if it exists -- 
DROP DATABASE IF EXISTS coders_db;
-- Creates the Databse --
CREATE DATABASE coders_db;

-- Use the Database
USE coders_db; 

-- Create Coders Table -- 
CREATE TABLE IF NOT EXISTS coders (
id INT(5) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
language VARCHAR(40) NOT NULL,
frameworks VARCHAR(40) NOT NULL,
image VARCHAR(40) NOT NULL,
user_name VARCHAR(20) NOT NULL,
PRIMARY KEY(id)
);