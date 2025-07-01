const express = require("express")
const router = express.Router();
const carritoController = require("../controllers/carrito.controller.js")

router.post("/agregar", carritoController.agregarProducto)
router.get("/", carritoController.obtenerCarrito)
router.delete("/borrar", carritoController.borrarProducto)

module.exports = router