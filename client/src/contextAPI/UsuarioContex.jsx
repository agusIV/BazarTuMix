import { createContext, useState, useContext } from "react";

const UsuarioContext = createContext()

export const UsuarioProovedor = ({children}) => {
    const [usuario, setUsuario] = useState(null)

    const iniciar = (uData) => setUsuario(uData)
    const cerrar = () => setUsuario(null)

    const [carrito, setCarrito] = useState ([])

    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {
            const existe = prev.find(p => p.id === producto.id)
            if (existe) {
                return prev.map(p => 
                    p.id === producto.id ? producto : p
                )
            }else{
                return [...prev, producto]
            }
        })
    }

    const borrarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(p => p.id !== id))
    }

    const vaciarCarrito = () => setCarrito([])

    return (
        <UsuarioContext.Provider value={{usuario, iniciar, cerrar, carrito, agregarAlCarrito, borrarDelCarrito, vaciarCarrito}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export const useUsuario = () => useContext(UsuarioContext)
