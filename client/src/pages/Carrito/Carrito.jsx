import "./carrito.css"
import {useUsuario} from "../../contextAPI/UsuarioContex"

export default function Carrito(){
    const {carrito, borrarDelCarrito, vaciarCarrito} = useUsuario()
    
    return(
        <div id="carrito">
            <h1>carrito</h1>
            {carrito.length === 0 ? (
                <div>carrito vacio</div>
            ) : (<>
            <div id="carritoLista">
                {carrito.map(pedido => (
                    <div>
                        {pedido.imagen},{pedido.id}, {pedido.precio}, {pedido.peso}
                        <button onClick={() => borrarDelCarrito(pedido.id)}>borrar</button>
                    </div>
                ))}
            </div>
            <button onClick={vaciarCarrito}>vaciar carrito</button>
            <button>comprar</button>
            </>
            )}
        </div>
    )
}