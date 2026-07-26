/**
 * Ejercicio 089: Lógica matemática - Módulos y divisibilidad (Películas de miedo)
 * Alumna: Yaneh Arias
 */

function evaluarDivisibilidadEscenas(minutosTrama, intervaloClave) {
    if (intervaloClave <= 0 || minutosTrama < 0) {
        return {
            es_divisible: false,
            residuo: null,
            explicacion: "Los valores ingresados no son válidos para calcular la divisibilidad."
        };
    }

    let residuo = minutosTrama % intervaloClave;
    let esDivisible = residuo === 0;

    return {
        es_divisible: esDivisible,
        residuo: residuo,
        explicacion: esDivisible 
            ? "El minuto de la película de miedo es exactamente divisible por el intervalo clave de la escena de tensión." 
            : "El minuto de la película no es divisible por el intervalo clave; hay un desfase representado por el residuo."
    };
}

// Casos de prueba
const pruebaNormal = evaluarDivisibilidadEscenas(45, 5);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = evaluarDivisibilidadEscenas(47, 5);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
