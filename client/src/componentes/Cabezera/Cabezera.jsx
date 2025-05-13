import "./Cabezera.css"
import Inicio from "../Inicio"
import Lista from "../Lista"
import Producto from "../Producto"
import React, {useState} from "react"
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Cabezera(lista) {
    const [busqueda, setBusqueda] = useState("")
    const [buscando, setBuscando] = useState(false)
    const navigate = useNavigate()
    const filtrados = lista.parametro.filter(p =>
        p.id.toLowerCase().includes(busqueda.toLowerCase())
    )

    const irAProducto = (producto) => {
        navigate(`/producto`, {state: {producto}})
    }

    return (
        <>
        <div id="cabezera">
            <div id="titulo">
                <span onClick={() => navigate("/")} className="botonesCabezera">Bazar TuMix</span>
            </div>
            <div id="buscador">
                <input id="entrada" 
                    type="text" 
                    placeholder="Buscar producto" 
                    value={busqueda} 
                    onChange={(b) => setBusqueda(b.target.value)}
                    onFocus={() => setBuscando(true)}
                    onBlur={() => setTimeout(() => setBuscando(false), 150)}//delay para permitir click
                />
                {buscando && busqueda.length > 0 && (
                    <ul id="busqueda">
                        {filtrados.map(p => ( 
                            <li className="opcion" onClick={() => irAProducto(p)} style={{padding: "5px", cursor: "pointer"}}>
                                {p.id}
                            </li>
                        ))}
                        {filtrados.length === 0 && (
                            <li style={{ padding: "5px", color: "#888" }}>Sin resultados</li>
                        )}
                    </ul>
                )}
                <button className="icono-boton" id="borrar" onClick={() => setBusqueda("")}>  
                    <i className="fas fa-times"></i>
                </button>
                <button className="icono-boton" id="buscar">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div id="derecha">
                <div id="productos">
                    <span className="botonesCabezera" onClick={() => navigate("/Lista")}>
                        Productos
                    </span>
                </div>
                <div id="redes">
                    <span className="botonesCabezera">Redes Sociales</span>
                </div>
            </div>   
        </div>    
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Lista" element={<Lista parametro={lista.parametro}/>}/>
            <Route path="/Producto" element={<Producto/>}/>
        </Routes>
        </>
    )
}
