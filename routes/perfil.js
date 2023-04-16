const express = require("express")
const router = express.Router()

const controlladorPerfil = require("../controllers/perfil")

router.get("/perfil", controlladorPerfil.gerPerfil);

router.post("/actualizar-contra", controlladorPerfil.postActualizarContra)
router.post("/actualizar-img", controlladorPerfil.postActualizarIMG)
module.exports = router;