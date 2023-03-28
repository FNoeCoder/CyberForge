
const mysql = require("mysql2")
const db = require('./config-bd');

function guardarUsuario(nombre_completo, email, contra, url_imagen) {
    return db.execute(`insert into Usuarios values(null, '${nombre_completo}', '${email}', '${contra}', '${url_imagen}');`)
}

function buscar_usuario(correo, contra) {
    
    return db.execute(`select * from Usuarios where email = '${correo}' and contra = '${contra}';  `)
    .then(resultado =>{
        if (resultado[0].length === 1){
            return {
                idUser: resultado[0][0].idUsuarios,
                nombre: resultado[0][0].nombre,
                valido: true
            }
        }else{return {
            idUser: null,
            nombre: null,
            valido: false
        }}
    })
    .catch(err =>{
        return {
            idUser: null,
            nombre: null,
            valido: false
        }        
    })

}


exports.guardarUsuario = guardarUsuario
exports.buscar_usuario = buscar_usuario
