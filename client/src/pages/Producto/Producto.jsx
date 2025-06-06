import "./producto.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {useUsuario} from "../../contextAPI/UsuarioContex"

export default function Producto(){
    const {carrito, agregarAlCarrito} = useUsuario()
    const navigate = useNavigate()
    const location = useLocation()
    const producto = location.state.producto
    const [precioFinal, setPrecio] = useState(0)
    const [pesoFinal, setPeso] = useState(0)
    const [cantidadFinal, setCantidad] = useState([0,0,0,0]) 

    useEffect(() => {
        const ped = carrito.find(p => p.id === producto.id)
        if (ped != undefined){
            setCantidad(ped.cantidad)
        }
    }, [carrito])
    
    useEffect(() => {
        calcular()
    }, [cantidadFinal])
    
    const calcular = () => {
        let cantidad = [...cantidadFinal]
        let precio = 0
        let peso = 0
        let pesos = [1, 0.5, 0.25, 0.1]
        for (let i = 0; i < 4; i++) {
            precio = precio + producto.precios[i] * cantidad[i];
            peso = Number((peso + pesos[i] * cantidad[i]).toFixed(2))        
        }
        setPrecio(precio)
        setPeso(peso)
    }
    const cambiarCantidad = (pos, cant) => {
        let cantFinal = [...cantidadFinal]
        cantFinal[pos] = cant
        setCantidad(cantFinal)
    } 
    const validarNumero = (pos, cant) => {
        if (cant === ""){
            let cantFinal = [...cantidadFinal]
            cantFinal[pos] = ""
            setCantidad(cantFinal)
            return
        }if (/^\d+$/.test(cant) && Number(cant) >= 0){ 
            cambiarCantidad(pos, cant)
        }
    };
    const resetInput = (pos) => {
        let cantFinal = [...cantidadFinal]
        if (cantFinal[pos] === ""){
            cantFinal[pos] = 0
            setCantidad(cantFinal)
        }
    }
    const agregar = (a) => {
        const pedido = {
            id: producto.id,
            precio: precioFinal,
            peso: pesoFinal,
            cantidad: cantidadFinal,
            imagen: producto.imagenes
        }
        agregarAlCarrito(pedido)
        if (a === "ahora") navigate("/Carrito")
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
                        <div className="sumar" onClick={() => validarNumero(3, cantidadFinal[3] + 1)}>+</div>
                        <div className="p">100grs: {producto.precios[3]}</div>
                        <div className="restar" onClick={() => validarNumero(3, cantidadFinal[3] - 1)}>-</div>
                    </div>
                    <input 
                        className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[3]} 
                        onChange={(e) => validarNumero(3, e.target.value)} 
                        onBlur={() => resetInput(3)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => validarNumero(2, cantidadFinal[2] + 1)}>+</div>
                        <div className="p">250grs: {producto.precios[2]}</div>
                        <div className="restar" onClick={() => validarNumero(2, cantidadFinal[2] - 1)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[2]} onChange={(e) => validarNumero(2, e.target.value)}
                        onBlur={() => resetInput(2)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => validarNumero(1, cantidadFinal[1] + 1)}>+</div>
                        <div className="p">500grs: {producto.precios[1]}</div>
                        <div className="restar" onClick={() => validarNumero(1, cantidadFinal[1] - 1)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[1]} 
                        onChange={(e) => validarNumero(1, e.target.value)} 
                        onBlur={() => resetInput(1)}
                    />
                    <div className="precios">
                        <div className="sumar" onClick={() => validarNumero(0, cantidadFinal[0] + 1)}>+</div>
                        <div className="p">1 kilo: {producto.precios[0]}</div>
                        <div className="restar" onClick={() => validarNumero(0, cantidadFinal[0] - 1)}>-</div>
                    </div>
                    <input className="cantidad" 
                        type="number" 
                        min="0" 
                        step="1" 
                        value={cantidadFinal[0]} 
                        onChange={(e) => validarNumero(0, e.target.value)} 
                        onBlur={() => resetInput(0)}
                    />
                    <div id="resultado">total: {pesoFinal}KG: ${precioFinal}</div>
                    <div id="productoComprar" onClick={() => {if(!cantidadFinal.every(num => num === 0)) agregar("ahora")}}>comprar ahora</div>
                    <div id="productoAgregar" onClick={() => {if(!cantidadFinal.every(num => num === 0)) agregar("")}}>agregar al carrito</div>
                </div>    
            </div>
            <div id="productoDescripcion">
                {producto.descripcion}
            </div>
        </div>
    )
}
