/**
 * Ejercicio 078: Lógica matemática - Normalización de puntajes (Soldadura)
 * Alumna: Yaneh Arias
 */

function normalizarPuntajesSoldadura(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return {
            puntajes_normalizados: [],
            explicacion: "La lista de puntajes está vacía."
        };
    }

    let min = puntajes[0];
    let max = puntajes[0];

    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i] < min) min = puntajes[i];
        if (puntajes[i] > max) max = puntajes[i];
    }

    let normalizados = [];
    if (max === min) {
        // Caso borde donde todos los puntajes son idénticos
        normalizados = puntajes.map(() => 1.0);
    } else {
        for (let i = 0; i < puntajes.length; i++) {
            let valorNormalizado = (puntajes[i] - min) / (max - min);
            normalizados.push(Number(valorNormalizado.toFixed(2)));
        }
    }

    return {
        puntajes_normalizados: normalizados,
        explicacion: "Se aplicó la fórmula de normalización min-max para escalar los puntajes de calidad de soldadura entre 0 y 1."
    };
}

// Casos de prueba
const pruebaNormal = normalizarPuntajesSoldadura([60, 80, 100, 70]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = normalizarPuntajesSoldadura([85, 85, 85]);
console.log("Prueba Borde:", pruebaBorde);
