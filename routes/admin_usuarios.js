
const express = require("express")
const router = express.Router()

router.get("/admin-usuarios", (req, res ) =>{
    res.send("admin")
})

module.exports = router;