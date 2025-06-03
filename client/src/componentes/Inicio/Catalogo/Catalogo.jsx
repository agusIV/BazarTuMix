import "./Catalogo.css"
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
    const navigate = useNavigate()
    const cambiarRuta = (cat) => {
        navigate("/Lista", {state: {cat}})
    }
    return (
        <div id="catalogo">    
            <div id="catalogoTitulo">Nuestros Productos</div>
            <div id="catalogoSecciones">
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Mix")}>
                    <img className="catalogoImagen" src={"imagenes/mix.jpeg"} alt=""/>
                    <div className="catalogoNombre">mixes</div >
                </div>
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutos Secos")}>
                    <img className="catalogoImagen" src={"imagenes/secos.jpeg"} alt=""/>
                    <div className="catalogoNombre">frutos secos</div >
                </div>
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutas Deshidratadas")}>
                    <img className="catalogoImagen" src={"imagenes/deshidratadas.jpeg"} alt=""/>
                    <div className="catalogoNombre">frutas deshidratadas</div >
                </div>
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Snacks")}>
                    <img className="catalogoImagen" src={"imagenes/snacks.jpeg"} alt=""/>
                    <div className="catalogoNombre">snacks</div >
                </div>
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Cereales y Granos")}>
                    <img className="catalogoImagen" src={"imagenes/CYG.jpeg"} alt=""/>
                    <div className="catalogoNombre">cereales y granos</div >
                </div>
                <div className="catalogoCategoria" onClick={() => cambiarRuta("Otros")}>
                    <img className="catalogoImagen" src={"imagenes/otros.jpeg"} alt=""/>
                    <div className="catalogoNombre">otros</div >
                </div>
            </div>
        </div>
    )
}