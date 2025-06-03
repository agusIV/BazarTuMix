import "./cabezera.css"
import {useState} from "react"
import { useNavigate } from "react-router-dom";

export default function Cabezera(lista) {
    const token = localStorage.getItem("token")
    const [busqueda, setBusqueda] = useState("")
    const [buscando, setBuscando] = useState(false)
    const navigate = useNavigate()
    
    const filtrados = lista.parametro.filter(p =>
        p.id.toLowerCase().includes(busqueda.toLowerCase())
    )

    const irAProducto = (producto) => {
        navigate(`/producto`, {state: {producto}})
    }

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <>
        <div id="cabezera">
            <div id="cabezeraIzquierda">
                <div id="cabezeraLogo" onClick={() => navigate("/")}>
                    <img className="cabezeraBotones" src="imagenes/logo.png" alt="" />
                </div>
                <div id="cabezeraProductos">
                    <span className="cabezeraBotones" onClick={() => navigate("/Lista")}>
                        Productos
                    </span>
                </div>
            </div>
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
                            <li className="cabezeraOpcion" onClick={() => irAProducto(p)}>
                                {p.id}
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
            <div id="cabezeraDerecha">
                {token ? (
                    <div id="cabezeraCerrar">
                        <span className="cabezeraBotones" onClick={cerrarSesion}>Cerrar Sesion</span>
                    </div>
                ) : (<>
                    <div id="cabezeraCrear">
                        <span className="cabezeraBotones" onClick={() => navigate("/Crear")}>Crear Cuenta</span>
                    </div>
                    <div id="cabezeraIniciar">
                        <span className="cabezeraBotones" onClick={() => navigate("/Iniciar")}>Iniciar Sesion</span>
                    </div>
                </>)}
                <div id="cabezeraCarrito">
                    <div className="cabezeraBotones" onClick={() => navigate("/Carrito")}>
                        <i id="cabezeraIcono" className="fas fa-shopping-cart"></i>
                        <span>Carrito</span>
                    </div>
                </div>
            </div>   
        </div>    
        </>
    )
}
