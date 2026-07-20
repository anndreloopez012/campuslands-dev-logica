const peliculas = [
    "El Conjuro", "It", "Scream", 
    "Hereditary", "Sinister", "Saw", 
    "The Ring", "Halloween"
];

function organizarArchivos(lista) {
    const capacidadArchivo = 3;
    const totalPeliculas = lista.length;

    const archivosCompletos = Math.floor(totalPeliculas / capacidadArchivo);
    const pendientes = totalPeliculas % capacidadArchivo;

    console.log("--- Reporte de Distribución de Archivos ---");
    console.log(`Total películas procesadas: ${totalPeliculas}`);
    console.log(`Archivos creados (3 pelis c/u): ${archivosCompletos}`);
    console.log(`Películas en revisión (pendientes): ${pendientes}`);

    if (pendientes > 0) {
        console.log("Detalle de pendientes:");
        const listaPendientes = lista.slice(totalPeliculas - pendientes);
        listaPendientes.forEach(p => console.log(`- ${p}`));
    }
}

organizarArchivos(peliculas);