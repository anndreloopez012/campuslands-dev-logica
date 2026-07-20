const detectarInconsistencias = (playlist) => {
    let errores = [];

    playlist.forEach((cancion, index) => {
        if (!cancion.titulo || cancion.titulo.trim() === "") {
            errores.push(`Cancion en indice ${index}: Falta titulo.`);
        }
        if (typeof cancion.duracion !== 'number' || cancion.duracion <= 0) {
            errores.push(`Cancion '${cancion.titulo}': Duracion invalida.`);
        }
        if (cancion.anio < 1900 || cancion.anio > 2026) {
            errores.push(`Cancion '${cancion.titulo}': Anio fuera de rango.`);
        }
    });

    return {
        valido: errores.length === 0,
        detalles: errores.length > 0 ? errores : "Playlist correcta."
    };
};

const miPlaylist = [
    { titulo: "Bohemian Rhapsody", duracion: 354, anio: 1975 },
    { titulo: "", duracion: 200, anio: 2020 },
    { titulo: "Song X", duracion: -10, anio: 2025 }
];

console.log(detectarInconsistencias(miPlaylist));
console.log(detectarInconsistencias([{ titulo: "Clean", duracion: 180, anio: 2023 }]));