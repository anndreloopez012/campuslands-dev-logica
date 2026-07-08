
/**
 * Ejercicio 015: Cálculo de trazado en dibujo digital
 * Autor: Yaneht Arias
 */

function calcularTrazado(velocidadPixelPorSegundo, tiempoSegundos) {
    // Regla: D = V * T
    const distanciaTotal = velocidadPixelPorSegundo * tiempoSegundos;

    return {
        velocidad: velocidadPixelPorSegundo,
        tiempo: tiempoSegundos,
        distanciaTotal: distanciaTotal,
        estado: distanciaTotal > 500 ? "Lienzo completo" : "Trazado parcial"
    };
}

// --- PRUEBAS ---
// Caso Normal: 50 px/s durante 10 segundos
console.log("Caso Normal:", calcularTrazado(50, 10));

// Caso Borde: 0 segundos de trazado
console.log("Caso Borde:", calcularTrazado(50, 0));