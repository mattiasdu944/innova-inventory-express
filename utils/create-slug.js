export const createSlug = (text) => {
    return text
        .toLowerCase() // Convertir a minúsculas
        .replace(/\s+/g, '-') // Reemplazar espacios en blanco con guiones
        .replace(/[^\w\-]+/g, '') // Eliminar caracteres no alfanuméricos excepto guiones
        .replace(/\-\-+/g, '-') // Reemplazar múltiples guiones por uno solo
        .replace(/^-+/, '') // Eliminar guiones al comienzo
        .replace(/-+$/, ''); // Eliminar guiones al final
}
