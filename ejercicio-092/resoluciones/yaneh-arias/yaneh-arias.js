/**
 * Ejercicio 092: Lógica matemática - Probabilidad básica (Ping pong)
 * Alumna: Yaneh Arias
 */

function calcularProbabilidadPingPong(casosExitosos, casosTotales) {
    if (casosTotales <= 0 || casosExitosos < 0 || casosExitosos > casosTotales) {
        return {
            probabilidad_porcentaje: "0%",
            probabilidad_decimal: 0,
            explicacion: "Los datos ingresados no son válidos para calcular la probabilidad básica."
        };
    }

    let probabilidadDecimal = casosExitosos / casosTotales;
    let probabilidadPorcentaje = (probabilidadDecimal * 100).toFixed(2) + "%";

    return {
        probabilidad_porcentaje: probabilidadPorcentaje,
        probabilidad_decimal: Number(probabilidadDecimal.toFixed(4)),
        explicacion: "Se calculó la probabilidad dividiendo los casos favorables (puntos ganados) entre los casos totales (jugadas evaluadas) en el partido de ping pong."
    };
}

// Casos de prueba
const pruebaNormal = calcularProbabilidadPingPong(14, 20);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularProbabilidadPingPong(0, 0);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
