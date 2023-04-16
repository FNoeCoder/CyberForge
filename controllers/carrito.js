const { text }=require("body-parser");

exports.getCariito = (req, res) =>{
    res.render("./carrito", {Titulo_Pestaña: "Carrito", datos:
    {
        idUser: req.session ? req.session.idUser : "null",
        nombre: req.session ? req.session.nombre : "null",
        usuario: req.session ? req.session.usuario : "null",
        url_imagen: req.session ? req.session.url_imagen : "null",
        tipo_usuario: req.session ? req.session.tipo_usuario : "null",
    }
})
}

