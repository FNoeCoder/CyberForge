
const express = require("express")
const router = express.Router()

const controlladorProductos = require("../controllers/producto")



router.get("/mis-productos", controlladorProductos.getAgregarProducto)

module.exports = router;