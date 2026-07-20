
const playlist = [
    { nombre: "Bohemian Rhapsody", duracion: 354 },
    { nombre: "", duracion: 180 },
    { nombre: "Intro", duracion: 45 },
    { nombre: "Blinding Lights", duracion: 200 },
    { nombre: "Short Track", duracion: 90 }
];

function auditarPlaylist(lista) {
    console.log("--- Reporte de Auditoría ---");


    lista.forEach((cancion) => {
        if (cancion.nombre === "" || cancion.duracion < 120) {
            console.log(`Alerta: La canción '${cancion.nombre || "Sin nombre"}' presenta inconsistencias (Duración: ${cancion.duracion}s)`);
        } else {
            console.log(`Canción '${cancion.nombre}' aprobada.`);
        }
    });
}

auditarPlaylist(playlist);