const { text }=require("body-parser");
const modelBuscar = require("../models/buscar")

exports.getBuscar = (req, res) =>{
    // Se renderiza buscar con su titulo, mas los datos de slos producto sde la busqueda

    modelBuscar.Busqueda(req.query.busqueda).then(resp =>{
        console.log(resp[0]);
        res.render("./buscar", {titulo: "BUSQUEDA", datos:{
            idUser: req.session.idUser || null,
            nombre: req.session.nombre || null,
            usuario:  req.session.usuario || null,
            url_imagen:  req.session.url_imagen || null,
            tipo_usuario:  req.session.tipo_usuario || null},
            
        resultados: resp[0]
})
    })

}

// "./pagina", {titulo: "titulo", datos:{
//     idUser: req.session.idUser || null,
//     nombre: req.session.nombre || null,
//     usuario:  req.session.usuario || null,
//     url_imagen:  req.session.url_imagen || null,
//     tipo_usuario:  req.session.tipo_usuario || null},

// Estos parametros son para ver si hay una sesion y para poner el menú y la imagen del usuairo