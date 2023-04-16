const mysql = require("mysql2")
const db = require('./config-bd');


function guardarProducto(idUser, nombre, descrp, precio, img_url,categorias, stock,tipo_usuario) {
    return db.execute(`insert into Productos values(null, ${idUser}, '${nombre}', '${descrp}', ${precio}, '${img_url}', '${categorias}', ${stock}), '${tipo_usuario}';`)
}

exports.guardarProducto = guardarProducto