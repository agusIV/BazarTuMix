const pool = require("../config/db")

async function registrarUsuario({ nombre, email, contraseñaHash}) {
    const [resultado] = await pool.query(
        `INSERT INTO usuarios (nombre, email, contraseña_hash) VALUES (?, ?, ?)`,
        [nombre, email, contraseñaHash]
    )
    return resultado.insertId
}

async function buscarPorEmail(email) {
    const [usuario] = await pool.query(
        `SELECT * FROM usuarios WHERE email = ? LIMIT 1`,
        [email]
    )
    return usuario[0]
}

async function eliminarUsuario(usuarioId) {
    const [resultadoC] = await pool.query(
        `DELETE FROM carrito WHERE usuario_id = ?`,
        [usuarioId]
    )
    const [resultadoU] = await pool.query(
        `DELETE FROM usuarios WHERE id = ?`,
        [usuarioId]
    )
}

module.exports = {
  registrarUsuario,
  buscarPorEmail,
  eliminarUsuario
}
