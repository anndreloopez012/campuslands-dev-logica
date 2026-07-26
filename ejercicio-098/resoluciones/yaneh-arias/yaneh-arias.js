/**
 * Ejercicio 098: Lógica matemática - Normalización de puntajes (Soldadura)
 * Alumna: Yaneh Arias
 */

function normalizarPuntajesSoldadura(puntajes, minRango, maxRango) {
    if (!puntajes || puntajes.length === 0) {
        return {
            puntajes_normalizados: [],
            explicacion: "La lista de puntajes de soldadura está vacía."
        };
    }

    let minOriginal = puntajes[0];
    let maxOriginal = puntajes[0];

    // Encontrar mínimo y máximo actuales
    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i] < minOriginal) minOriginal = puntajes[i];
        if (puntajes[i] > maxOriginal) maxOriginal = puntajes[i];
    }

    let puntajesNormalizados = [];
    let denominador = maxOriginal - minOriginal;

    for (let i = 0; i < puntajes.length; i++) {
        let valor = puntajes[i];
        let normalizado = 0;

        if (denominador === 0) {
            normalizado = minRango; // Si todos son iguales, mapeamos al mínimo del nuevo rango
        } else {
            // Fórmula Min-Max Scaling: ((x - min) / (max - min)) * (maxRango - minRango) + minRango
            normalizado = ((valor - minOriginal) / denominador) * (maxRango - minRango) + minRango;
        }

        puntajesNormalizados.push(Number(normalizado.toFixed(2)));
    }

    return {
        puntajes_normalizados: puntajesNormalizados,
        explicacion: "Se normalizaron los puntajes de calidad de soldadura aplicando la escala Min-Max a un nuevo rango objetivo."
    };
}

// Casos de prueba
const pruebaNormal = normalizarPuntajesSoldadura([60, 75, 90, 100], 0, 1);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = normalizarPuntajesSoldadura([85], 0, 100);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
