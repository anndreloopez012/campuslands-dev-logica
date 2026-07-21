
const playlist = [
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", duracionMinutos: 5.5 },
    { id: 2, titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracionMinutos: 8.0 },
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", duracionMinutos: 5.5 }, // Inconsistencia: Duplicado por ID
    { id: 3, titulo: "Canción Silenciosa", artista: "Desconocido", duracionMinutos: 0 }, // Inconsistencia: Duración inválida
    { id: 4, titulo: "", artista: "Adele", duracionMinutos: 4.0 } // Inconsistencia: Título vacío
];

// Función para detectar inconsistencias en la lista de reproducción
function detectarInconsistencias(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de reproducción está vacía o no es válida." };
    }

    let inconsistenciasEncontradas = [];
    let idsVistos = new Set();

    lista.forEach((cancion, index) => {
        let problemas = [];

        // Regla 1: Validar campos vacíos o faltantes
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            problemas.push("Título vacio o faltante");
        }
        if (!cancion.artista || cancion.artista.trim() === "") {
            problemas.Index.push("Artista vacio o faltante");
        }

        // Regla 2: Validar duración inválida (menor o igual a 0)
        if (typeof cancion.duracionMinutos !== "number" || cancion.duracionMinutos <= 0) {
            problemas.push("Duración inválida (0 o negativa)");
        }

        // Regla 3: Validar elementos duplicados por ID
        if (idsVistos.has(cancion.id)) {
            problemas.push("ID duplicado en la lista");
        } else {
            idsVistos.add(cancion.id);
        }

        // Si se encontraron problemas en esta canción, se registra
        if (problemas.length > 0) {
            inconsistenciasEncontradas.push({
                indice: index,
                datosCancion: cancion,
                motivos: problemas
            });
        }
    });

    if (inconsistenciasEncontradas.length === 0) {
        return { estado: "Éxito", mensaje: "No se encontraron inconsistencias en la playlist." };
    }

    return {
        estado: "Inconsistencias Detectadas",
        totalErrores: inconsistenciasEncontradas.length,
        detalles: inconsistenciasEncontradas
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Analizar la lista completa con errores variados
console.log("--- PRUEBA NORMAL (Playlist con errores) ---");
console.log(JSON.stringify(detectarInconsistencias(playlist), null, 2));

// 2. Prueba de caso borde: Lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(detectarInconsistencias([]));