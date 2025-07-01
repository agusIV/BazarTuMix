const express = require("express")
const router = express.Router();
const usuarioMiddlewares = require("../middlewares/usuario.middlewares.js")
const usuarioControllers = require("../controllers/usuario.controller.js")

router.post(
    "/registrarse", 
    usuarioMiddlewares.validador, 
    usuarioControllers.registrarse
)

router.post(
    "/iniciarSesion",
    usuarioControllers.iniciarSesion
)

module.exports = router;
