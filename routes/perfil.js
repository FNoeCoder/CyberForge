const express = require("express")
const router = express.Router()

const controlladorPerfil = require("../controllers/perfil")

router.get("/perfil", controlladorPerfil.getPerfil);

router.post("/editar-usuario", controlladorPerfil.postActualizarPerfil)

module.exports = router;