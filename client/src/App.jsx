import React from "react";
import "./index.css"
import Cabezera from "./componentes/Cabezera";

import Pie from "./componentes/Pie"

function App() {
    const lista = [
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
    return (
        <>
            <Cabezera parametro={lista}/>
            <Pie/>
        </>
    );
}

export default App;