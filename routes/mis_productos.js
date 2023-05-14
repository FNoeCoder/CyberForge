
const express = require("express")
const router = express.Router()
const controllerMisproductos= require("../controllers/mis_productos")

router.get("/mis-productos", controllerMisproductos.getMisP)

router.get("/agregar-producto", controllerMisproductos.getAgregarP)

router.get("/editar-produc/:idP", controllerMisproductos.getEditarP)

router.post("/producto", controllerMisproductos.postEliminarEditar)

router.post("/agregar_producto",  controllerMisproductos.postAgregarP)

router.post("/editar-produc", controllerMisproductos.postActualizar)

module.exports = router;