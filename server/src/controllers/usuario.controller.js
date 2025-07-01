const usuarioServices =  require("../services/usuario.service.js")

async function registrarse(req, res, next){
    try {
        const usuarioId = await usuarioServices.registrar(req.body)
        res.status(201).json({mensaje: "usuario creado correctamente", usuarioId})
    } catch (err) {
        next(err)
    }
}

async function iniciarSesion(req, res, next) {
    try {
        const usuario = await usuarioServices.iniciar(req.body)
        res.status(201).json({mensaje: "inicio de sesion exitoso", usuario})
    } catch (err) {
        next(err)
    }
}

module.exports = {
    registrarse,
    iniciarSesion
}