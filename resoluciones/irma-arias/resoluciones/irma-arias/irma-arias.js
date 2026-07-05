
/**
 * Ejercicio 007: Detección de inconsistencias - Playlist
 * Autor: Irma Yaneht Arias García
 */

const playlist = [
    { titulo: "Desgarro de mi alma", duracion: 180 },
    { titulo: "", duracion: 200 }, // Inconsistencia: Título vacío
    { titulo: "Melodía al viento", duracion: -5 } // Inconsistencia: Duración negativa
];

function detectarInconsistencias(lista) {
    return lista.filter(cancion => cancion.titulo === "" || cancion.duracion <= 0);
}

console.log("Canciones con datos inconsistentes:");
console.table(detectarInconsistencias(playlist));