import "./lista.css"
import React, {useState, useEffect} from "react"
import { useLocation, useNavigate } from 'react-router-dom';

export default function Lista(data){
    const lista = data.parametro
    /*const [lista, setLista] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then(data => setLista(data))
    }, [])*/
    
    /*const lista = [
        { id: "Mix Duo", precio: 16172, categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Mix Energia", precio: 5840 , categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Mix Energia con banana", precio: 6250, categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Mix Energia sin pasas", precio: 0, categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Mix Nutricion", precio: 5190, categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Mix Semillas", precio: 2250, categoria: "Mix", imagenes: "imagenes/sin-imagen.png"},
        { id: "Almendras Guara 4(nacionales)", precio: 16710, categoria: "Frutos secos", imagenes: "imagenes/almendras6.jpg"},
        { id: "Chips de banana", precio: 7800, categoria: "Frutos secos", imagenes: "imagenes/sin-imagen.png"},
        { id: "Coco rallado (low fat)", precio: 5720, categoria: "Frutos secos", imagenes: "imagenes/sin-imagen.png"},
        { id: "Frutas confitadas", precio: 2400, categoria: "Frutos secos", imagenes: "imagenes/sin-imagen.png"},
        { id: "Nueces cuartos extra light", precio: 15730, categoria: "Frutos secos", imagenes: "imagenes/nueces6.jpg"},
        { id: "Papaya en cubos", precio: 7150, categoria: "Frutos secos", imagenes: "imagenes/sin-imagen.png"},
        { id: "Almohaditas (avellana)", precio: 5212, categoria: "Cereales", imagenes: "imagenes/almo6.jpg"},
        { id: "Almohaditas (chocolates)", precio: 5824, categoria: "Cereales", imagenes: "imagenes/almo6.jpg"},
        { id: "Almohaditas de arroz (frutilla)", precio: 5536, categoria: "Cereales", imagenes: "imagenes/frutilla6.jpg"},
        { id: "Aritos frutados LASFOR", precio: 3975, categoria: "Cereales", imagenes: "imagenes/aritos6.jpg"},
        { id: "Granola LASFOR", precio: 5833, categoria: "Cereales", imagenes: "imagenes/sin-imagen.png"},
        { id: "Copos SIN AZUCAR (Cereales Pilar)", precio: 2208, categoria: "Cereales", imagenes: "imagenes/copos6.jpg"},
        { id: "Arroz yamani", precio: 1440, categoria: "Otros", imagenes: "imagenes/sin-imagen.png"},
        { id: "Avena arrollada instantanea", precio: 1300, categoria: "Otros", imagenes: "imagenes/avena6.jpg"},
        { id: "Azucar mascabo (BA-LA-JU)", precio: 2060, categoria: "Otros", imagenes: "imagenes/sin-imagen.png"},
        { id: "Maca KALLPA", precio: 2180, categoria: "Otros", imagenes: "imagenes/maca6.jpg"},
        { id: "Manies tostados sin sal", precio: 2230, categoria: "Otros", imagenes: "imagenes/sin-imagen.png"},
        { id: "Pasas bañadas con chocolate", precio: 13220, categoria: "Otros", imagenes: "imagenes/sin-imagen.png"},
    ]
        */
    const redondear = (p) => {
        let redondeado = Math.ceil(p / 100) * 100
        return redondeado
    }
    const location = useLocation();
    const navigate = useNavigate()
    const [mostrar, setMostrar] = useState(new Array(4).fill(true));
    const [cargando, setCargando] = useState(true)
    const [vacio, setVacio] = useState(false)

    const actualizar = (pos) => {
        let m = [...mostrar]
        m[pos] = !m[pos]
        setMostrar(m)  
        setVacio(m.every(c => c === false));   
    }
    
    useEffect(() => {
        const cargar = async () => {
            const catRecibido = location.state?.cat
            if (catRecibido !== undefined){
                const c = [...new Array(4)].map(()=> false)
                c[catRecibido] = true
                setMostrar(c)
            }
            setCargando(false)
        }
        cargar()
    }, [location])

    if (!cargando) return(
        <div id="lista">
            <div id="buscadorProductos">
                <div className="botonesLista">
                    <button onClick={() => actualizar(0)}>mix</button>
                </div>
                <div className="botonesLista">
                    <button onClick={() => actualizar(1)}>frutos secos</button>
                </div>
                <div className="botonesLista">
                    <button onClick={() => actualizar(2)}>cereales</button>
                </div>
                <div className="botonesLista">
                    <button onClick={() => actualizar(3)}>otros</button>
                </div>
            </div>
            <div id="contenedorProductos">
                {mostrar[0] && (
                    <div className="cat" id="listaMix">
                        <div className="catTitulo">Mixes</div>
                        {lista.filter(producto => producto.categoria === "Mix" )
                        .map(producto => (
                            <div className="producto" key={producto.nombre} onClick={() => navigate("/Producto", {state: {producto}})}>
                                <div className="nombreProducto">    <div>{producto.id}</div>    </div>
                                <img src={producto.imagenes}/>
                                <p className="preciokl"> 1KL: {producto.precio} </p>
                                <p className="precio500g">500g: {redondear(producto.precio / 2)}</p>
                                <p className="precio250g">250g: {redondear(producto.precio / 4)}</p>
                                <p className="precio100g">100g: {redondear(producto.precio / 10)}</p>
                            </div>
                        ))};
                    </div>
                )}
                {mostrar[1] && (
                    <div className="cat" id="listaFrutos">
                        <div className="catTitulo">Frutos Secos</div>
                        {lista.filter(producto => producto.categoria=== "Frutos secos" )
                        .map(producto => (
                            <div className="producto" key={producto.nombre} onClick={() => navigate("/Producto", {state: {producto}})}>
                                <div className="nombreProducto">    <div>{producto.id}</div>    </div>
                                <img src={producto.imagenes}/>
                                <p className="preciokl"> 1KL: {producto.precio} </p>
                                <p className="precio500g">500g: {redondear(producto.precio / 2)}</p>
                                <p className="precio250g">250g: {redondear(producto.precio / 4)}</p>
                                <p className="precio100g">100g: {redondear(producto.precio / 10)}</p>
                            </div>
                        ))};
                    </div>
                )}
                {mostrar[2] && (
                    <div className="cat" id="listaCereales">
                        <div className="catTitulo">Cereales</div>
                        {lista.filter(producto => producto.categoria=== "Cereales" )
                        .map(producto => (
                            <div className="producto" key={producto.nombre} onClick={() => navigate("/Producto", {state: {producto}})}>
                                <div className="nombreProducto">    <div>{producto.id}</div>    </div>
                                <img src={producto.imagenes}/>
                                <p className="preciokl"> 1KL: {producto.precio} </p>
                                <p className="precio500g">500g: {redondear(producto.precio / 2)}</p>
                                <p className="precio250g">250g: {redondear(producto.precio / 4)}</p>
                                <p className="precio100g">100g: {redondear(producto.precio / 10)}</p>
                            </div>
                        ))};
                    </div>
                )}
                {mostrar[3] && (
                    <div className="cat" id="listaOtros">
                        <div className="catTitulo">Otros</div>
                        {lista.filter(producto => producto.categoria=== "Otros" )
                        .map(producto => (
                            <div className="producto" key={producto.nombre} onClick={() => navigate("/Producto", {state: {producto}})}>
                                <div className="nombreProducto">    <div>{producto.id}</div>    </div>
                                <img src={producto.imagenes}/>
                                <p className="preciokl"> 1KL: {producto.precio} </p>
                                <p className="precio500g">500g: {redondear(producto.precio / 2)}</p>
                                <p className="precio250g">250g: {redondear(producto.precio / 4)}</p>
                                <p className="precio100g">100g: {redondear(producto.precio / 10)}</p>
                            </div>
                        ))};
                    </div>
                )}
                {vacio &&(
                    <div id="vacio">seleccionar una categoria</div>
                )}
            </div>
        </div>
    )
    return(
        <div>
            <h1>cargando</h1>
        </div>
    )
}