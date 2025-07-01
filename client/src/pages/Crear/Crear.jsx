import "./crear.css"
import { useState } from "react"
import {useUsuario} from "../../contextAPI/UsuarioContex"
import { crearUsuario } from "../../services/usuarioServices"

export default function Crear(){
    const {carrito} = useUsuario()
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")

    const manejarRegistro = async () => {
        if (!nombre || !email || !contraseña) {
            return setMensaje('Completa todos los campos');
        }
        try {
            const {mensaje} = await crearUsuario(nombre, email, contraseña)
            setMensaje(mensaje)
        }catch (err) {
            setMensaje(err.response?.data?.mensaje)
        }
    }
    
    return(
        <div id="crear">
            <div id="crearNombre">
                nombre
                <input type="text" onChange={e => setNombre(e.target.value)}/>
            </div>
            <div id="crearEmail">
                e-mail
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div id="crearContraseña">
                contraseña
                <input type="password" onChange={e => setContraseña(e.target.value)}/>
            </div>
            <button onClick={manejarRegistro}>crear</button>
            <p>{mensaje}</p>
        </div>
    )
}
