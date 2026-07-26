/**
 * Ejercicio 077: Lógica matemática - Estadísticas de ranking (Arquitectura 3D)
 * Alumna: Yaneh Arias
 */

function calcularEstadisticasRanking(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return {
            promedio: 0,
            maximo: 0,
            minimo: 0,
            explicacion: "La lista de puntajes del ranking está vacía."
        };
    }

    let suma = 0;
    let maximo = puntajes[0];
    let minimo = puntajes[0];

    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
        if (puntajes[i] > maximo) maximo = puntajes[i];
        if (puntajes[i] < minimo) minimo = puntajes[i];
    }

    let promedio = suma / puntajes.length;

    return {
        promedio: Number(promedio.toFixed(2)),
        maximo: maximo,
        minimo: minimo,
        explicacion: "Se calcularon las estadísticas generales del ranking de arquitectura 3D obteniendo el promedio, el puntaje máximo y mínimo."
    };
}

// Casos de prueba
const pruebaNormal = calcularEstadisticasRanking([85, 92, 78, 95, 88]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularEstadisticasRanking([]);
console.log("Prueba Borde:", pruebaBorde);
