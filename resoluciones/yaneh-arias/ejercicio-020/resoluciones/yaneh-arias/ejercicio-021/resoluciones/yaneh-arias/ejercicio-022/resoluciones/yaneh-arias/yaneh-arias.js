
/**
 * Ejercicio 022: Ranking de Fútbol Sala
 * Regla: Índice = (Ganados / TotalPartidos) * 100
 * Si el índice es > 75, recibe un bono extra del 10% sobre el mismo índice.
 */

function calcularRankingFutsal(ganados, perdidos, empatados, bono, penalizacion) {
    let totalPartidos = ganados + perdidos + empatados;
    
    // Validar división por cero
    if (totalPartidos === 0) return "Error: No hay partidos registrados";

    // 1. Cálculo de proporción
    let indiceEfectividad = (ganados / totalPartidos) * 100;

    // 2. Regla condicional de bono extra (análisis de rendimiento)
    if (indiceEfectividad > 75) {
        indiceEfectividad += (indiceEfectividad * 0.10); // Bono del 10%
    }

    // 3. Aplicar bonos y penalizaciones fijas
    let puntajeFinal = Math.round(indiceEfectividad + bono - penalizacion);

    // 4. Clasificación
    let categoria = puntajeFinal >= 80 ? "Oro" : puntajeFinal >= 50 ? "Plata" : "Bronce";

    return {
        puntaje_final: puntajeFinal,
        categoria: categoria,
        explicacion: `Efectividad base calculada sobre ${totalPartidos} partidos.`
    };
}

// Pruebas
console.log(calcularRankingFutsal(15, 2, 3, 5, 2)); // Normal: 15/20 = 75%
console.log(calcularRankingFutsal(0, 10, 0, 0, 0)); // Borde: 0% efectividad