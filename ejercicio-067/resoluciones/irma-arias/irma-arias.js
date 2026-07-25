function detectarInconsistenciasPlaylist(playlist) {
    // 1. Validar datos vacíos (Caso borde)
    if (!playlist || playlist.length === 0) {
        return {
            estado: "Error",
            mensaje: "La lista de reproducción está vacía."
        };
    }

    let inconsistenciasEncontradas = [];
    let codigosVistos = new Set();

    playlist.forEach((cancion, index) => {
        let erroresCancion = [];

        // Regla 1: Validar campos obligatorios vacíos o nulos
        if (!cancion.id || !cancion.titulo || !cancion.artista) {
            erroresCancion.push("Faltan datos obligatorios (id, título o artista).");
        }

        // Regla 2: Validar duración inválida (cero o negativa)
        if (typeof cancion.duracionSegundos !== 'number' || cancion.duracionSegundos <= 0) {
            erroresCancion.push("Duración en segundos inválida o negativa.");
        }

        // Regla 3: Detectar IDs duplicados en la lista
        if (cancion.id && codigosVistos.has(cancion.id)) {
            erroresCancion.push("ID de canción duplicado en la lista.");
        } else if (cancion.id) {
            codigosVistos.add(cancion.id);
        }

        // Si se encontraron errores en esta canción, se registra como inconsistencia
        if (erroresCancion.length > 0) {
            inconsistenciasEncontradas.push({
                indice: index,
                cancionInfo: cancion,
                problemas: erroresCancion
            });
        }
    });

    // 4. Entregar resultado verificable
    return {
        accion: "Auditoría y detección de inconsistencias en la playlist",
        totalCancionesEvaluadas: playlist.length,
        tieneInconsistencias: inconsistenciasEncontradas.length > 0,
        detalleInconsistencias: inconsistenciasEncontradas
    };
}

// --- Casos de prueba ---
const playlistNormal = [
    { id: "S01", titulo: "Blinding Lights", artista: "The Weeknd", duracionSegundos: 200 },
    { id: "S02", titulo: "", artista: "Dua Lipa", duracionSegundos: 180 }, // Inconsistencia: Título vacío
    { id: "S01", titulo: "Repeat Song", artista: "Artist X", duracionSegundos: 210 }, // Inconsistencia: ID duplicado
    { id: "S03", titulo: "Bad Guy", artista: "Billie Eilish", duracionSegundos: -15 } // Inconsistencia: Duración negativa
];

const playlistBorde = []; // Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(detectarInconsistenciasPlaylist(playlistNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(detectarInconsistenciasPlaylist(playlistBorde), null, 2));