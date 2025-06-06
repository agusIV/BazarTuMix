import "./Carrusel.css";
import { useEffect, useRef, useState } from "react";
import {importarImagenes} from "./cargarImagenes"

const modulos = import.meta.glob('./imagenes/*.{png,jpg,jpeg,svg}', { eager: true })
const imagenes = importarImagenes(modulos)

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
        <div id="carruselDestacado">
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