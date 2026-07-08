
/**
 * Ejercicio 012: Probabilidad básica en Ping Pong
 * Autor: Yaneht Arias
 */

function calcularProbabilidadVictoria(saquesExitosos, totalSaques) {
    if (totalSaques === 0) return "El total de saques debe ser mayor a 0";
    
    // Probabilidad: casos favorables / casos totales
    const probabilidad = saquesExitosos / totalSaques;

    return {
        totalSaques,
        saquesExitosos,
        probabilidad: (probabilidad * 100).toFixed(2) + "%",
        nivelEfectividad: probabilidad > 0.7 ? "élite" : "regular"
    };
}

// --- PRUEBAS ---
// Caso Normal: 8 saques exitosos de 10
console.log("Caso Normal:", calcularProbabilidadVictoria(8, 10));

// Caso Borde: 0 saques exitosos
console.log("Caso Borde:", calcularProbabilidadVictoria(0, 10));