const express = require("express")
const router = express.Router();
const productosController = require("../controllers/productos.controller")

router.get("/", productosController.listaProductos)

module.exports =  router;
