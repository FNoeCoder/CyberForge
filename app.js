const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session")

const app = express();

app.use(session({
    secret: "fa3jr3ajljenlaua8483a",
    resave: true,
    saveUninitialized: true

}))

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const controlladorTienda = require("./controllers/tienda");
const controlladorError = require("./controllers/error");
const controlladorBusqueda = require("./controllers/busqueda")
const controlladorSesion = require("./controllers/sesion")
const controlladorProducto = require("./controllers/producto")

app.get("/", controlladorTienda.getIndex);
app.get("/tienda", controlladorTienda.getIndex);

app.get("/iniciar-sesion",controlladorSesion.getIniciarSesion )
app.post("/iniciar-sesion", controlladorSesion.postIniciarSesion)


app.get("/crear-cuenta", controlladorSesion.getCrearCuenta)
app.post("/crear-cuenta", controlladorSesion.postCrearCuenta)

app.get("/perfil", controlladorTienda.getPerfil);
app.get("/carrito", controlladorTienda.getCariito);

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


app.listen(3000, "0.0.0.0");
