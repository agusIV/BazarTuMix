import "./producto.css"
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Producto(){
    const location = useLocation()
    const producto = location.state.producto
    const [precioFinal, setPrecio] = useState(0)
    const [pesoFinal, setPeso] = useState(0)
    const [cantidadFinal, setCantidad] = useState([0,0,0,0]) 
    
    const calcular = (pre, pes, pos) => {
        let cantFinal = [...cantidadFinal]
        if (cantFinal[pos] === "") {
            cantFinal[pos] = 0
        }
        let preFinal = precioFinal
        let pesFinal = pesoFinal
        if (pre > 0) {
                cantFinal[pos]++
        }else{
            if (cantFinal[pos] == 0) return
            cantFinal[pos]--
        }
        preFinal = preFinal + pre    
        setPrecio(preFinal)
        setCantidad(cantFinal)
        pesFinal = Number((pesFinal + pes).toFixed(2))    
        setPeso(pesFinal)
    }

    const cambiarCantidad = (pre, pes, pos, cant) => {
        let cantFinal = [...cantidadFinal]
        let preFinal = precioFinal
        let pesFinal = pesoFinal
        cantFinal[pos] = cant
        setCantidad(cantFinal)
        setPrecio(pre * cant)
        setPeso(Number((pes * cant).toFixed(2)))       
    } 
    
    const validarNumero = (pre, pes, pos, cant) => {
        if (cant === ""){
            let cantFinal = [...cantidadFinal]
            cantFinal[pos] = ""
            setCantidad(cantFinal)
            return
        }if (/^\d+$/.test(cant) && Number(cant) >= 0){ 
            cambiarCantidad(pre, pes, pos, cant)
        }
    };

    const resetInput = (pos) => {
        let cantFinal = [...cantidadFinal]
        console.log("entra");
        
        if (cantFinal[pos] === ""){
            cantFinal[pos] = 0
            setCantidad(cantFinal)
        }
    }

    return(
        <div id="productoPrincipal">
            <div id="productoImagen">
                <img src={producto.imagenes} alt="" />
            </div>
            <div id="datos">
                <div id="productoNombre">
                    {producto.id}
                </div>
                <div id="productoPrecio">
                    <div className="precios">
                        <div className="sumar" onClick={() => calcular(producto.precios[3], 0.1, 3)}>+</div>
                        <div className="p">100grs: {producto.precios[3]}</div>
                        <div className="restar" onClick={() => calcular(-producto.precios[3], -0.1, 3)}>-</div>
                    </div>
                    <input 
                        className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[3]} 
                        onChange={(e) => validarNumero(producto.precios[3], 0.1, 3, e.target.value)} 
                        onBlur={() => resetInput(3)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => calcular(producto.precios[2], 0.25, 2)}>+</div>
                        <div className="p">250grs: {producto.precios[2]}</div>
                        <div className="restar" onClick={() => calcular(-producto.precios[2], -0.25, 2)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[2]} onChange={(e) => validarNumero(producto.precios[2], 0.25, 2, e.target.value)}
                        onBlur={() => resetInput(2)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => calcular(producto.precios[1], 0.5, 1)}>+</div>
                        <div className="p">500grs: {producto.precios[1]}</div>
                        <div className="restar" onClick={() => calcular(-producto.precios[1], -0.5, 1)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[1]} 
                        onChange={(e) => validarNumero(producto.precios[1], 0.5, 1, e.target.value)} 
                        onBlur={() => resetInput(1)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => calcular(producto.precios[0], 1, 0)}>+</div>
                        <div className="p">1 kilo: {producto.precios[0]}</div>
                        <div className="restar" onClick={() => calcular(-producto.precios[0], -1, 0)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[0]} 
                        onChange={(e) => validarNumero(producto.precios[0], 1, 1, e.target.value)} 
                        onBlur={() => resetInput(0)}
                    />
                    <div id="resultado">total: {pesoFinal}KG: ${precioFinal}</div>
                    <div id="productoComprar">comprar ahora</div>
                    <div id="productoAgregar">agregar al carrito</div>
                </div>    
                
            </div>
            <div id="productoDescripcion">
                {producto.descripcion}
            </div>
        </div>
    )
}
