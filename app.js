const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session")

const app = express();

app.use(session({
    secret: "fa3jr3ajljenlaua8483a",
    resave: true,
    saveUninitialized: true

}))

const routerSesion = require("./routes/sesion")
const routerCarrito = require("./routes/carrito")
const routerPerfil = require("./routes/perfil")
const routerProductos = require("./routes/mis_productos")


app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routerSesion)
app.use(routerCarrito)
app.use(routerPerfil)
app.use(routerProductos)


const controlladorTienda = require("./controllers/tienda");
const controlladorError = require("./controllers/error");
const controlladorBusqueda = require("./controllers/busqueda")
const controlladorProducto = require("./controllers/producto")


app.get("/", controlladorTienda.getIndex);
app.get("/tienda", controlladorTienda.getIndex);







app.get("/producto", controlladorTienda.getProducto);//? falta de view
app.get("/editar_producto", controlladorTienda.getEditarProducto); //? falta de view
app.get("/comprar", controlladorTienda.getComprar);//? falta de view
app.get("/mis_compras", controlladorTienda.getMisCompras);


app.post("/buscar", controlladorBusqueda.postBuscar);
app.get("/buscar/:producto", controlladorBusqueda.getBuscar);


app.get("/agregar-producto", (req, res)=>{
    res.render("./producto/add-producto",{Titulo_Pestaña: "Agregar Producto"})
})
app.post("/agregar-producto", controlladorProducto.postAgregarProducto)

app.use(express.static("public")) //* Si no encuentra un archivo lo busca en la carpeta public
app.use(controlladorError.getEror404); //* Cuando no se encuentre una ruta inexistenete


app.listen(3000);
