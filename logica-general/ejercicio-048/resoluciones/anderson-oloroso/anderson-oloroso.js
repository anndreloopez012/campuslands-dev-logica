function evaluarProcesoPelicula(pelicula) {
    const pasosCompletados = [];

    if (pelicula.guion) {
        pasosCompletados.push("Guion aprobado");
    } else {
        pasosCompletados.push("Guion pendiente");
        return pasosCompletados;
    }

    if (pelicula.efectosEspeciales) {
        pasosCompletados.push("Efectos especiales completados");
    } else {
        pasosCompletados.push("Efectos especiales pendientes");
        return pasosCompletados;
    }

    if (pelicula.edicion) {
        pasosCompletados.push("Edición finalizada");
    } else {
        pasosCompletados.push("Edición pendiente");
        return pasosCompletados;
    }

    pasosCompletados.push("Película lista para estreno");

    return pasosCompletados;
}

// Ejemplo
const pelicula = {
    titulo: "Exploración Galáctica",
    guion: true,
    efectosEspeciales: true,
    edicion: false
};

console.log(evaluarProcesoPelicula(pelicula));