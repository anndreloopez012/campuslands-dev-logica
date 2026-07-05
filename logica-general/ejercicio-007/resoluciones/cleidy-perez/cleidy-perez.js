function escanearErroresPlaylist(canciones) {
    if (!canciones || canciones.length === 0) {
        return [];
    }
    const reporteInconsistencias = [];


    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];


        const tiempoInvalido = cancion.duracionSegundos <= 0;


        const faltaTexto = !cancion.titulo.trim() || !cancion.artista.trim();


        if (tiempoInvalido || faltaTexto) {


            let mensajeError = "Datos incompletos en el registro.";
            if (tiempoInvalido) {
                mensajeError = "La canción no puede durar 0 o menos segundos.";
            }


            reporteInconsistencias.push({
                id: cancion.id,
                tituloInvalido: cancion.titulo || "Sin Título",
                accion: "Corregir o eliminar canción de la playlist",
                motivo: mensajeError
            });
        }
    }
    return reporteInconsistencias;
}


// === PROBAR CASOS ===
const miPlaylist = [
    { id: 1, titulo: "Bohemian Rhapsody", artista: "Queen", duracionSegundos: 355 },
    { id: 2, titulo: " ", artista: "Desconocido", duracionSegundos: 180 },
    { id: 3, titulo: "Hotel California", artista: "Eagles", duracionSegundos: -10 },
    { id: 4, titulo: "Blinding Lights", artista: "The Weeknd", duracionSegundos: 200 }
];


console.log("--- Caso Normal (Encontrar canciones dañadas) ---");
const erroresEncontrados = escanearErroresPlaylist(miPlaylist);
console.log(erroresEncontrados);


console.log("\n--- Caso Borde (Playlist completamente vacía) ---");
const playlistVacia = escanearErroresPlaylist([]);
console.log(playlistVacia);
