const mysql = require("mysql2")
const db = require('./config-bd');

// Funcion para buscar la palabra que se le introdusca para ver si se encuentra dentro del nombre, descripcion o categorias del producto
// Se regresan los producto que cumplan el tener la palabra
function Busqueda(busqueda) {
    
    return db.execute(`select * from productos where nombre like "%${busqueda}%" or descripcion like '%${busqueda}%' or Categorias like '%${busqueda}%';`  )
}

exports.Busqueda = Busqueda