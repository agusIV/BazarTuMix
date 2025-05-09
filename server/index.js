const express = require('express');
const fs = require("fs")
const cors = require('cors');
const app = express();

app.use(cors());  // Permite solicitudes del frontend
app.use(express.json()); // Permite manejar JSON en las solicitudes

const productosRedondeados = (productos) => {
    return productos.map(p => ({
        id: p.id,
        precio: 
        Math.round( (p.precio * (1 + 50 / 100)) / 100) * 100,
        categoria: p.categoria
    }))
}  

app.get('/api', (req, res) => {
    const rawData = fs.readFileSync("./lista.json")
    const data = JSON.parse(rawData)
    res.json(productosRedondeados(data))
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});