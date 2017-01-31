CREATE DATABASE prodigee_db;
USE prodigee_db;

CREATE TABLE bootcamper(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(300) NOT NULL,
    city varchar (255) NOT NULL,
    state varchar (255) NOT NULL,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);