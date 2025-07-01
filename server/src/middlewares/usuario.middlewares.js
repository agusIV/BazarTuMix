const { body } = require("express-validator")

const validarUsuario = {
    validador: [
    body("nombre")
        .trim()
        .notEmpty().withMessage("El nombre es obligatorio")
        .isLength({ min: 3 }).withMessage("Debe tener al menos 3 caracteres"),
  
    body("email")
        .isEmail().withMessage('Debe ser un email válido')
        .normalizeEmail(),
        
    body("password")
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/\d/).withMessage("de contener al menos un numero")
    ]
}

module.exports = validarUsuario