const mysql = require("mysql2")
const db = require('./config-bd');


function guardarProducto(idUser, nombre, descrp, precio, img_url, categorias, stock) {
    return db.execute(`insert into Productos values(4, ${idUser}, '${nombre}', '${descrp}', ${precio}, '${img_url}', '${categorias}', ${stock});`)
}

exports.guardarProducto = guardarProducto