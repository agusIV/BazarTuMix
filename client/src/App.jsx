import "./index.css"
import ScrollToTop from './componentes/ScrollToTop';
import Cabezera from "./pages/Cabezera";
import Inicio from "./pages/Inicio"
import Lista from "./pages/Lista"
import Crear from "./pages/Crear"
import Iniciar from "./pages/Iniciar"
import Carrito from "./pages/Carrito"
import Producto from "./pages/Producto"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useLista } from "./contextAPI/ListaCotext";
import Pie from "./pages/Pie"

function App() {
    const {lista, cargando} = useLista()

    if (!cargando) return (
        <BrowserRouter>
            <ScrollToTop/>
            <Cabezera/>
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
