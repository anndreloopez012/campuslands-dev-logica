/**
 * Ejercicio 093: Lógica matemática - Coordenadas y distancia (Paracaidismo)
 * Alumna: Yaneh Arias
 */

function calcularDistanciaAterrizaje(puntoSalida, puntoAterrizaje) {
    if (!puntoSalida || !puntoAterrizaje || puntoSalida.length !== 2 || puntoAterrizaje.length !== 2) {
        return {
            distancia: 0,
            explicacion: "Las coordenadas de salida o aterrizaje no son válidas."
        };
    }

    let x1 = puntoSalida[0];
    let y1 = puntoSalida[1];
    let x2 = puntoAterrizaje[0];
    let y2 = puntoAterrizaje[1];

    // Aplicamos la fórmula de distancia euclidiana: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let distancia = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    return {
        distancia: Number(distancia.toFixed(2)),
        explicacion: "Se calculó la distancia euclidiana entre las coordenadas de salto y el punto objetivo de aterrizaje para el paracaidista."
    };
}

// Casos de prueba
const pruebaNormal = calcularDistanciaAterrizaje([0, 0], [3, 4]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularDistanciaAterrizaje([5, 5], [5, 5]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
