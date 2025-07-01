import {useState} from "react"
import { useLista } from "../../contextAPI/ListaCotext";

export default function CabezeraBuscador({navigate}) {
    const [busqueda, setBusqueda] = useState("")
    const [buscando, setBuscando] = useState(false)
    const {lista} = useLista()

    const filtrados = lista.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    const irAProducto = (producto) => {
        navigate(`/producto`, {state: {producto}})
    }
    return (
        <div id="cabezeraBuscador">
            <input id="cabezeraEntrada" 
                type="text" 
                placeholder="Buscar producto" 
                value={busqueda} 
                onChange={(b) => setBusqueda(b.target.value)}
                onFocus={() => setBuscando(true)}
                onBlur={() => setTimeout(() => setBuscando(false), 150)}//delay para permitir click
            />
            {buscando && busqueda.length > 0 && (
                <ul id="cabezeraBusqueda">
                    {filtrados.map(p => ( 
                        <li key={p.id} className="cabezeraOpcion" onClick={() => irAProducto(p)}>
                            {p.nombre}
                        </li>
                    ))}
                    {filtrados.length === 0 && (
                        <li className="cabezeraOpcion">Sin resultados</li>
                    )}
                </ul>
            )}
            <button className="icono-boton cabezeraBotones" id="cabezeraBorrar" onClick={() => setBusqueda("")}>  
                <i className="fas fa-times"></i>
            </button>
            <button className="icono-boton cabezeraBotones" id="cabezeraBuscar" onClick={() => navigate("/Lista", {state:{filtrados}})}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}
