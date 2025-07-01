const dotenv = require("dotenv")
dotenv.config()
const app = require("./app")

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${process.env.PORT}`);
});
