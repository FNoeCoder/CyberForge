
const mysql = require("mysql2")
const db = require('./config-bd');
// funcion para inserta los datos del formulario de de crear cuenta en la base de datos

function guardarUsuario(usuario, nombre, correo, contra) {
    return db.execute(`insert into Usuarios values(null, '${usuario}', '${nombre}', '${correo}', '${contra}', '', 'normal');`)
}
// Funcion para buscar el usuario cuando tratamos de iniciar sesion

function buscar_usuario(usuario, contra) {
    
    return db.execute(`select * from Usuarios where usuario = '${usuario}' and contra = '${contra}';  `)
    .then(resultado =>{
        if (resultado[0].length === 1){
            // si se encuentra el usuario dado que regresa solo solo tiene un tamaño
            return {
                idUser: resultado[0][0].idUsuarios,
                usuario: resultado[0][0].usuario,
                url_imagen: resultado[0][0].url_imagen,
                tipo_usuario: resultado[0][0].tipo_usuario,
                valido: true
            }
            // si no regresara nada o si no se encuentra retorna esta objeto

        }else{return {
            idUser: null,
            nombre: null,
            valido: false
        }}
    })
      // si hay un error ocn la consulta regresa este objeto

    .catch(err =>{
        return {
            idUser: null,
            nombre: null,
            valido: false
        }        
    })
    // lo que se hace al regresar el objeto valido : false, ese dato 
    // se manda al ejs de iniciar sesion para que ponga un mensaje de que no se ha encontrado

}
// Funcoin para actualizar la imagen del idUsuario que se le pase
function actualizarContra(idusuario, contra) {
    return db.execute(`UPDATE Usuarios SET contra = '${contra}' WHERE idUsuarios = ${idusuario};`  )
}
// Funcoin para actualizar la imagen del idUsuario que se le pase
function actualizarIMG(idusuario, img) {
    return db.execute(`UPDATE Usuarios SET url_imagen = '${img}' WHERE idUsuarios = ${idusuario};`  )
}

exports.actualizarIMG = actualizarIMG
exports.actualizarContra = actualizarContra
exports.guardarUsuario = guardarUsuario
exports.buscar_usuario = buscar_usuario
