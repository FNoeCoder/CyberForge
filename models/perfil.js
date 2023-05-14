const mysql = require("mysql2")
const db = require('./config-bd');
// Funcion para actualizar la imagen de perfil y contra del usuario que sea la id
function actualizarPerfil(idusuario, contra, img) {
    return db.execute(`UPDATE Usuarios SET contra = '${contra}', url_imagen = '${img}' WHERE idUsuarios = ${idusuario};`  )
}
// funcion para obtener la imagen y la contra del usuario del que se le pase la id
function getContraIMG(idusuario) {
    return db.execute(`SELECT contra, url_imagen,email, nombre from Usuarios where idUsuarios = ${idusuario};`  )
}


exports.actualizarPerfil = actualizarPerfil
exports.getContraIMG = getContraIMG
