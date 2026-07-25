
function procesarFlujoPeliculas(pelicula) {
    // 1. Validar datos de entrada (Caso borde)
    if (!pelicula || typeof pelicula !== 'object' || Object.keys(pelicula).length === 0) {
        return {
            estado: "Rechazado",
            pasoActual: "Validación de entrada",
            motivo: "Error: No se proporcionaron datos válidos de la película."
        };
    }

    // Paso 2: Verificar el año de estreno
    if (!pelicula.anio || pelicula.anio < 1900) {
        return {
            pelicula: pelicula.titulo || "Desconocida",
            pasoActual: "Validación de año",
            resultado: "No apta",
            motivo: "El año de estreno no es válido o es anterior a 1900."
        };
    }

    // Paso 3: Evaluar calificación para recomendación
    let recomendacion = "";
    if (pelicula.calificacion >= 8.5) {
        recomendacion = "Clasificada como Obra Maestra de la Ciencia Ficción";
    } else if (pelicula.calificacion >= 7.0) {
        recomendacion = "Recomendada para entusiastas del género";
    } else {
        recomendacion = "Solo para espectadores casuales";
    }

    // 4. Entregar resultado final del flujo
    return {
        pelicula: pelicula.titulo,
        genero: pelicula.genero || "Sci-Fi",
        pasoActual: "Flujo completado con éxito",
        resultado: recomendacion,
        detalles: {
            anioEstreno: pelicula.anio,
            calificacionObtenida: pelicula.calificacion
        }
    };
}

// --- Casos de prueba ---
const peliculaNormal = {
    titulo: "Interstellar",
    genero: "Ciencia Ficción / Drama",
    anio: 2014,
    calificacion: 8.8
};

const peliculaBorde = {}; // Objeto vacío para probar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarFlujoPeliculas(peliculaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarFlujoPeliculas(peliculaBorde), null, 2));