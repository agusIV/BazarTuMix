import jwt from 'jsonwebtoken'

export const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decoded  // guardar los datos del usuario en la petición
        next() // continuar hacia el controlador
    } catch (err) {
        return res.status(403).json({ mensaje: 'Token inválido o expirado' })
    }
}
