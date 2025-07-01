import api from "./api"

export const cargarLista = async () => {
    const res = await api.get("/productos")
    return res.data
}
