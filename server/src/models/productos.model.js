const pool = require("../config/db")

async function cargarProductos(){
    const [lista] = await pool.query(
        `SELECT
        p.id,
        p.nombre,
        p.descripcion,
        p.precios,
        p.imagen,
        (
            SELECT JSON_ARRAYAGG(c.nombre)
            FROM categorias c
            JOIN producto_categoria pc ON c.id = pc.categoria_id
            WHERE pc.producto_id = p.id
        ) AS categorias
        FROM productos p`
    )
    return lista
}

module.exports = {
    cargarProductos
}
