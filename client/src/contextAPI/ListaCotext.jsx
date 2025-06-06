import { createContext, useContext, useState , useEffect} from "react";

const ListaContext = createContext()

export const ListaProovedor = ({children}) => {
    const [lista, setLista] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then(res => res.json())
            .then(data => {
                setLista(data)
                setCargando(false)    
            })
    }, [])

    return (
        <ListaContext.Provider value={{lista, cargando}}>
            {children}
        </ListaContext.Provider>
    )
}

export const useLista = () => useContext(ListaContext)
