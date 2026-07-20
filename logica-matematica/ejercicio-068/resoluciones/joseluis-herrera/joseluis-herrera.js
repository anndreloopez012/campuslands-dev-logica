const peliculas = [
    { titulo: "Interstellar", puntaje: 9.5 },
    { titulo: "Blade Runner 2049", puntaje: 8.2 },
    { titulo: "The Cloverfield Paradox", puntaje: 4.8 },
    { titulo: "Ad Astra", puntaje: 6.5 },
    { titulo: "Moon Fall", puntaje: 3.2 }
];

function analizarPuntuaciones(lista) {
    console.log("--- Reporte de Calidad Cinematográfica ---");

    lista.forEach((pelicula) => {
        let estado = "";

        if (pelicula.puntaje >= 8) {
            estado = "Excelente";
        } else if (pelicula.puntaje >= 5) {
            estado = "Regular";
        } else {
            estado = "Crítica";
        }

        console.log(`Película: ${pelicula.titulo} | Puntuación: ${pelicula.puntaje} | Estado: ${estado}`);
    });
}

analizarPuntuaciones(peliculas);