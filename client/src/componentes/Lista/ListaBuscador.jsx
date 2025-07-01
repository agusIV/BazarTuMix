export default function ListaBuscador({lista, categoriasSeleccionadas, setCategoriasSeleccionadas}) {
    const categorias = [...new Set(lista.flatMap(p => p.categorias))]

    const cambiarCategoria = (categoria) => {
        setCategoriasSeleccionadas(prev => 
            prev.includes(categoria)
                ? prev.filter(c => c !== categoria)
                : [...prev, categoria]
        )
    }

    return(
        <div id="listaBuscador">
            {categorias.map(c => (
                <div key={c} className="listaCheckBox">
                    <input 
                        type="checkBox" 
                        checked={categoriasSeleccionadas.includes(c)}
                        onChange={() => cambiarCategoria(c)}
                    />
                    {c}
                </div>
            ))}
        </div>
    )
}
