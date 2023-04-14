
const mysql = require("mysql2")
const db = require('./config-bd');

function guardarUsuario(usuario, nombre, correo, contra) {
    return db.execute(`insert into Usuarios values(null, '${usuario}', '${nombre}', '${correo}', '${contra}', '', 'normal');`)
}

function buscar_usuario(usuario, contra) {
    
    return db.execute(`select * from Usuarios where usuario = '${usuario}' and contra = '${contra}';  `)
    .then(resultado =>{
        if (resultado[0].length === 1){
            return {
                idUser: resultado[0][0].idUsuarios,
                nombre: resultado[0][0].nombre,
                usuario: resultado[0][0].usuario,
                url_imagen: resultado[0][0].url_imagen,
                tipo_usuario: resultado[0][0].tipo_usuario,
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
