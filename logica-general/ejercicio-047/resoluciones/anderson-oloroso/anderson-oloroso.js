function detectarInconsistencias(canciones) {
    const inconsistencias = [];

    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];

        if (cancion.duracion <= 0 || cancion.titulo === "" || cancion.artista === "") {
            inconsistencias.push(cancion);
        }
    }

    return inconsistencias;
}

// Ejemplo
const playlist = [
    { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
    { titulo: "", artista: "Imagine Dragons", duracion: 230 },
    { titulo: "Believer", artista: "", duracion: 210 },
    { titulo: "Song Test", artista: "Artist", duracion: 0 }
];

const errores = detectarInconsistencias(playlist);

console.log("Canciones con inconsistencias:");
console.log(errores);