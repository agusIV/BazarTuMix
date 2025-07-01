const productosModel = require("../models/productos.model")

async function configurandoProductos() {
    const productos = await productosModel.cargarProductos()
    return productosRedondeados(productos)
}

const redondearPrecio = (p) => {
    return Math.ceil(p / 100) * 100
}

const productosRedondeados = (productos) => {
    return productos.map(p => {
        const precioPrincipal = p.precios * 1.5
        return{
            ...p,
            precios: [
                redondearPrecio(precioPrincipal),
                redondearPrecio(precioPrincipal * 0.5),
                redondearPrecio(precioPrincipal * 0.25),
                redondearPrecio(precioPrincipal * 0.1)
            ]
        }
    })
}  

module.exports = {
    configurandoProductos,
}