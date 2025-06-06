export default function CabezeraIzquierda({navigate}) {
    return (
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
    )
}
