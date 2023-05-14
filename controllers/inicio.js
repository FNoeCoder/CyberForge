exports.getIndex = (req, res) =>{
    // Se renderiza el inicio con su titulo, mas los datos de sesion, si no hay datos de sesion se colocará null
    res.render("./inicio",{titulo: "INICIO", 
    datos:{
        idUser:   req.session.idUser  || null,
        usuario:  req.session.usuario  || null,

        url_imagen: req.session.url_imagen  || null,
        tipo_usuario: req.session.tipo_usuario  || null }
})
}


