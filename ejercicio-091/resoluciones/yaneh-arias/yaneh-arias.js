/**
 * Ejercicio 091: Lógica matemática - Conteo combinatorio simple (Kickboxing)
 * Alumna: Yaneh Arias
 */

function calcularCombinacionesCombate(golpes, patadas) {
    if (golpes <= 0 || patadas <= 0) {
        return {
            total_combinaciones: 0,
            explicacion: "Las cantidades de golpes y patadas deben ser mayores a cero para realizar el conteo combinatorio."
        };
    }

    let totalCombinaciones = golpes * patadas;

    return {
        total_combinaciones: totalCombinaciones,
        explicacion: "Se aplicó el principio fundamental del conteo multiplicando la cantidad de técnicas de puño por la cantidad de patadas disponibles en el entrenamiento de kickboxing."
    };
}

// Casos de prueba
const pruebaNormal = calcularCombinacionesCombate(4, 3);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularCombinacionesCombate(0, 5);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
