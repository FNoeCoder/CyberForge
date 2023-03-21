exports.getBuscar = (req, res) =>{
    res.render("buscar",{Titulo_Pestaña: "Busqueda",producto: req.params.producto})
}
exports.postBuscar = (req, res) =>{
    if (!req.body.busqueda){
        res.redirect(`/`)
    
    }else{
        res.redirect(`/buscar/${req.body.busqueda.trim()}`)
    }
}