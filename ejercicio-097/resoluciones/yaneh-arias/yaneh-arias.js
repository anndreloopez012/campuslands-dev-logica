/**
 * Ejercicio 097: Lógica matemática - Estadísticas de ranking (Arquitectura 3D)
 * Alumna: Yaneh Arias
 */

function calcularEstadisticasRanking(puntajesDiseños) {
    if (!puntajesDiseños || puntajesDiseños.length === 0) {
        return {
            puntaje_maximo: 0,
            puntaje_minimo: 0,
            promedio: 0,
            explicacion: "La lista de puntajes de los diseños de arquitectura 3D está vacía."
        };
    }

    let max = puntajesDiseños[0];
    let min = puntajesDiseños[0];
    let suma = 0;

    for (let i = 0; i < puntajesDiseños.length; i++) {
        let nota = puntajesDiseños[i];
        if (nota > max) max = nota;
        if (nota < min) min = nota;
        suma += nota;
    }

    let promedio = suma / puntajesDiseños.length;

    return {
        puntaje_maximo: max,
        puntaje_minimo: min,
        promedio: Number(promedio.toFixed(2)),
        explicacion: "Se calcularon las estadísticas de ranking (máximo, mínimo y promedio) de los proyectos de arquitectura 3D evaluados."
    };
}

// Casos de prueba
const pruebaNormal = calcularEstadisticasRanking([85, 92, 78, 95, 88]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularEstadisticasRanking([90]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
