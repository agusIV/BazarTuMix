import "./iniciar.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Iniciar(){
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")
    const navigate = useNavigate()

    const manejarInicio = async () => {
        const res = await fetch("http://localhost:3000/Iniciar", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, contraseña})
        })
        const data = await res.json()
        if (res.ok) {
            localStorage.setItem("token", data.token) 
            setTimeout(() => {
                navigate("/")
            }, 5000)
        }
        setMensaje(data.mensaje + ", redireccionando...")
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
