
/**
 * Ejercicio 002: Ranking de fútbol sala
 * Autor: Yaneht Arias
 */

function calcularRanking(participantes, bono, penalizacion) {
    // 1. Calcular suma total
    const sumaTotal = participantes.reduce((acc, val) => acc + val, 0);

    // 2. Aplicar reglas (Bono y Penalización)
    const puntajeFinal = sumaTotal + bono - penalizacion;

    // 3. Determinar clasificación según el puntaje
    let clasificacion = "";
    if (puntajeFinal > 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "estándar";
    } else {
        clasificacion = "en desarrollo";
    }

    return {
        puntajeFinal,
        clasificacion,
        explicacion: "Se sumó el bono y se restó la penalización al total de los participantes."
    };
}

// --- PRUEBAS ---
// Caso 1: Ejemplo dado
console.log("Caso Normal:", calcularRanking([12, 18, 25, 30], 8, 3));

// Caso 2: Caso borde (Valores mínimos)
console.log("Caso Borde:", calcularRanking([1, 1], 0, 1));