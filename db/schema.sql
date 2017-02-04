DROP DATABASE prodigee_db;
CREATE DATABASE prodigee_db;
USE prodigee_db;

CREATE TABLE bootcamper(
	bootcamper_id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
  zip int NOT NULL,
  frontend_skill int NOT NULL,
  backend_skill int NOT NULL,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (bootcamper_id)
);

CREATE TABLE language(
	language_id int NOT NULL AUTO_INCREMENT,
  html BOOLEAN NOT NULL default 0,
  css BOOLEAN NOT NULL default 0,
  javascript BOOLEAN NOT NULL default 0,
  jquery BOOLEAN NOT NULL default 0,
  node BOOLEAN NOT NULL default 0,
  express BOOLEAN NOT NULL default 0,
  php BOOLEAN NOT NULL default 0,
  java BOOLEAN NOT NULL default 0,
  python BOOLEAN NOT NULL default 0,
  react BOOLEAN NOT NULL default 0,
  ruby BOOLEAN NOT NULL default 0,
	mysql BOOLEAN NOT NULL default 0,
  go BOOLEAN NOT NULL default 0,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (language_id)
);

CREATE TABLE job(
  job_id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description BLOB,
  pay int NOT NULL,
  date timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (job_id)
);

CREATE TABLE application(
  application_id int NOT NULL AUTO_INCREMENT,
  hired BOOLEAN NOT NULL default 0,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (application_id)
);
