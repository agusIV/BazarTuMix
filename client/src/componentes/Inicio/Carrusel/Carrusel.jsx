import "./Carrusel.css";
import { useEffect, useRef, useState } from "react";
import {importarImagenes} from "./cargarImagenes"

const imagenes = importarImagenes(
    require.context("../../imagenes", false, /\.(png|jpe?g|svg)$/)
)

export default function Carrusel() {
    const carruselRef = useRef(null)
    const [pos, setPos] = useState(0)

    const moverCarrusel = (nuevaPos) => {
        setPos(nuevaPos)
        if (carruselRef.current){
            carruselRef.current.style.transform = `translateX(-${nuevaPos * 100}%)`
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setPos((prev) => {
                const nueva = (prev + 1) % imagenes.length
                moverCarrusel(nueva)
                return nueva
            })
        }, 5000)
    
        return () => clearInterval(intervalo)
    }, [])

    return (
        <div id="destacado">
            <div ref={carruselRef} id="carrusel">
                {imagenes.map((src) => (
                    <div id="slide">
                        <img src={src}/>
                    </div>
                    
                ))}
            </div>
            <div id="botonesCarrusel">
                {imagenes.map((_, i) => (
                    <div
                        onClick={() => moverCarrusel(i)}
                        style={{backgroundColor: i === pos ? "white" : "gray"}}
                        id="botonCarrusel"
                    ></div>
                ))}
            </div>
        </div>
    )
}