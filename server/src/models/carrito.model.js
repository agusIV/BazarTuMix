const pool = require("../config/db")

async function agregar(usuarioId, productoId, precio, peso, metodoPago, direccionEnvio, fechaCompra, estado) {
    const [resultado] = await pool.query(
        `INSERT INTO usuarios (usuario_id, producto_id, precio, peso, metodo_pago, direccion_envio, fecha_compra, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [usuarioId, productoId, precio, peso, metodoPago, direccionEnvio, fechaCompra, estado]
    )
    return resultado
}

async function obtener(usuarioId) {
    const [lista] = await pool.query(
        `SELECT * FROM carrito WHERE usuario_id = ${usuarioId}`
    )
    return lista
}

async function borrar(carritoId) {
    const [resultado] = await pool.query(
        `DELETE FROM carrito WHERE id = ?`,
        [carritoId]
    )
}

module.exports = {
    agregar,
    obtener,
    borrar,
}
