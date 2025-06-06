import "./cabezera.css"
import { useNavigate } from "react-router-dom";
import CabezeraIzquierda from "../../componentes/Cabezera/CabezeraIzquierda"
import CabezeraBuscador from "../../componentes/Cabezera/CabezeraBuscador"
import CabezeraDerecha from "../../componentes/Cabezera/CabezeraDerecha"

export default function Cabezera() {
    
    const navigate = useNavigate()
    
    return (
        <div id="cabezera">
            <CabezeraIzquierda navigate={navigate}/>
            <CabezeraBuscador navigate={navigate}/>
            <CabezeraDerecha navigate={navigate}/>
        </div>    
    )
}
