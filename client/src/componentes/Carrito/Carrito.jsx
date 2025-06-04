import "./carrito.css"
import {useCarrito} from "../CarritoContextAPI"

export default function Carrito(){
    const {carrito, vaciarCarrito} = useCarrito()
    console.log(carrito);
    
    return(
        <div id="carrito">
            <h1>carrito</h1>
            {carrito.length === 0 ? (
                <div>carrito vacio</div>
            ) : (<>
            <div id="carritoLista">
                {carrito.map(pedido => (
                    <div>
                        {pedido.id}, {pedido.precio}, {pedido.peso}
                    </div>
                ))}
            </div>
            <button onClick={vaciarCarrito}>vaciar carrito</button>
            </>
            )}
        </div>
    )
}