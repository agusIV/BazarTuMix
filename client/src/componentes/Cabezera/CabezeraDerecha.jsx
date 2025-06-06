import {useUsuario} from "../../contextAPI/UsuarioContex"

export default function CabezeraDerecha({navigate}) {
    const {carrito} = useUsuario()
    const token = localStorage.getItem("token")

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
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
                    <div id="cabezeraCantidad">{carrito.length}</div>
                    <i id="cabezeraIcono" className="fas fa-shopping-cart"></i>
                    <span>Carrito</span>
                </div>
            </div>
        </div>   
    )
}
