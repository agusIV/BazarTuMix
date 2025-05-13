import "./Catalogo.css"
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
    const navigate = useNavigate()
    const cambiarRuta = (cat) => {
        navigate("/Lista", {state: {cat}})
    }
    return (
        <div id="catalogo">
            <span id="tituloProductos">Nuestros Productos</span>
            <div id="secciones">
                <div id="mix" onClick={() => cambiarRuta(0)}>
                    <img src={"imagenes/mix.jpeg"} alt=""/>
                    <span>mixes</span>
                </div>
                <div id="frutosSecos" onClick={() => cambiarRuta(1)}>
                    <img src={"imagenes/frutos.jpeg"} alt=""/>
                    <span>frutos secos</span>
                </div>
                <div id="cereales" onClick={() => cambiarRuta(2)}>
                    <img src={"imagenes/cereales.jpeg"} alt=""/>
                    <span>cereales</span>
                </div>
                <div id="otros" onClick={() => cambiarRuta(3)}>
                    <img src={"imagenes/otros.jpeg"} alt=""/>
                    <span>otros</span>
                </div>
            </div>
        </div>
    )
}