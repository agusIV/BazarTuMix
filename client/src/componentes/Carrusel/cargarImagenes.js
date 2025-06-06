export function importarImagenes(modulos) {
    const imagenes = []
    for (const path in modulos) {
        imagenes.push(modulos[path].default)
    }
    return imagenes
}