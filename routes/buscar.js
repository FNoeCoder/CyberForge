const express = require("express")
const router = express.Router()

const controllerBuscar = require("../controllers/buscar")

router.get("/buscar", controllerBuscar.getBuscar)

module.exports = router;