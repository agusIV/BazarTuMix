const express = require('express');
const fs = require("fs")
const cors = require('cors');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express();
app.use(express.json()); // Permite manejar JSON en las solicitudes
app.use(cors());  // Permite solicitudes del frontend

const usuarios = []

const SECRETO = "clave_secreta_segura"

const redondearArriba = (p) => {
    return Math.ceil((p * (1 + 50 / 100)) / 100) * 100
}

const productosRedondeados = (productos) => {
    return productos.map(p => ({
            id: p.id,
            precios: [redondearArriba(p.precios[0]), redondearArriba(p.precios[0] / 2), redondearArriba(p.precios[0] / 4), redondearArriba(p.precios[0] / 10)],
            categorias: p.categorias,
            imagenes: p.imagenes,
            descripcion: p.descripcion
    }))
}  

app.get('/api', (req, res) => {
    const rawData = fs.readFileSync("./lista.json")
    const data = JSON.parse(rawData)
    res.json(productosRedondeados(data))
});

app.post("/Crear", async (req, res) => {
    const {nombre, email, contraseña} = req.body
    if (usuarios.find(u => u.email === email)) {
        return res.status(400).json({mensaje: "ya existe un usuario con ese e-mail"})
    }

    const hash = await bcrypt.hash(contraseña, 10)
    const nuevoUsuario = {nombre, email, contraseña: hash}
    usuarios.push(nuevoUsuario)

    res.status(201).json({mensaje: "usuario creado correctamente"})
})

app.post("/Iniciar", async (req, res) => {
    const {email, contraseña} = req.body
    const usuario = usuarios.find(u => u.email === email)

    if (!usuario){
        return res.status(401).json({mensaje: "credenciales invalidas"})
    }

    const coincide = await bcrypt.compare(contraseña, usuario.contraseña)
    if(!coincide){
        return res.status(401).json({emnsaje: "credenciales invalidas"})
    }

    const token = jwt.sign({email: usuario.email, nombre:usuario.nombre}, SECRETO, {
        expiresIn: "1h"
    })

    res.json({mensaje: "inicio de sesion exitoso"})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});