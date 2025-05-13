import "./producto.css"
import { useLocation } from "react-router-dom";

export default function Producto(){
    const location = useLocation()
    const producto = location.state.producto
    console.log(producto);
    
    return(
        <div id="productoPrincipal">
            <div id="productoImagen">
                <img src={producto.imagenes} alt="" />
            </div>
            <div id="productoNombre">
                {producto.id}
            </div>
            <div id="productoDescripcion">
                descripcion
            </div>
            <div id="productoPrecio">
                {producto.precio}
            </div>
        </div>
    )
}