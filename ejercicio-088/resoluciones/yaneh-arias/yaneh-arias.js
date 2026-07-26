/**
 * Ejercicio 088: Lógica matemática - Patrones de puntuación (Películas de ciencia ficción)
 * Alumna: Yaneh Arias
 */

function analizarPatronPuntuacion(puntajesCriticas) {
    if (!puntajesCriticas || puntajesCriticas.length === 0) {
        return {
            patron: "sin datos",
            explicacion: "La lista de puntajes de críticas de cine está vacía."
        };
    }

    let esAscendente = true;
    let esDescendente = true;

    for (let i = 0; i < puntajesCriticas.length - 1; i++) {
        if (puntajesCriticas[i] > puntajesCriticas[i + 1]) {
            esAscendente = false;
        }
        if (puntajesCriticas[i] < puntajesCriticas[i + 1]) {
            esDescendente = false;
        }
    }

    let patron = "irregular";
    if (esAscendente) {
        patron = "creciente";
    } else if (esDescendente) {
        patron = "decreciente";
    }

    return {
        patron: patron,
        explicacion: "Se analizó la tendencia de puntuación de las críticas de la película de ciencia ficción determinando si el patrón es creciente, decreciente o irregular."
    };
}

// Casos de prueba
const pruebaNormal = analizarPatronPuntuacion([7.0, 7.5, 8.2, 9.0]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = analizarPatronPuntuacion([8.5, 8.5, 8.5]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
