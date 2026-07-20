const playlist = [
    { titulo: "Canción A", duracion: 210, disponible: true },
    { titulo: "Canción B", duracion: -15, disponible: true },
    { titulo: "Canción C", duracion: 180, disponible: false }
];

let inconsistencia = "";
let motivo = "";

for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].duracion <= 0) {
        inconsistencia = playlist[i].titulo;
        motivo = "La duración de la canción no es válida.";
        break;
    } else if (!playlist[i].disponible) {
        inconsistencia = playlist[i].titulo;
        motivo = "La canción está marcada como no disponible.";
        break;
    }
}

if (inconsistencia === "") {
    inconsistencia = "Sin inconsistencias";
    motivo = "Todas las canciones tienen datos válidos.";
}

console.log("inconsistencia:", inconsistencia);
console.log("motivo:", motivo);