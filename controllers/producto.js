const { text }=require("body-parser");
const modelProducto = require("../models/productos")


exports.getAgregarProducto = (req,res)=>{
    res.render("mis_productos",{Titulo_Pestaña: "Perfil", 
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
exports.postAgregarProducto = (req,res)=>{
    modelProducto.guardarProducto(req.session.idUser, req.body.nombre, req.body.descripcion, req.body.precio, req.body.img_url,req.body.categorias , req.body.stock,req.session.tipo_usuario)
    .then(resultado =>{
        res.redirect(`/agregar-producto`)
    })
    .catch(err =>{
        res.redirect(`/agregar-producto`)
        console.log(err);
    })
}