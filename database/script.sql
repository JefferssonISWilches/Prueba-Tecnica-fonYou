CREATE DATABASE onepiece;

USE onepiece;

CREATE TABLE personaje (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    identificacion VARCHAR(50),
    imagen TEXT,
    rol VARCHAR(100),
    descripcion TEXT,
    fecha_creacion DATETIME
);