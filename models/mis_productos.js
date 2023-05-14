const mysql = require("mysql2")
const db = require('./config-bd');

// Funcion para añadir un producto a la base de datos con los valores que se le introduscan
function introducirProc(idusuario, nombre, decrip, precio, img, catego, stock) {
    return db.execute(`INSERT INTO Productos (Usuarios_idUsuarios, nombre, descripcion, precio, img_url, Categorias, stock)
    VALUES (${idusuario}, '${nombre}', '${decrip}', ${precio}, '${img}', '${catego}', ${stock});`  )
}
// funcion para eliminar producto dependiendo del usuario que ingresó el producto y la ip del producto
function elimniarProduc(idusuario, idProduc) {
    return db.execute(`DELETE FROM Productos WHERE Usuarios_idUsuarios = ${idusuario} AND idProductos = ${idProduc};`  )
}
// Funcion para actualizar los campos del prodcuto con los parametros que se le introduscan
function actualizarProduc(idProduc, idusuario, nombre,descripcion ,precio ,img_url ,Categorias , stock) {
    return db.execute(`UPDATE Productos SET nombre = '${nombre}', descripcion = '${descripcion}', precio = ${precio}, img_url = '${img_url}', Categorias = '${Categorias}', stock = ${stock} WHERE idProductos = ${idProduc} AND Usuarios_idUsuarios = ${idusuario};`  )
}
// Funcin para obtener los productos que ha ingresado el usuario con su idUsuario
function getMisProductos( idusuario) {
    return db.execute(`SELECT * FROM Productos WHERE Usuarios_idUsuarios = ${idusuario};;
    `  )
}
// Funcion para obtener un producto especifico y de cierto usuairo especifico
function getUnProducto(idProduc, idusuario) {
    
    return db.execute(`SELECT * FROM Productos WHERE Usuarios_idUsuarios = ${idusuario} AND idProductos = ${idProduc};
    `  )
}

exports.getMisProductos = getMisProductos
exports.getUnProducto = getUnProducto
exports.actualizarProduc = actualizarProduc
exports.elimniarProduc = elimniarProduc
exports.introducirProc = introducirProc
