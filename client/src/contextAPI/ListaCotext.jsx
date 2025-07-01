import { createContext, useContext, useState} from "react";

const ListaContext = createContext()

export const ListaProovedor = ({children, listaInicial}) => {
    const [lista, setLista] = useState(listaInicial)

    return (
        <ListaContext.Provider value={{lista}}>
            {children}
        </ListaContext.Provider>
    )
}

export const useLista = () => useContext(ListaContext)
