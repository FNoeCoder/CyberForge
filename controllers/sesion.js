const { text }=require("body-parser");
const modelUsuario = require("../models/usuario")


exports.getIniciarSesion = (req, res) =>{
    req.session.destroy()
    res.render("./sesion/iniciar-sesion", {aviso: false})
}
exports.postIniciarSesion =(req, res) =>{
    // console.log(req.body);
    let correo = req.body.iemail
    let contra = req.body.icontra
    modelUsuario.buscar_usuario(correo, contra)
    .then(usuario_valido =>{
        if (usuario_valido.valido){
            req.session.idUser = usuario_valido.idUser
            req.session.nombre = usuario_valido.nombre
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
    var nombre_completo = req.body.cnombre.trim() + " " + req.body.c1apelllido.trim() + " " + req.body.c2apellido.trim(); 
    var email = req.body.cemail
    var contra = req.body.ccontra
    var urlimagen = req.body.curlimagen
    
    modelUsuario.guardarUsuario(nombre_completo, email, contra, urlimagen)
    .then(resultado =>{
        res.redirect(`/`)
    })
    .catch(err =>{
        res.redirect(`/`)
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

