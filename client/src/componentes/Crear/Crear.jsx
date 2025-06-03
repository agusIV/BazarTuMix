import "./crear.css"
import { useState } from "react"
export default function Crear(){
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")

    const manejarRegistro = async () => {
        const res = await fetch("http://localhost:3000/Crear", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre ,email, contraseña})
        })

        const data = await res.json()
        setMensaje(data.mensaje)
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
