import "./iniciar.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../contextAPI/UsuarioContex";
import { iniciarSesion } from "../../services/usuarioServices";

export default function Iniciar(){
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const {iniciar} = useUsuario()
    const navigate = useNavigate()

    const manejarInicio = async () => {
        try {
            const {mensaje, usuarioSinContraseña, token} = await iniciarSesion(email, contraseña)
            setMensaje(mensaje)
            iniciar(usuarioSinContraseña)
            localStorage.setItem("token", token)
            setTimeout(() => {
                navigate("/")
            }, 5000)
        } catch (error) {
            setMensaje(error.response?.data?.mensaje)
        }
    }
    
    return(
        <div id="iniciar">
            <div id="iniciarEmail">
                e-mail
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div id="iniciarContraseña">
                contraseña
                <input type="password" onChange={e => setContraseña(e.target.value)}/>
            </div>
            <button onClick={manejarInicio}>iniciar</button>
            <p>{mensaje}</p>
        </div>
    )
}
