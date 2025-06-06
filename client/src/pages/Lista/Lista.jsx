import "./lista.css"
import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom';
import ListaBuscador from "../../componentes/Lista/ListaBuscador";
import ListaProductos from "../../componentes/Lista/ListaProductos";
import { useLista } from "../../contextAPI/ListaCotext";

export default function Lista(){
    const {lista} = useLista()
    let filtrados = [...lista]
    const location = useLocation();
    const cat = location.state?.cat
    const lis = location.state?.filtrados

    if (lis != undefined){
        filtrados = [...lis]
    }

    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])

    const productosFiltrados = filtrados.filter(producto => {
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
            <ListaBuscador 
                lista={filtrados}
                categoriasSeleccionadas={categoriasSeleccionadas}
                setCategoriasSeleccionadas={setCategoriasSeleccionadas}
            />
            <ListaProductos
                productosFiltrados={productosFiltrados}
            />
        </div>
    )
}
