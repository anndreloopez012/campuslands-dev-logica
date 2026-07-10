
/**
 * Ejercicio: Ranking de Competencia (Manejo de Empates)
 * Reglas: 1. Sumar bono. 2. Restar penalización. 3. Clasificar.
 * En caso de empate en el puntaje, se mantiene la posición original del índice.
 */

function generarRanking(participantes, bono, penalizacion) {
    if (!participantes || participantes.length === 0) return "Datos inválidos";

    // Procesar cada participante individualmente (Regla paso a paso)
    let ranking = participantes.map((puntaje, index) => {
        let puntajeFinal = puntaje + bono - penalizacion;
        let clasificacion = "";

        // Lógica de clasificación
        if (puntajeFinal >= 25) clasificacion = "competitivo";
        else if (puntajeFinal >= 15) clasificacion = "promedio";
        else clasificacion = "principiante";

        return { id: index + 1, puntajeFinal, clasificacion };
    });

    // Ordenar de mayor a menor para el ranking
    ranking.sort((a, b) => b.puntajeFinal - a.puntajeFinal);

    return ranking;
}

// Pruebas
const entrada = [12, 18, 25, 30];
console.log("Ranking Final:", generarRanking(entrada, 8, 3));