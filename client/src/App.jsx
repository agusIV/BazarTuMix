import "./index.css"
import ScrollToTop from './componentes/ScrollToTop';
import Cabezera from "./componentes/Cabezera";
import Inicio from "./componentes/Inicio"
import Lista from "./componentes/Lista"
import Crear from "./componentes/Crear"
import Iniciar from "./componentes/Iniciar"
import Carrito from "./componentes/Carrito"
import Producto from "./componentes/Producto"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react"

import Pie from "./componentes/Pie"

function App() {
    const [lista, setLista] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then(data => {
                setLista(data)
                setCargando(false)    
            })
            
    }, [])

    if (!cargando) return (
        <BrowserRouter>
            <ScrollToTop/>
            <Cabezera parametro={lista}/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Lista" element={<Lista lista={lista}/>}/>
                <Route path="/Crear" element={<Crear/>}/>
                <Route path="/Iniciar" element={<Iniciar/>}/>
                <Route path="/Carrito" element={<Carrito/>}/>
                <Route path="/Producto" element={<Producto/>}/>
            </Routes>
            <Pie/>
        </BrowserRouter>
    );
    return(
        <div>
            <h1>cargando...</h1>
        </div>
    )
}

export default App;
