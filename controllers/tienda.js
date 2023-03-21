
exports.getIndex = (req, res) =>{

    res.render("inicio",{Titulo_Pestaña: "CyberForge"})
}

exports.getRegistrar = (req, res) =>{
    res.send("Registrar")
}
exports.getIniciar_sesion = (req, res) =>{
    res.send("Iniciar sesion")
}
exports.getPerfil = (req, res) =>{
    res.render("perfil",{Titulo_Pestaña: "Perfil"})
}

exports.getCariito = (req, res) =>{
    res.render("carrito",{Titulo_Pestaña: "Carrito"})
}
exports.getProducto = (req, res) =>{
    res.send("Producto")
}
exports.getEditarProducto = (req, res) =>{
    res.send("Editar Producto")
}
exports.getComprar = (req, res) =>{
    res.send("Comprar")
}




exports.getMisCompras = (req, res) =>{
    res.render("mis_compras",{Titulo_Pestaña: "Mis compras"})
}





