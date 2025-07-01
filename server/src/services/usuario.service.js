const usuarioModel = require("../models/usuario.model.js")
const bcrypt = require("bcrypt")

async function registrar(usuario) {
    const {nombre, email, contraseña} = usuario
    const existeUsuario = await usuarioModel.buscarPorEmail(email)
    if (existeUsuario){
        throw new Error("Mail ya registrado")
    }
    const saltRounds = 10 //cantidad de hash
    const contraseñaHash = await bcrypt.hash(contraseña, saltRounds)
    return await usuarioModel.registrarUsuario({nombre, email, contraseñaHash})
}

async function iniciar(datos) {
    const {email, contraseña} = datos
    const usuario = await usuarioModel.buscarPorEmail(email)
    if (!usuario){
        const error = new Error("usuario no encontrado");
        error.status = 404;
        throw error;
    }
    const validacion = await bcrypt.compare(contraseña, usuario.contraseña_hash)
    if (!validacion) {
        const error = new Error("contraseña invalida")
        error.status = 404;
        throw error;
    }
    delete usuario.contraseña_Hash
    return usuario
}

async function borrar(usuarioId) {
    return await usuarioModel.eliminarUsuario({carritoId})
}

module.exports = {
    registrar,
    iniciar
}
