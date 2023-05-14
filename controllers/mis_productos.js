const modelMisProduc = require("../models/mis_productos")

// obtienen todos los productos del usuairo que esté para mostrar todos los productos que haya enviado
exports.getMisP = (req, res) =>{
    if (req.session.idUser){
        modelMisProduc.getMisProductos(req.session.idUser).then(resul => {

            res.render("./mis_productos",{titulo: "MIS PRODUCTOS", 
            datos:{
                idUser:   req.session.idUser  || null,
                usuario:  req.session.usuario  || null,
                url_imagen: req.session.url_imagen  || null,
                tipo_usuario: req.session.tipo_usuario  || null },
            productos: resul[0]
        })       

        })
 
    }else{
        res.redirect("/iniciar-sesion")
    }

}
exports.getAgregarP = (req, res) =>{
    // Si no se ha iniciado un usuario se redirije a /iniciar-sesion
    if (!req.session.idUser){
        res.redirect("/iniciar-sesion")
    }
    // Si existe un usuario nos manda el formuario para agregar productos
    res.render("./agregar_producto",{titulo: "AGREGAR PRODUCTOS", 
    datos:{
        idUser:   req.session.idUser  || null,
        usuario:  req.session.usuario  || null,
        url_imagen: req.session.url_imagen  || null,
        tipo_usuario: req.session.tipo_usuario  || null }
})
}
exports.getEditarP = (req, res) =>{
        // Si no se ha iniciado un usuario se redirije a /iniciar-sesion

    if (!req.session.idUser){
        res.redirect("/iniciar-sesion")
    }
    // si ha iniciado toma el dato despues de /inciar-seison/(este) para pedirlo a la base de datos
    idP = req.params.idP

    // pido los datos del producto de la id del producto que está en la url 
    modelMisProduc.getUnProducto(idP,req.session.idUser).then(resul =>{
        res.render("./edit_prod",{titulo: "EDITAR PRODUCTO", 
        datos:{
            idUser:   req.session.idUser  || null,
            usuario:  req.session.usuario  || null,
            url_imagen: req.session.url_imagen  || null,
            tipo_usuario: req.session.tipo_usuario  || null },
            // mando los datos del producto al ejs para que se muestren 
        datosProducto: resul[0][0]
})
    })

}

exports.postAgregarP = (req, res) =>{
    // se guardan los datos del formulario para que se actualizen los datos del usuario y nos redirije a /mis-productos
    modelMisProduc.introducirProc(req.session.idUser,req.body.nombre,req.body.descripcion,req.body.precio,req.body.Imagen,req.body.categorias,req.body.stock)
    .then(resul =>{console.log("Se guardó")})
    res.redirect("/mis-productos")
}
exports.postEliminarEditar = (req, res)=>{
    // se optiene la ip del producto
    let idp = req.body.idProduc

    // si la accion del formulario es eliminar se elimina el producto mediante su id y la id del usuario que lo creo
    if (req.body.accion === "eliminar"){
        modelMisProduc.elimniarProduc(req.session.idUser, idp).then()
        res.redirect("/mis-productos")
    // si la accion es editar nos dirije al link para editar el prodcuto con la id del prodcuto para que pidan sus datos
    }else if (req.body.accion === "editar"){
        res.redirect(`/editar-produc/${idp}`)
    }
    res.redirect("/mis-productos")
    
}
exports.postActualizar = (req, res)=>{
    // se obtiene la ip del prodcuto
    let idp = req.body.idProduc

    // Se manda la ip del producto y del usuairo mas los datos del formulario para cambiar los valores del producto en la base de datos
    modelMisProduc.actualizarProduc( idp,req.session.idUser, 
        req.body.nombre,
        req.body.descripcion,
        req.body.precio,
        req.body.imagen,
        req.body.categorias,
        req.body.stock)
    res.redirect("/mis-productos")
}
