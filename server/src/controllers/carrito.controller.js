const carritoServices = require("../services/carrito.service.js")

async function agregarProducto(req, res, next) {
    try {
        const carrito = await carritoServices.agregarItem(req.body)
        res.status(200).json(carrito)
    } catch (err) {
        next(err)
    }
}

async function obtenerCarrito(req, res, next) {
    try {
        const carrito = await carritoServices.obtenerItems(req.body)
        res.status(200).json(carrito)
    } catch (err) {
        next(err)
    }
}

async function borrarProducto(req, res, next) {
    try {
        const carrito = await carritoServices.borrarItem(req.body)
        res.status(200).json(carrito)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    agregarProducto,
    obtenerCarrito,
    borrarProducto,
}