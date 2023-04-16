
const express = require("express")
const router = express.Router()

const controlladorTienda = require("../controllers/carrito")

router.get("/carrito", controlladorTienda.getCariito);

module.exports = router;

