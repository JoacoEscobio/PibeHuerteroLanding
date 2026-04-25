CREATE DATABASE pibe_huertero;

USE pibe_huertero;

CREATE TABLE usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100),
email VARCHAR(100) UNIQUE,
password VARCHAR(255),
rol VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE cursos(
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150),
descripcion TEXT,
precio DECIMAL(10,2),
imagen VARCHAR(255)
);

CREATE TABLE productos(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(150),
descripcion TEXT,
precio DECIMAL(10,2),
imagen VARCHAR(255)
);

CREATE TABLE servicios(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(150),
descripcion TEXT,
imagen VARCHAR(255)
);