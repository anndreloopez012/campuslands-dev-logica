function simularEstadosPeliculasMiedo(peliculas) {
    if (!peliculas || peliculas.length === 0) {
        return [];
    }
    const historialCambios = [];
    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
       


        let estadoActual = pelicula.estadoInicial;
        let accionTomada = "Ninguna";




        if (estadoActual === "En revisión" && pelicula.tieneEscenasFuertes === false) {
            estadoActual = "Aprobada";
            accionTomada = "Publicar en el catálogo de estreno.";
        }
        else if (estadoActual === "En revisión" && pelicula.tieneEscenasFuertes === true) {
            estadoActual = "Bajo Censura";
            accionTomada = "Enviar al equipo de edición para cortar escenas.";
        }


        else if (estadoActual === "Aprobada") {
            accionTomada = "Mantener disponible en la plataforma.";
        }
        historialCambios.push({
            titulo: pelicula.titulo,
            estadoAnterior: pelicula.estadoInicial,
            nuevoEstado: estadoActual,
            accion: accionTomada
        });
    }
    return historialCambios;
}


const listaPeliculasMiedo = [
    { titulo: "El Conjuro", estadoInicial: "En revisión", tieneEscenasFuertes: false },
    { titulo: "Saw (El juego del miedo)", estadoInicial: "En revisión", tieneEscenasFuertes: true },
    { titulo: "Gasparín", estadoInicial: "Aprobada", tieneEscenasFuertes: false }
];


console.log("--- Caso Normal (Simulación de Estados) ---");
console.log(simularEstadosPeliculasMiedo(listaPeliculasMiedo));


console.log("\n--- Caso Borde (Lista Vacía) ---");
console.log(simularEstadosPeliculasMiedo([]));
