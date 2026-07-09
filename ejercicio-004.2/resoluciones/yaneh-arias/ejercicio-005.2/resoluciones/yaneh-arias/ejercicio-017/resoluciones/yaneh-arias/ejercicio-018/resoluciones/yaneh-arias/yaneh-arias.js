/**
 * Ejercicio 018: Normalización de Puntajes - Soldadura
 */

function normalizarSoldadura(puntajes, bono, penalizacion) {
    if (puntajes.length === 0) return "Error: Lista vacía";

    // 1. Encontrar Min y Max para normalizar
    let min = Math.min(...puntajes);
    let max = Math.max(...puntajes);

    // 2. Normalizar cada puntaje a una escala de 0 a 100
    let sumaNormalizada = 0;
    for (let p of puntajes) {
        let normalizado = ((p - min) / (max - min || 1)) * 100;
        sumaNormalizada += normalizado;
    }

    // 3. Cálculo final
    let promedioNormalizado = sumaNormalizada / puntajes.length;
    let puntajeFinal = Math.round(promedioNormalizado + bono - penalizacion);

    // 4. Clasificación
    let clasificacion = puntajeFinal >= 80 ? "experto" : 
                        puntajeFinal >= 50 ? "calificado" : "aprendiz";

    return { puntaje_final: puntajeFinal, clasificacion };
}

// Pruebas
console.log(normalizarSoldadura([10, 20, 30, 40], 5, 2));
console.log(normalizarSoldadura([50, 50], 0, 0)); // Caso borde: todos iguales