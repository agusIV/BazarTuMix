import { useNavigate } from "react-router-dom"

export default function ListaProductos({productosFiltrados}){
    const navigate = useNavigate()

    return(
        <div id="listaProductos">
            {productosFiltrados.map(producto => (
                <div className="listaProducto" key={producto.nombre} >
                    <div className="listaImagen"><img src={producto.imagenes} onClick={() => navigate("/producto", {state: {producto}})}/></div>
                    <div className="listaInfo">
                        <div className="listaNombre">
                            {producto.id}
                        </div>
                        <div className="listaDescripcion">
                            {producto.descripcion}
                        </div>
                        <div className="listaLeer" onClick={() => navigate("/producto", {state: {producto}})}>leer mas</div>
                    </div>    
                        
                    <div className="listaPrecios">
                        <div className="listaP">100grs: {producto.precios[3]}</div>
                        <div className="listaP">250grs: {producto.precios[2]}</div>
                        <div className="listaP">500grs: {producto.precios[1]}</div>
                        <div className="listaP">1 kilo: {producto.precios[0]}</div>
                        <div className="listaComprar" onClick={() => navigate("/producto", {state: {producto}})}>comprar</div>
                    </div>     
                </div>
            ))}
        </div>
    )
}