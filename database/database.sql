CREATE DATABASE vehiculos_db;
USE vehiculos_db;



CREATE TABLE modelo
(
    Id_modelo INT NOT NULL AUTO_INCREMENT,
    Nombre varchar(50),
    Cilindraje FLOAT NOT NULL,
    Torque INT NOT NULL,
    Caballos INT NOT NULL,
    PRIMARY KEY (Id_modelo)
);

CREATE TABLE cliente
(
    Cedula INT NOT NULL,
    Fecha_nac DATETIME,
    PRIMARY KEY (Cedula)
);

CREATE TABLE vehiculo
(
    Id_vehiculo INT NOT NULL AUTO_INCREMENT,
    Id_modelo_v INT NOT NULL,
    Precio FLOAT,
    Cedula_v INT NOT NULL,
    PRIMARY KEY (Id_vehiculo),
    FOREIGN KEY (Cedula_v) REFERENCES cliente(Cedula),
    FOREIGN KEY (Id_modelo_v) REFERENCES modelo(Id_modelo)
);



