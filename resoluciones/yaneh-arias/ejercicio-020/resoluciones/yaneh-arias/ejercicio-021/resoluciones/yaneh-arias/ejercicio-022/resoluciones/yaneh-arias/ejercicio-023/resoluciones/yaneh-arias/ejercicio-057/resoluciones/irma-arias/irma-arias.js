// irma-arias.js - Ejercicio 057: Arquitectura 3D (Estadísticas de ranking)

// Función 1: Validar que la lista de participantes en el ranking sea un arreglo válido con puntajes numéricos
function validarListaRanking(listaProyectos) {
    if (!Array.isArray(listaProyectos) || listaProyectos.length === 0) {
        return false;
    }
    for (let item of listaProyectos) {
        if (!item.nombre || typeof item.puntaje !== 'number' || item.puntaje < 0) {
            return false;
        }
    }
    return true;
}

// Función 2: Procesar estadísticas y ordenar el ranking de proyectos de arquitectura 3D
function generarRankingArquitectura(listaProyectos) {
    if (!validarListaRanking(listaProyectos)) {
        return {
            estado: "Error",
            mensaje: "Lista de proyectos inválida. Asegúrate de proveer un arreglo con objetos que contengan un 'nombre' (string) y un 'puntaje' (número >= 0)."
        };
    }

    // Copiar y ordenar de mayor a menor puntaje (ranking)
    const proyectosOrdenados = [...listaProyectos].sort((a, b) => b.puntaje - a.puntaje);

    // Calcular acumuladores y estadísticas
    let sumaPuntajes = 0;
    let puntajeMaximo = proyectosOrdenados[0].puntaje;
    let puntajeMinimo = proyectosOrdenados[proyectosOrdenados.length - 1].puntaje;

    for (let proyecto of proyectosOrdenados) {
        sumaPuntajes += proyecto.puntaje;
    }

    const promedioPuntajes = Number((sumaPuntajes / proyectosOrdenados.length).toFixed(2));

    // Asignar posiciones y categorías de ranking
    const rankingConDetalles = proyectosOrdenados.map((proyecto, indice) => {
        let clasificacion = "Estándar";
        if (proyecto.puntaje >= 90) {
            clasificacion = "Master BIM / Render Elite";
        } else if (proyecto.puntaje >= 75) {
            clasificacion = "Avanzado - Estructura Sólida";
        } else {
            clasificacion = "En Proceso de Optimización";
        }

        return {
            puesto: indice + 1,
            nombreProyecto: proyecto.nombre,
            puntajeObtenido: proyecto.puntaje,
            nivel: clasificacion
        };
    });

    return {
        estado: "Exitoso",
        totalParticipantes: proyectosOrdenados.length,
        estadisticasGlobales: {
            promedioGeneral: promedioPuntajes,
            puntajeMasAlto: puntajeMaximo,
            puntajeMasBajo: puntajeMinimo
        },
        rankingOficial: rankingConDetalles,
        explicacion: `Se procesaron y ordenaron los puntajes de los proyectos de arquitectura 3D aplicando estadísticas descriptivas y reglas de clasificación.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Lista de proyectos de arquitectura 3D con sus respectivos puntajes
const pruebaNormal = [
    { nombre: "Torre Bioclimática Vertex", puntaje: 95 },
    { nombre: "Museo Paramétrico de Arte", puntaje: 88 },
    { nombre: "Complex Habitacional EcoHouse", puntaje: 72 },
    { nombre: "Pabellón Minimalista Acero", puntaje: 91 }
];

// Caso Borde: Lista vacía para comprobar la gestión de errores
const pruebaBorde = [];

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(generarRankingArquitectura(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(generarRankingArquitectura(pruebaBorde), null, 2));