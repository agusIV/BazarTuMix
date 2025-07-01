import api from "./api"

export const agregarProducto = async (carrito) => {
    const res = await api.post("/carrito/agregar", {carrito})
    return res.data
}

export const actualizarCarrito = async () => {
    const res = await api.post("/carrito")
    return res.data
}

export const borrarProducto = async (productoId) => {
    const res = await api.post("/carrito/borrar", {productoId})
    return res.data
}
