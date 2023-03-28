const { text }=require("body-parser");
const modelProducto = require("../models/productos")


exports.postAgregarProducto = (req,res)=>{
    console.log(req.session);
    console.log(req.body);
    modelProducto.guardarProducto(req.session.idUser, req.body.nombrep, "    ", req.body.preciop, req.body.imgurl, req.body.categoriasp, req.body.stock)
    .then(resultado =>{
        res.redirect(`/agregar-producto`)
    })
    .catch(err =>{
        res.redirect(`/agregar-producto`)
        console.log(err);
    })
}