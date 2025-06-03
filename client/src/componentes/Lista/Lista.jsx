import "./lista.css"
import {useState, useEffect} from "react"
import { useLocation, useNavigate } from 'react-router-dom';

export default function Lista(data){
    let lista = data.lista
    const navigate = useNavigate()
    const location = useLocation();
    const cat = location.state?.cat
    const lis = location.state?.filtrados
    if (lis != undefined){
        lista = [...lis]
    }
    const categorias = [...new Set(lista.flatMap(p => p.categorias))]
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])
    const cambiarCategoria = (categoria) => {
        setCategoriasSeleccionadas(prev => 
            prev.includes(categoria)
                ? prev.filter(c => c !== categoria)
                : [...prev, categoria]
        )
    }
    const productosFiltrados = lista.filter(producto => {
        const coincideCategoria = categoriasSeleccionadas.length === 0 || producto.categorias.some(cat => categoriasSeleccionadas.includes(cat))
        return coincideCategoria
    })
    useEffect(() => {
        if (cat != undefined) {
            setCategoriasSeleccionadas((prev) => [...prev, cat]);
        }
    }, [cat]);
    return(
        <div id="lista">
            <div id="listaBuscador">
                {categorias.map(c => (
                <div className="listaCheckBox">
                    <input 
                        type="checkBox" 
                        checked={categoriasSeleccionadas.includes(c)}
                        onChange={() => cambiarCategoria(c)}
                    />
                    {c}
                </div>
                ))}
            </div>
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
        </div>
    )
}
