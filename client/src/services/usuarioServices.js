import api from "./api"

export const crearUsuario = async (nombre, email, contraseña, carrito) => {
    const res = await api.post("/Crear", {nombre, email, contraseña, carrito})
    return res.data
}

export const iniciarSesion = async (email, contraseña) => {
    const res = await api.post("/Iniciar", {email, contraseña})
    return res.data
}
