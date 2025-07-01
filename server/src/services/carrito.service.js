const carritoModel = require("../models/carrito.model.js")

async function agregarItem(producto) {
    const {usuarioId, productoId, precio, peso, metodoPago, direccionEnvio, fechaCompra, estado} = producto
    return await carritoModel.agregar({usuarioId, productoId, precio, peso, metodoPago, direccionEnvio, fechaCompra, estado})
}

async function obtenerItems(usuarioId) {
    return await carritoModel.obtener(usuarioId)
}

async function borrarItem(carritoId) {
    return await carritoModel.borrar({carritoId})
}

module.exports = {
    agregarItem,
    obtenerItems,
    borrarItem,
}