const express = require("express")
const router = express.Router()
const {registrar, iniciar, yo} = require("../controllers/authController")

router.post("/registrar", registrar)
router.post("/iniciar", iniciar)
router.get("/yo", yo)

module.export = router