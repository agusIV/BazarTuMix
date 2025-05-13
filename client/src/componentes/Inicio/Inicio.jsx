import "./inicio.css"
import Carrusel from "./Carrusel";
import Catalogo from "./Catalogo";
import Envios from "./Envios";

export default function Inicio() {
    return(
        <div id="inicio">
            <Carrusel/>
            <Catalogo/>
            <Envios/>
        </div> 
    )
}