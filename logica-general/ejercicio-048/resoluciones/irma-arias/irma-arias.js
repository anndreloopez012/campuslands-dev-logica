
const catalogoPeliculas = [
    { id: 1, titulo: "Blade Runner 2049", anio: 2017, visto: true },
    { id: 2, titulo: "Interstellar", anio: 2014, visto: false },
    { id: 3, titulo: "Dune: Part Two", anio: 2024, visto: false },
    { id: 4, titulo: "Matrix", anio: 1999, visto: true }
];

// Función que aplica el flujo paso a paso para recomendar la siguiente película a ver
function procesarFlujoPeliculas(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "El catálogo de películas está vacío o no es válido." };
    }

    let pendientes = [];
    let vistas = [];

    // Paso 2: Ciclo para clasificar elementos según las reglas de flujo
    for (let i = 0; i < lista.length; i++) {
        let pelicula = lista[i];
        
        // Validación interna de campos obligatorios
        if (!pelicula.titulo || typeof pelicula.anio !== "number") {
            continue; // Ignorar registros mal formados
        }

        if (pelicula.visto === false) {
            pendientes.push(pelicula);
        } else {
            vistas.push(pelicula);
        }
    }

    // Paso 3: Aplicar regla de priorización (ordenar pendientes por año de más antiguo a más reciente)
    pendientes.sort((a, b) => a.anio - b.anio);

    // Paso 4: Definir la salida estructurada
    return {
        estado: "Proceso Exitoso",
        totalPeliculas: lista.length,
        sugerenciaProxima: pendientes.length > 0 ? pendientes[0] : "No hay películas pendientes",
        listaPendientesOrdenada: pendientes,
        resumenVistas: vistas.length
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Procesar el catálogo completo de ciencia ficción
console.log("--- PRUEBA NORMAL (Catálogo de Ciencia Ficción) ---");
console.log(JSON.stringify(procesarFlujoPeliculas(catalogoPeliculas), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(procesarFlujoPeliculas([]));