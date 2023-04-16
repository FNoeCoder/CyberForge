const modelUsuario = require("../models/usuario")

exports.gerPerfil = (req, res) =>{
    if (!req.session.usuario){
        res.redirect("/iniciar-sesion")
    }
    res.render("perfil",{Titulo_Pestaña: "Perfil", 
    datos:{
        idUser: req.session ? req.session.idUser : "null",
        nombre: req.session ? req.session.nombre : "null",
        usuario: req.session ? req.session.usuario : "null",
        correo: req.session ? req.session.email : "null",
        contra: req.session ? req.session.contra : "null",
        url_imagen: req.session ? req.session.url_imagen : "null",
        tipo_usuario: req.session ? req.session.tipo_usuario : "null",}
})
}

exports.postActualizarContra = (req, res) =>{
    let contraActualizada = req.body.contra
    let idUser = req.session.idUser
    modelUsuario.actualizarContra(idUser, contraActualizada)
    .then(() =>{ 
        req.session.contra = contraActualizada
        res.redirect("/perfil") 
        
    })
    .catch(()=>{console.log("No se pudo cambiar la contraseña");})
}
exports.postActualizarIMG = (req, res) =>{
    let urlIMG = req.body.url_imagen
    let idUser = req.session.idUser
    modelUsuario.actualizarIMG(idUser, urlIMG)
    .then(() =>{ 
        req.session.url_imagen = urlIMG
        res.redirect("/perfil") 
        
    })
    .catch((a)=>{console.log("No se pudo cambiar la contraseña");console.log(a);})
}