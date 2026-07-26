/**
 * Ejercicio 061: Operaciones aritméticas controladas - Videojuegos competitivos
 * Autor: Irma Yaneht Arias García
 */

function calcularPuntajeCompetitivo(participantes, bono, penalizacion) {
    // Validar datos de entrada vacíos o no válidos
    if (!Array.isArray(participantes) || participantes.length === 0) {
        return { error: "La lista de participantes está vacía o no es válida." };
    }

    let acumuladorPuntajes = 0;

    // Ciclo para sumar los puntajes base de los participantes
    for (let i = 0; i < participantes.length; i++) {
        acumuladorPuntajes += participantes[i];
    }

    // Calcular promedio base y aplicar bono y penalización controlada
    let promedioBase = acumuladorPuntajes / participantes.length;
    let puntajeFinal = Math.round(promedioBase + bono - penalizacion);

    // Definir la clasificación según el puntaje final obtenido
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "elite";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se calculó el promedio base de los participantes, se sumó el bono y se restó la penalización según las reglas."
    };
}

// --- PRUEBA 1: Caso Normal (Ejemplo del enunciado) ---
const participantesNormal = [12, 18, 25, 30];
const bonoNormal = 8;
const penalizacionNormal = 3;

console.log("--- PRUEBA 1 (Normal) ---");
console.log(calcularPuntajeCompetitivo(participantesNormal, bonoNormal, penalizacionNormal));

// --- PRUEBA 2: Caso Borde (Valores bajos y lista con un solo elemento) ---
const participantesBorde = [5];
const bonoBorde = 2;
const penalizacionBorde = 10;

console.log("--- PRUEBA 2 (Caso Borde) ---");
console.log(calcularPuntajeCompetitivo(participantesBorde, bonoBorde, penalizacionBorde));