import api from "./api"

export const crearUsuario = async (nombre, email, contraseña, carrito) => {
    const res = await api.post("/usuario/registrarse", {nombre, email, contraseña})
    return res.data
}

export const iniciarSesion = async (email, contraseña) => {
    const res = await api.post("/usuario/iniciarSesion", {email, contraseña})
    return res.data
}
