
exports.getIndex = (req, res) =>{

    res.render("inicio",{Titulo_Pestaña: "CyberForge", datos:
    {
        idUser: req.session ? req.session.idUser : "null",
        nombre: req.session ? req.session.nombre : "null",
        usuario: req.session ? req.session.usuario : "null",
        url_imagen: req.session ? req.session.url_imagen : "null",
        tipo_usuario: req.session ? req.session.tipo_usuario : "null",
    }
})

}

exports.getPerfil = (req, res) =>{
    res.render("perfil",{Titulo_Pestaña: "Perfil", datos:
    {
        idUser: req.session ? req.session.idUser : "null",
        nombre: req.session ? req.session.nombre : "null",
        usuario: req.session ? req.session.usuario : "null",
        url_imagen: req.session ? req.session.url_imagen : "null",
        tipo_usuario: req.session ? req.session.tipo_usuario : "null",
    }})
}


exports.getProducto = (req, res) =>{

}
exports.getEditarProducto = (req, res) =>{

}
exports.getComprar = (req, res) =>{

}




exports.getMisCompras = (req, res) =>{

}

function x (req, res){
    return{
        idUser: req.session ? req.session.idUser : "null",
        nombre: req.session ? req.session.nombre : "null",
        usuario: req.session ? req.session.usuario : "null",
        url_imagen: req.session ? req.session.url_imagen : "null",
        tipo_usuario: req.session ? req.session.tipo_usuario : "null",
    }
}


