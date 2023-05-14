const express = require("express")
const router = express.Router()

const controlladorSesion = require("../controllers/sesion")

router.get("/iniciar-sesion",controlladorSesion.getIniciarSesion )
router.post("/iniciar-sesion", controlladorSesion.postIniciarSesion)

router.get("/crear-cuenta", controlladorSesion.getCrearCuenta)
router.post("/crear-cuenta", controlladorSesion.postCrearCuenta)

router.get("/cerrar-sesion", controlladorSesion.getCerrarSesion)



module.exports = router;