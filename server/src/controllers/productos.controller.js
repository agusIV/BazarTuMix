const productosServices = require("../services/productos.services.js")

async function listaProductos(req, res, next){
    try{
        const productos = await productosServices.configurandoProductos(req.body)
        res.status(200).json(productos)
    } catch (err){
        next(err)
    }
}

module.exports = {
    listaProductos,
}
