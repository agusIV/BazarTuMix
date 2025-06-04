import { createContext, useContext, useState } from "react";

const CarContextAPI = createContext()

export function CarritoContextAPI({children}){
    const [carrito, setCarrito] = useState ([])

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => [...prev, producto])
    }

    const vaciarCarrito = () => setCarrito([])

    return(
        <CarContextAPI.Provider value={{carrito, agregarAlCarrito, vaciarCarrito}}>
            {children}
        </CarContextAPI.Provider>
    )
}

export const useCarrito = () => useContext(CarContextAPI); 