
/**
 * Resolucion: gestion-torneo.js
 * Objetivo: Determinar el equipo clasificado basado en puntos y victorias.
 */

function determinarClasificado(equipos) {
    if (!equipos || equipos.length === 0) {
        return "Error: No hay equipos para evaluar.";
    }

    // Usamos el método reduce para encontrar el mejor equipo según las reglas
    const ganador = equipos.reduce((mejor, actual) => {
        if (actual.puntos > mejor.puntos) {
            return actual;
        } else if (actual.puntos === mejor.puntos) {
            return actual.partidasGanadas > mejor.partidasGanadas ? actual : mejor;
        }
        return mejor;
    });

    return {
        accion: `Clasificado: ${ganador.nombre}`,
        motivo: `Puntos: ${ganador.puntos}, Victorias: ${ganador.partidasGanadas}. Cumple criterios de desempate.`
    };
}

// --- Casos de Prueba ---

// Caso 1: Normal
const listaNormal = [
    { nombre: "Alpha", puntos: 10, partidasGanadas: 3 },
    { nombre: "Beta", puntos: 15, partidasGanadas: 5 }
];

// Caso 2: Borde (Empate en puntos, desempate por partidas)
const listaEmpate = [
    { nombre: "Omega", puntos: 20, partidasGanadas: 4 },
    { nombre: "Sigma", puntos: 20, partidasGanadas: 6 }
];

console.log("Resultado Caso Normal:", determinarClasificado(listaNormal));
console.log("Resultado Caso Borde:", determinarClasificado(listaEmpate));