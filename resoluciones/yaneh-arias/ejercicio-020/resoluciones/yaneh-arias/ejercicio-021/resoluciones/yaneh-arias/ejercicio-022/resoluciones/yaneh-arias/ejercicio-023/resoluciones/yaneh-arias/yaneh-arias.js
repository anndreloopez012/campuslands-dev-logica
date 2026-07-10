
/**
 * Ejercicio 023: Promedios y Medianas - Esports
 */

function calcularDesempenoEsports(puntajes, bono, penalizacion) {
    if (!puntajes || puntajes.length === 0) return "Datos vacíos";

    // 1. Ordenar para calcular la mediana
    let ordenados = [...puntajes].sort((a, b) => a - b);
    let n = ordenados.length;
    let mediana = (n % 2 !== 0) 
        ? ordenados[Math.floor(n / 2)] 
        : (ordenados[n / 2 - 1] + ordenados[n / 2]) / 2;

    // 2. Calcular promedio
    let suma = puntajes.reduce((acc, val) => acc + val, 0);
    let promedio = suma / n;

    // 3. Regla de negocio: Usar la mediana si el promedio es muy distinto (ejemplo de control)
    // En este caso, usaremos la mediana como base del puntaje final
    let puntajeFinal = Math.round(mediana + bono - penalizacion);

    let clasificacion = puntajeFinal >= 25 ? "Pro" : "Amateur";

    return {
        promedio: promedio.toFixed(2),
        mediana: mediana,
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion
    };
}

// Pruebas
console.log(calcularDesempenoEsports([12, 18, 25, 30, 100], 8, 3)); // El 100 es un outlier
console.log(calcularDesempenoEsports([10, 10, 10], 2, 1));          // Caso borde: todos iguales