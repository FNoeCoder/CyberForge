const { text }=require("body-parser");
const modelUsuario = require("../models/usuario")


exports.getIniciarSesion = (req, res) =>{
    req.session.destroy()
    res.render("./sesion/iniciar-sesion", {aviso: false})
}
exports.postIniciarSesion =(req, res) =>{
    // console.log(req.body);
    let usuario = req.body.usuario
    let contra = req.body.contra
    modelUsuario.buscar_usuario(usuario, contra)
    .then(usuario_valido =>{
        if (usuario_valido.valido){
            req.session.idUser = usuario_valido.idUser
            req.session.nombre = usuario_valido.nombre
            req.session.usuario = usuario_valido.usuario
            res.redirect("/")
            console.log(req.session);
        }else{
            res.render("./sesion/iniciar-sesion", {aviso: true})
        }

    })
    .catch(err => {})
}

exports.getCrearCuenta =(req, res) =>{
    res.render("./sesion/crear-cuenta")
}
exports.postCrearCuenta =(req, res) =>{
    let nombre_completo = req.body.nombre.trim() + " " + req.body.apellidos.trim()
    let correo = req.body.correo
    let usuario = req.body.usuario
    let contra = req.body.contra
    let contra2 = req.body.confirmarcontra
    let urlimagen = req.body.urlimagen
    
    modelUsuario.guardarUsuario(usuario, nombre_completo, correo, contra, urlimagen)
    .then(resultado =>{
        res.redirect(`/`)
    })
    .catch(err =>{
        console.log(err);
        res.redirect(`/erere`)
    })
    

}
// ? Funciones para verificar datos - aun en preparación
// function datosCorrectos(nombre_completo, email, contra, urlimagen){


//     if (caracterEnTexto(nombre_completo, "-,;:_{}[]´+¨*¿'¡?=)(/&%$#!°|~^`1234567890")){
        
//     }

//     }

    


// function caracterEnTexto(texto, caracteresJuntos){
//     caracteresSeparados = caracteresJuntos.split("")
//     for (let i = 0; i < caracteresSeparados.length; i++) {
//         if (texto.includes(caracteresSeparados[i])) {
//           return true;
//         }
//     }
//     return false;
// };

