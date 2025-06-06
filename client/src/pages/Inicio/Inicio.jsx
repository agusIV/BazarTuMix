import "./inicio.css"
import Carrusel from "../../componentes/Carrusel";
import Catalogo from "../../componentes/Catalogo";
import Envios from "../../componentes/Envios";
import {useUsuario} from "../../contextAPI/UsuarioContex"

export default function Inicio() {
    const {usuario} = useUsuario()
    return(
        <div id="inicio">
            <Carrusel/>
            <Catalogo/>
            <Envios/>
        </div> 
    )
}