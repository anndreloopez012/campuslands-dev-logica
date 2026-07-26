/**
 * Ejercicio 073: Lógica matemática - Coordenadas y distancia (Paracaidismo)
 * Alumna: Yaneh Arias
 */

function calcularDistanciaParacaidismo(puntoA, puntoB) {
    if (!puntoA || !puntoB || puntoA.length !== 2 || puntoB.length !== 2) {
        return {
            distancia: 0,
            explicacion: "Las coordenadas de entrada no son válidas."
        };
    }

    let x1 = puntoA[0], y1 = puntoA[1];
    let x2 = puntoB[0], y2 = puntoB[1];

    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let distancia = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

    return {
        distancia: Number(distancia.toFixed(2)),
        explicacion: "Se aplicó la fórmula de distancia euclidiana entre dos puntos de aterrizaje para el paracaidismo."
    };
}

// Casos de prueba
const pruebaNormal = calcularDistanciaParacaidismo([0, 0], [3, 4]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularDistanciaParacaidismo([1, 1], [1, 1]);
console.log("Prueba Borde:", pruebaBorde);
