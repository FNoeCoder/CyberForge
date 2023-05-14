create database CyberForge2;
use CyberForge2;


CREATE TABLE IF NOT EXISTS `Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(15) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contra` VARCHAR(45) NOT NULL,
  `url_imagen` VARCHAR(600) NULL,
  `tipo_usuario` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  UNIQUE INDEX `idUsuarios_UNIQUE` (`idUsuarios` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) )
ENGINE = InnoDB;
show columns from Usuarios;
insert into Usuarios values(DEFAULT, 'Noe3xd', 'Noe prueba XD', 'noexd@gmail.com', '12121212', '', 'normal');
insert into `Usuarios` values(null,"Noe3333", "Francisco Noé Arriaga Hernández","franscoe@gmail.com","33333333", "https://i.pinimg.com/236x/81/01/a4/8101a432ae9f1f92cb7aa0d87cec54de.jpg","admin");
select * from Usuarios;


#normal
#admin
#superadmin


select * from Usuarios where usuario = "nOe3333";
##delete from Usuarios where usuario = "Noe3333";

#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Productos` (
  `idProductos` INT NULL AUTO_INCREMENT,
  `Usuarios_idUsuarios` INT NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `precio` FLOAT UNSIGNED NOT NULL,
  `img_url` VARCHAR(600) NOT NULL,
  `Categorias` VARCHAR(200) NOT NULL,
  `stock` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idProductos`, `Usuarios_idUsuarios`),
  INDEX `fk_Productos_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  UNIQUE INDEX `idProductos_UNIQUE` (`idProductos` ASC) ,
  CONSTRAINT `fk_Productos_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
select * from productos;


#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Carrito` (
  `IdCarrito` INT NOT NULL AUTO_INCREMENT,
  `can_productos` INT UNSIGNED NOT NULL,
  `precio_producto_cantidad` FLOAT UNSIGNED NOT NULL,
  PRIMARY KEY (`IdCarrito`),
  UNIQUE INDEX `IdCarrito_UNIQUE` (`IdCarrito` ASC))
ENGINE = InnoDB;
#---------------------------------------------------------------------------------------------

#---------------------------------------------------------------------------------------------

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

#---------------------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `Notificaciones` (
  `idNotif` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Titulo` VARCHAR(50) NOT NULL,
  `Descripcion` VARCHAR(200) NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idNotif`, `Usuarios_idUsuarios`),
  UNIQUE INDEX `idNotif_UNIQUE` (`idNotif` ASC) ,
  INDEX `fk_Notificaciones_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  CONSTRAINT `fk_Notificaciones_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `Compra` (
  `IdCompra` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(400) NOT NULL,
  `precio` FLOAT NOT NULL,
  `n_producto` INT UNSIGNED NOT NULL,
  `img_url` VARCHAR(600) NOT NULL,
  `estado_del_pedido` VARCHAR(45) NOT NULL,
  `emrpesa_emvio` VARCHAR(45) NOT NULL,
  `fecha_compra` DATETIME NOT NULL,
  `fecha_entrega` DATE NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`IdCompra`, `Usuarios_idUsuarios`),
  UNIQUE INDEX `IdCompra_UNIQUE` (`IdCompra` ASC) ,
  INDEX `fk_Compra_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) ,
  CONSTRAINT `fk_Compra_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;




