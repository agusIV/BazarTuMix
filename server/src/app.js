const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.use("/productos", require("./routes/productos.routes"))
app.use("/usuario", require("./routes/usuario.routes"))
app.use("/carrito", require("./routes/carrito.routes"))

app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
    res.status(err.satus || 500).json({mensaje: err.message});
});

module.exports = app
