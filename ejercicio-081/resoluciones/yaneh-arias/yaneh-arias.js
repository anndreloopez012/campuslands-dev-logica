/**
 * Ejercicio 081: Lógica matemática - Operaciones aritméticas controladas (Videojuegos competitivos)
 * Alumna: Yaneh Arias
 */

function calcularPuntajeCompetitivo(puntajesBase, bonus, penalizacion) {
    if (!puntajesBase || puntajesBase.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de puntajes base está vacía."
        };
    }

    let sumaTotal = 0;
    for (let i = 0; i < puntajesBase.length; i++) {
        sumaTotal += puntajesBase[i];
    }

    // Aplicamos operaciones aritméticas controladas
    let puntajeFinal = sumaTotal + (bonus !== undefined ? bonus : 0) - (penalizacion !== undefined ? penalizacion : 0);
    
    // Evitamos puntajes negativos por seguridad lógica
    if (puntajeFinal < 0) {
        puntajeFinal = 0;
    }

    let clasificacion = puntajeFinal >= 50 ? "competitivo" : "novato";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se sumó el bono y se restó la penalización según las reglas del torneo de videojuegos."
    };
}

// Casos de prueba
const pruebaNormal = calcularPuntajeCompetitivo([12, 18, 25, 30], 8, 3);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularPuntajeCompetitivo([], 5, 2);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
