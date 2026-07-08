
/**
 * Ejercicio 003: Promedios y Medianas en Torneo de Esports
 * Autor: Yaneht Arias
 */

function calcularEstadisticasTorneo(scores) {
    if (!scores || scores.length === 0) return "Entrada vacía";

    // 1. Calcular Promedio
    const suma = scores.reduce((acc, val) => acc + val, 0);
    const promedio = suma / scores.length;

    // 2. Calcular Mediana
    const sorted = [...scores].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const mediana = sorted.length % 2 !== 0 
        ? sorted[mid] 
        : (sorted[mid - 1] + sorted[mid]) / 2;

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        clasificacion: promedio > 20 ? "élite" : "regular"
    };
}

// --- PRUEBAS ---
// Caso Normal
console.log("Caso Normal:", calcularEstadisticasTorneo([12, 18, 25, 30]));

// Caso Borde (Valores únicos)
console.log("Caso Borde:", calcularEstadisticasTorneo([10]));