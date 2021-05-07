-- Descomentar para eliminar la base de datos.
-- DROP TABLE APLICACION_WEB.libro;
-- DROP TABLE APLICACION_WEB.sede_jjoo;
-- DROP TABLE APLICACION_WEB.ciudad;
-- DROP TABLE APLICACION_WEB.pais;
-- DROP TABLE APLICACION_WEB.tipo_jjoo;
-- DROP SCHEMA APLICACION_WEB;
-- COMMIT;

CREATE SCHEMA APLICACION_WEB;

-- CREACION DE TABLAS
-- TABLA LIBRO
CREATE TABLE APLICACION_WEB.libro (
  id_libro INTEGER NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(64) NOT NULL,
  autor VARCHAR(64) NOT NULL,
  CONSTRAINT PK_LIBRO PRIMARY KEY (id_libro)
);

-- TABLA PAIS
CREATE TABLE APLICACION_WEB.pais (
  id_pais INTEGER NOT NULL AUTO_INCREMENT,
  nombre_pais VARCHAR(64) NOT NULL,
  codigo_pais VARCHAR(2) NOT NULL,
  valor_pais INTEGER NOT NULL,
  CONSTRAINT PK_PAIS PRIMARY KEY (id_pais)
);
-- TABLA CIUDAD
CREATE TABLE APLICACION_WEB.ciudad (
  id_ciudad INTEGER NOT NULL AUTO_INCREMENT,
  nombre_ciudad VARCHAR(64) NOT NULL,
  id_pais INTEGER NOT NULL,
  valor_ciudad INTEGER,
  CONSTRAINT PK_CIUDAD PRIMARY KEY (id_ciudad),
  CONSTRAINT FK_CIUDAD_PAIS FOREIGN KEY (id_pais)
    REFERENCES pais(id_pais) ON DELETE RESTRICT
);

-- TIPO DE JUEGOS OLIMPICOS
CREATE TABLE APLICACION_WEB.tipo_jjoo (
  id_tipo_jjoo INTEGER NOT NULL AUTO_INCREMENT,
  descripcion_tipo VARCHAR(32) NOT NULL,
  CONSTRAINT PK_TIPO_JJOO PRIMARY KEY (id_tipo_jjoo)
);

-- TABLA SEDE DE JUEGOS OLIMPICOS
CREATE TABLE APLICACION_WEB.sede_jjoo (
  año INTEGER NOT NULL AUTO_INCREMENT,
  id_tipo_jjoo INTEGER NOT NULL,
  sede INTEGER NOT NULL,
  CONSTRAINT PK_SEDE_JJOO PRIMARY KEY (año, id_tipo_jjoo),
  CONSTRAINT FK_SEDE_JJOO_CIUDAD FOREIGN KEY (sede)
    REFERENCES ciudad(id_ciudad) ON DELETE RESTRICT,
  CONSTRAINT FK_SEDE_JJOO_TIPO_JJOO FOREIGN KEY (id_tipo_jjoo)
    REFERENCES tipo_jjoo(id_tipo_jjoo) ON DELETE RESTRICT
);

COMMIT;

INSERT INTO APLICACION_WEB.pais VALUES
  (1,'España', 'es', 100),
  (2, 'Portugal', 'pt', 200),
  (3, 'Francia', 'fr', 50),
  (4, 'Italia', 'it', 150);

INSERT INTO APLICACION_WEB.ciudad VALUES
  (1, 'La Coruña', 1, 93),
  (2, 'Madrid', 1, null),
  (3, 'Barcelona', 1, 124),
  (4, 'Lisboa', 2, 134),
  (5, 'Oporto', 2, null),
  (6, 'Coimbra', 2, null),
  (7, 'Chamonix', 3, 123),
  (8, 'París', 3, 5),
  (9, 'Niza', 3, null),
  (10, 'Milán', 4, 135),
  (11, 'Roma', 4, 125),
  (12, 'Turín', 4, 190);

INSERT INTO APLICACION_WEB.tipo_jjoo VALUES
(1, 'Invierno'),
(2, 'Verano');

INSERT INTO APLICACION_WEB.sede_jjoo VALUES
  (1900, 2, 8),
  (1924, 2, 8),
  (1924, 1, 7),
  (1960, 2, 11),
  (1992, 2, 3),
  (2006, 1, 12);
  
INSERT INTO APLICACION_WEB.libro (titulo, autor) VALUES
  ('Don Quijote de la Mancha', 'Miguel de Cervantes'),
  ('Romeo y Julieta', 'William Shakespeare'),
  ('Fausto', 'Johann Wolfgang Goethe'),
  ('La divina comedia', 'Dante Alighieri'),
  ('Madame Bovari', 'Gustave Flaubert'),
  ('Oliver Twist', 'Charles Dickens'),
  ('Tom Sawyer', 'Mark Twain'),
  ('El retrato de Dorian Gray', 'Oscar Wilde'),
  ('La odisea', 'Homero');

COMMIT;

