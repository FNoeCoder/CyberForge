create database CyberForge;
use CyberForge;


CREATE TABLE IF NOT EXISTS `Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT unique KEY,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL unique KEY,
  `contra` VARCHAR(45) NOT NULL,
  `url_imagen` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE INDEX `idUsuarios_UNIQUE` (`idUsuarios` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;
select * from Usuarios;
select * from Productos;
select * from Usuarios where email = 'francisco.noe@gmail.com' and contra = "12345678";
insert into `Usuarios` values(null, "Francisco Noé Arriaga Hernández","francisco.noe@gmail.com","12345678", "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg");
select * from Usuarios;
update `Usuarios` set `url_imagen` = "https://www.dogalize.com/wp-content/uploads/2017/03/fotos-de-gatos-graciosos-gato-dormido-con-la-lengua-fuera.jpg" where `idUsuarios` = 1;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_idUsuarios` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `precio` FLOAT UNSIGNED NOT NULL,
  `img_url` VARCHAR(400) NOT NULL,
  `Categorias` VARCHAR(200) NOT NULL,
  `stock` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idProductos`, `Usuarios_idUsuarios`),
  INDEX `fk_Productos_Usuarios1_idx` (`Usuarios_idUsuarios` ASC),
  UNIQUE INDEX `idProductos_UNIQUE` (`idProductos` ASC) ,
  CONSTRAINT `fk_Productos_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Carrito` (
  `IdCarrito` INT NOT NULL AUTO_INCREMENT,
  `can_productos` INT UNSIGNED NOT NULL,
  `precio_producto_cantidad` FLOAT UNSIGNED NOT NULL,
  PRIMARY KEY (`IdCarrito`),
  UNIQUE INDEX `IdCarrito_UNIQUE` (`IdCarrito` ASC))
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS`Compras` (
  `IdCompra` INT NOT NULL AUTO_INCREMENT,
  `estado_del_pedido` VARCHAR(45) NOT NULL,
  `n_producto` INT UNSIGNED NOT NULL,
  `fecha_hora_compra` DATETIME NOT NULL,
  PRIMARY KEY (`IdCompra`),
  UNIQUE INDEX `IdCompra_UNIQUE` (`IdCompra` ASC))
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(45) NOT NULL,
  `contra` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idAdmin`),
  UNIQUE INDEX `idAdmin_UNIQUE` (`idAdmin` ASC) ,
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) )
ENGINE = InnoDB;
insert into `Admin` values(null, "noe@cyberforge.com", "12345678", "Francisco Noé Arriaga Hernández");
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Drieccion_Registro` (
  `idDrieccion` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_idUsuarios` INT NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  `ciudad` VARCHAR(30) NOT NULL,
  `cp` INT(5) NOT NULL,
  `calle` VARCHAR(45) NOT NULL,
  `n_exterior` INT(4) NOT NULL,
  `n_interior` VARCHAR(4) NOT NULL,
  `telefono` INT(10) NOT NULL,
  `quien_recibe` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idDrieccion`, `Usuarios_idUsuarios`),
  INDEX `fk_Drieccion_Registro_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  UNIQUE INDEX `idDrieccion_UNIQUE` (`idDrieccion` ASC) ,
  CONSTRAINT `fk_Drieccion_Registro_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Tarjeta` (
  `idTarjeta` INT NOT NULL AUTO_INCREMENT,
  `numero_tarjeta` INT(16) UNSIGNED ZEROFILL NULL,
  `nombre` VARCHAR(45) NULL,
  `PIN` INT(4) ZEROFILL UNSIGNED NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idTarjeta`, `Usuarios_idUsuarios`),
  INDEX `fk_Tarjeta_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  UNIQUE INDEX `idTarjeta_UNIQUE` (`idTarjeta` ASC) ,
  CONSTRAINT `fk_Tarjeta_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Peticiones` (
  `idPeticiones` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `precio` FLOAT UNSIGNED NOT NULL,
  `img_url` VARCHAR(400) NOT NULL,
  `catecorias` VARCHAR(200) NOT NULL,
  `stock` INT NOT NULL,
  `estado` VARCHAR(15) NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  `Admin_idAdmin` INT NULL,
  PRIMARY KEY (`idPeticiones`, `Usuarios_idUsuarios`),
  INDEX `fk_Peticiones_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  UNIQUE INDEX `idPeticiones_UNIQUE` (`idPeticiones` ASC) ,
  INDEX `fk_Peticiones_Admin1_idx` (`Admin_idAdmin` ASC) ,
  CONSTRAINT `fk_Peticiones_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Peticiones_Admin1`
    FOREIGN KEY (`Admin_idAdmin`)
    REFERENCES `Admin` (`idAdmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Usuarios_Carrito` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Carrito_IdCarrito` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Carrito_IdCarrito`),
  INDEX `fk_Usuarios_has_Carrito_Carrito1_idx` (`Carrito_IdCarrito` ASC) ,
  INDEX `fk_Usuarios_has_Carrito_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  CONSTRAINT `fk_Usuarios_has_Carrito_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Carrito_Carrito1`
    FOREIGN KEY (`Carrito_IdCarrito`)
    REFERENCES `Carrito` (`IdCarrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Usuarios_Compras` (
  `Usuarios_idUsuarios` INT NOT NULL,
  `Compras_IdCompra` INT NOT NULL,
  PRIMARY KEY (`Usuarios_idUsuarios`, `Compras_IdCompra`),
  INDEX `fk_Usuarios_has_Compras_Compras1_idx` (`Compras_IdCompra` ASC) ,
  INDEX `fk_Usuarios_has_Compras_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  CONSTRAINT `fk_Usuarios_has_Compras_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Compras_Compras1`
    FOREIGN KEY (`Compras_IdCompra`)
    REFERENCES `Compras` (`IdCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Opiniones` (
  `idOpiniones` INT NOT NULL AUTO_INCREMENT,
  `Usuarios_idUsuarios` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `estrellas` INT(1) UNSIGNED NOT NULL,
  PRIMARY KEY (`idOpiniones`, `Usuarios_idUsuarios`, `Productos_idProductos`),
  INDEX `fk_Opiniones_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  INDEX `fk_Opiniones_Productos1_idx` (`Productos_idProductos` ASC) ,
  UNIQUE INDEX `idOpiniones_UNIQUE` (`idOpiniones` ASC) ,
  CONSTRAINT `fk_Opiniones_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Opiniones_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Carrito_Productos` (
  `Carrito_IdCarrito` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  PRIMARY KEY (`Carrito_IdCarrito`, `Productos_idProductos`),
  INDEX `fk_Carrito_has_Productos_Productos1_idx` (`Productos_idProductos` ASC) ,
  INDEX `fk_Carrito_has_Productos_Carrito1_idx` (`Carrito_IdCarrito` ASC) ,
  CONSTRAINT `fk_Carrito_has_Productos_Carrito1`
    FOREIGN KEY (`Carrito_IdCarrito`)
    REFERENCES `Carrito` (`IdCarrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Carrito_has_Productos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Compras_Productos` (
  `Compras_IdCompra` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  PRIMARY KEY (`Compras_IdCompra`, `Productos_idProductos`),
  INDEX `fk_Compras_has_Productos_Productos1_idx` (`Productos_idProductos` ASC) ,
  INDEX `fk_Compras_has_Productos_Compras1_idx` (`Compras_IdCompra` ASC) ,
  CONSTRAINT `fk_Compras_has_Productos_Compras1`
    FOREIGN KEY (`Compras_IdCompra`)
    REFERENCES `Compras` (`IdCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compras_has_Productos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------




