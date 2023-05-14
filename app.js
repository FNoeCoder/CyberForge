const express = require("express");
const bodyParser = require('body-parser');
const session = require("express-session")

const app = express();
// Inicializamos una sesión
app.use(session({
    secret: "fa3jr3ajljenlaua8483a",
    resave: true,
    saveUninitialized: true

}))

// const routerAdminusuarios = require ("./routes/admin_usuarios.js")
const routerBuscar = require ("./routes/buscar.js")
const routerCarrito = require ("./routes/carrito.js")
// const routerCompras = require ("./routes/compras.js")
// const routerDirecciones = require ("./routes/direcciones.js")
const routerMIsProductos = require ("./routes/mis_productos.js")
// const routerNotificaciones = require ("./routes/notificaciones.js")
const routerPerfil = require ("./routes/perfil.js")
const routerSesion = require ("./routes/sesion.js")
// const routerTarjeta = require ("./routes/tarjetas.js")



app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(routerAdminusuarios)
app.use(routerBuscar)
app.use(routerCarrito)
// app.use(routerCompras)
// app.use(routerDirecciones)
app.use(routerMIsProductos)
// app.use(routerNotificaciones)
app.use(routerPerfil)
app.use(routerSesion)
// app.use(routerTarjeta)




const controlladorInicio = require("./controllers/inicio");
const controlladorError = require("./controllers/error");



app.get("/", controlladorInicio.getIndex);

app.get("/tienda", controlladorInicio.getIndex);


app.use(express.static("public")) //* Si no encuentra un archivo lo busca en la carpeta public
app.use(controlladorError.getEror404); //* Cuando no se encuentre una ruta inexistenete


app.listen(3000);
