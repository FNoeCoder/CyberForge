const { text }=require("body-parser");

exports.getCariito = (req, res) =>{
    res.render("./carrito", {titulo: "CARRITO", datos:
    {
        idUser:  req.session.idUser || null,
        usuario:  req.session.usuario || null,
        url_imagen:  req.session.url_imagen || null,
        tipo_usuario: req.session.tipo_usuario || null,
    }
})
}

