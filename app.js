const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const controlladorTienda = require("./controllers/tienda");
const controlladorError = require("./controllers/error");
const controlladorBusqueda = require("./controllers/busqueda")

app.get("/", controlladorTienda.getIndex);
app.get("/tienda", controlladorTienda.getIndex);

app.get("/registrar", controlladorTienda.getRegistrar);//? falta de view
app.get("/iniciar_sesion", controlladorTienda.getIniciar_sesion);//? falta de view
app.get("/perfil", controlladorTienda.getPerfil);
app.get("/carrito", controlladorTienda.getCariito);

app.get("/producto", controlladorTienda.getProducto);//? falta de view
app.get("/editar_producto", controlladorTienda.getEditarProducto); //? falta de view
app.get("/comprar", controlladorTienda.getComprar);//? falta de view
app.get("/mis_compras", controlladorTienda.getMisCompras);


app.post("/buscar", controlladorBusqueda.postBuscar);
app.get("/buscar/:producto", controlladorBusqueda.getBuscar);
app.use(express.static("public")) //* Si no encuentra un archivo lo busca en la carpeta public
app.use(controlladorError.getEror404); //* Cuando no se encuentre una ruta inexistenete


app.listen(3000, "0.0.0.0");
