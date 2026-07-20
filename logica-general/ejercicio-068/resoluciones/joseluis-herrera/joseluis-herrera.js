const peliculas = [
    { titulo: "Dune", formato: "4K", edadRecomendada: 13, estado: "Pendiente" },
    { titulo: "Retro Classic", formato: "720p", edadRecomendada: 16, estado: "Pendiente" },
    { titulo: "Sci-Fi Shorts", formato: "4K", edadRecomendada: 5, estado: "Pendiente" }
];

function procesarLanzamiento(lista) {
    console.log("--- Flujo de Aprobación de Lanzamientos ---");

    for (let i = 0; i < lista.length; i++) {
        let p = lista[i];
        console.log(`\nProcesando: ${p.titulo}`);

        if (p.formato !== "4K") {
            console.log("-> Rechazado: Formato no compatible.");
            continue; 
        }

        if (p.edadRecomendada < 12) {
            console.log("-> Rechazado: Contenido no apto para la audiencia objetivo.");
            continue;
        }

        p.estado = "Publicado";
        console.log(`-> Éxito: Película marcada como: ${p.estado}`);
    }
}

procesarLanzamiento(peliculas);