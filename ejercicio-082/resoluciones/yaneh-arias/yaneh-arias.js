/**
 * Ejercicio 082: Lógica matemática - Porcentajes y proporciones (Ranking de fútbol sala)
 * Alumna: Yaneh Arias
 */

function calcularProporcionFutsal(partidosJugados, partidosGanados) {
    if (partidosJugados <= 0 || partidosGanados < 0 || partidosGanados > partidosJugados) {
        return {
            porcentaje_victorias: "0%",
            proporcion: 0,
            explicacion: "Los datos de partidos ingresados no son válidos para calcular proporciones."
        };
    }

    let proporcion = partidosGanados / partidosJugados;
    let porcentaje = (proporcion * 100).toFixed(2) + "%";

    return {
        porcentaje_victorias: porcentaje,
        proporcion: Number(proporcion.toFixed(4)),
        explicacion: "Se calculó el porcentaje de victorias y la proporción dividiendo los partidos ganados entre los partidos jugados en el torneo de fútbol sala."
    };
}

// Casos de prueba
const pruebaNormal = calcularProporcionFutsal(20, 15);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularProporcionFutsal(0, 0);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
