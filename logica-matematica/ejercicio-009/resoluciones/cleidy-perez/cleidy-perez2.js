function organizarButacasMaraton(peliculas, asientosPorFila) {
    if (!peliculas || peliculas.length === 0 || asientosPorFila <= 0) {
        return [];
    }

    const resultados = [];

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        if (pelicula.espectadores < 0) continue;


        const espectadoresQueSobran = pelicula.espectadores % asientosPorFila;

        const esDivisibleExacto = espectadoresQueSobran === 0;

        let estadoFila = "Incompleta";
        let accion = `Ubicar a los ${espectadoresQueSobran} sobrevivientes en una fila extra.`;

        if (esDivisibleExacto) {
            estadoFila = "Perfecta";
            accion = "Todas las filas del cine quedaron llenas y ordenadas.";
        }

        resultados.push({
            titulo: pelicula.titulo,
            espectadores: pelicula.espectadores,
            sobrantes: espectadoresQueSobran,
            estadoDeSalas: estadoFila,
            instruccion: accion
        });
    }
    return resultados;
}

// === PROBAR CASOS ===
const maratonTerror = [
    { titulo: "Scream", espectadores: 30 },  
    { titulo: "El Exorcista", espectadores: 34 } 
];

console.log("--- Caso Normal (Revisar Filas del Cine) ---");
console.log(organizarButacasMaraton(maratonTerror, 10)); 

console.log("\n--- Caso Borde (Lista Vacía) ---");
console.log(organizarButacasMaraton([], 10));