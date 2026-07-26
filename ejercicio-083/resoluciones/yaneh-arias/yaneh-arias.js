/**
 * Ejercicio 083: Lógica matemática - Promedios y medianas (Torneo de esports)
 * Alumna: Yaneh Arias
 */

function calcularEstadisticasEsports(puntajes) {
    if (!puntajes || puntajes.length === 0) {
        return {
            promedio: 0,
            mediana: 0,
            explicacion: "La lista de puntajes del torneo está vacía."
        };
    }

    let suma = 0;
    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
    }
    let promedio = suma / puntajes.length;

    // Ordenar para calcular la mediana
    let ordenados = [...puntajes].sort((a, b) => a - b);
    let mediana = 0;
    let mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
        mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
        mediana = ordenados[mitad];
    }

    return {
        promedio: Number(promedio.toFixed(2)),
        mediana: Number(mediana.toFixed(2)),
        explicacion: "Se calculó el promedio aritmético y la mediana estadística de los puntajes del torneo de esports."
    };
}

// Casos de prueba
const pruebaNormal = calcularEstadisticasEsports([45, 80, 20, 95, 60]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularEstadisticasEsports([]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
