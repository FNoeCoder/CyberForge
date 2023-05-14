const { text }=require("body-parser");
const modelUsuario = require("../models/sesion")


exports.getIniciarSesion = (req, res) =>{
    // Cuando se entra al ejs de iniciar sesion se destruye la sesion
    req.session.destroy()
    res.render("./sesion/iniciar-sesion", {aviso: false})
}
exports.postIniciarSesion =(req, res) =>{
    // Se obtienen los datos del formulario iniciar sesion para verificar que se encuentra en la base de datos
    let usuario = req.body.usuario
    let contra = req.body.contra
    modelUsuario.buscar_usuario(usuario, contra)
    .then(usuario_valido =>{
        if (usuario_valido.valido){
            // Si el usuairo es balido entonce ss crean variales dentro de req.session para que estén disponibles
            req.session.idUser = usuario_valido.idUser
            req.session.usuario = usuario_valido.usuario
            req.session.url_imagen = usuario_valido.url_imagen
            req.session.tipo_usuario = usuario_valido.tipo_usuario
            // y finalmente redirije al inicio de la pagina
            res.redirect("/")
        }else{
            // Si no se encuentra el usuario vuelve al iniciar seison con una variable aviso = true para que ponga un mensaje
            res.render("./sesion/iniciar-sesion", {aviso: true})
        }

    })
    .catch(err => {})
}

exports.getCrearCuenta =(req, res) =>{
    // Renderiza el ejs de crear cuenta
    res.render("./sesion/crear-cuenta",{aviso: false})
}
exports.postCrearCuenta =(req, res) =>{
    // Obtiene los datos del formulario de crear cuenta
    let nombre_completo = req.body.nombre.trim().toUpperCase() + " " + req.body.apellidos.trim().toUpperCase()
    let correo = req.body.correo.toLowerCase()
    let usuario = req.body.usuario
    let contra = req.body.contra
    let contra2 = req.body.confirmarcontra

    // Y se mandar a guardar en la base de datos con el modeloUsuario
    modelUsuario.guardarUsuario(usuario, nombre_completo, correo, contra)
    .then(resultado =>{
        res.redirect("/iniciar-sesion")
        // si se registra correctamente nos manda a inciar sesion 
    })
    .catch(err =>{
        // Si ha habido un error manda una variable aviso=true para mostrar un mensaje en el ejs de crear cuenta
        res.render("./sesion/crear-cuenta", {aviso: true})
    })
}

exports.getCerrarSesion = (req, res) =>{
    // nos redirije a /iniciar-sesion lo que hace que a la vez se trestruya la sesion
    res.redirect("/iniciar-sesion")
}

