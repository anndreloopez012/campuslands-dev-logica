
/**
 * Ejercicio 013: Coordenadas y distancia en Paracaidismo
 * Autor: Yaneht Arias
 */

function calcularDistanciaAterrizaje(x1, y1, x2, y2) {
    // Fórmula de distancia euclidiana
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return {
        puntoOrigen: {x: x1, y: y1},
        puntoDestino: {x: x2, y: y2},
        distancia: distancia.toFixed(2),
        estado: distancia < 10 ? "aterrizaje preciso" : "fuera de zona"
    };
}

// --- PRUEBAS ---
// Caso Normal
console.log("Caso Normal:", calcularDistanciaAterrizaje(0, 0, 3, 4));

// Caso Borde: Mismo punto de origen y destino
console.log("Caso Borde:", calcularDistanciaAterrizaje(5, 5, 5, 5));