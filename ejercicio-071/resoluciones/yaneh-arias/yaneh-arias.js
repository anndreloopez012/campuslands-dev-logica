/**
 * Ejercicio 071: Lógica matemática - Conteo combinatorio simple (Kickboxing)
 * Alumna: Yaneh Arias
 */

function calcularFactorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularCombinacionesKickboxing(opcionesGolpes, opcionesPatadas) {
    if (opcionesGolpes <= 0 || opcionesPatadas <= 0) {
        return {
            total_combinaciones: 0,
            explicacion: "Las opciones deben ser mayores a cero para realizar combinaciones."
        };
    }

    let totalCombinaciones = opcionesGolpes * opcionesPatadas;

    return {
        total_combinaciones: totalCombinaciones,
        explicacion: "Se aplicó el principio de multiplicación combinatorio básico entre los tipos de golpes y patadas."
    };
}

// Casos de prueba
const pruebaNormal = calcularCombinacionesKickboxing(4, 3);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularCombinacionesKickboxing(0, 5);
console.log("Prueba Borde:", pruebaBorde);
