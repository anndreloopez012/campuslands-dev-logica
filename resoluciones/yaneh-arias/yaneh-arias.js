
/**
 * Ejercicio 008: Patrones de puntuación en cine Sci-Fi
 * Autor: Yaneht Arias
 */

function analizarPuntuaciones(scores, umbral) {
    if (!scores || scores.length === 0) return "Lista vacía";

    // 1. Filtrar películas que superan el umbral
    const recomendadas = scores.filter(score => score >= umbral);

    // 2. Calcular porcentaje de éxito
    const porcentaje = (recomendadas.length / scores.length) * 100;

    return {
        totalAnalizadas: scores.length,
        superanUmbral: recomendadas.length,
        porcentajeExito: porcentaje.toFixed(2) + "%",
        patron: porcentaje > 50 ? "Tendencia Positiva" : "Tendencia Crítica"
    };
}

// --- PRUEBAS ---
// Caso Normal
console.log("Caso Normal:", analizarPuntuaciones([8.5, 9.0, 6.5, 7.0, 9.5], 8.0));

// Caso Borde: Lista con un solo elemento
console.log("Caso Borde:", analizarPuntuaciones([5.0], 8.0));