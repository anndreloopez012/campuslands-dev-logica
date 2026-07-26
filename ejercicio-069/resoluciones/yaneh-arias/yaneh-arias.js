/**
 * Ejercicio 069: Lógica matemática - Módulos y divisibilidad (Películas de miedo)
 * Alumna: Yaneh Arias
 */

function evaluarDivisibilidadPeliculas(minutos, divisor) {
    if (minutos === undefined || minutos === null || divisor === 0 || isNaN(minutos) || isNaN(divisor)) {
        return {
            es_divisible: false,
            residuo: null,
            explicacion: "Datos de entrada inválidos o división por cero."
        };
    }

    let residuo = minutos % divisor;
    let esDivisible = residuo === 0;

    return {
        es_divisible: esDivisible,
        residuo: residuo,
        explicacion: esDivisible ? "La duración es perfectamente divisible entre el intervalo de sustos." : "La duración deja un residuo al dividirla por el intervalo."
    };
}

// Casos de prueba
const pruebaNormal = evaluarDivisibilidadPeliculas(120, 15);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = evaluarDivisibilidadPeliculas(0, 10);
console.log("Prueba Borde:", pruebaBorde);
