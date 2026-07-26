/**
 * Ejercicio 095: Lógica matemática - Velocidad, tiempo y distancia (Dibujo digital)
 * Alumna: Yaneh Arias
 */

function calcularTiempoRenderizado(distanciaPixeles, velocidadProcesamiento) {
    if (distanciaPixeles < 0 || velocidadProcesamiento <= 0) {
        return {
            tiempo_estimado: 0,
            explicacion: "La distancia de píxeles no puede ser negativa y la velocidad de procesamiento debe ser mayor a cero."
        };
    }

    // Fórmula física: Tiempo = Distancia / Velocidad
    let tiempoEstimado = distanciaPixeles / velocidadProcesamiento;

    return {
        tiempo_estimado: Number(tiempoEstimado.toFixed(2)),
        explicacion: "Se calculó el tiempo estimado de renderizado del trazo de dibujo digital dividiendo la distancia en píxeles entre la velocidad del procesador."
    };
}

// Casos de prueba
const pruebaNormal = calcularTiempoRenderizado(1200, 150);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularTiempoRenderizado(0, 50);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
