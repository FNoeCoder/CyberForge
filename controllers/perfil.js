const modelUsuario = require("../models/perfil")

exports.getPerfil = (req, res) =>{
    // si no se ha obtenido un usuairo nos redirije a iniciar seison
    if (!req.session.usuario){
        res.redirect("/iniciar-sesion")
    }else{
        // Si hay una sesion entconees se obtienen los datos de del usuario para mostrarlos en /perfil
        modelUsuario.getContraIMG(req.session.idUser).then( resultado =>{
            console.log(resultado[0][0]);
            res.render("./perfil",{titulo: "PERFIL", 
                datos:{
                    idUser: req.session.idUser || null,
                    usuario: req.session.usuario || null,
                    url_imagen: req.session.url_imagen || null,
                    tipo_usuario: req.session.tipo_usuario || null},
                datosPerfil: {contra: resultado[0][0].contra,
                            url_img: resultado[0][0].url_imagen,
                            nombre: resultado[0][0].nombre,
                            correo: resultado[0][0].email
                        }
            })
        })
        .catch(err => res.redirect("/iniciar-sesion"))

}}

exports.postActualizarPerfil = (req, res) =>{
    // obtienen los datos nuevos de la contraseña y la imagen del usuario para poder actualizarlos
    let contraActualizada = req.body.contra
    let imgActualizada = req.body.url_img
    let idUser = req.session.idUser
    modelUsuario.actualizarPerfil(idUser, contraActualizada, imgActualizada)
    .then(() =>{ 
        req.session.url_imagen = imgActualizada
        res.redirect("/perfil") 
    })
    .catch(()=>{console.log("No se pudo cambiar la contraseña");})
}