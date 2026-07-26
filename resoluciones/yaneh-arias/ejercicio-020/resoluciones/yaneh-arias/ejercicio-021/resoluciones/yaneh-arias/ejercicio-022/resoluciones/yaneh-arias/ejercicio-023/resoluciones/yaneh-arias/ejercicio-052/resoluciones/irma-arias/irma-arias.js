// irma-arias.js - Ejercicio 052: Ping pong (Probabilidad básica)

// Función 1: Validar que los datos de entrada sean coherentes (casos favorables y casos totales)
function validarDatosProbabilidad(casosFavorables, casosTotales) {
    if (
        typeof casosFavorables !== 'number' || 
        typeof casosTotales !== 'number' ||
        casosTotales <= 0 ||
        casosFavorables < 0 ||
        casosFavorables > casosTotales
    ) {
        return false;
    }
    return true;
}

// Función 2: Calcular la probabilidad básica P(A) = Casos Favorables / Casos Totales
function calcularProbabilidadPingPong(datosJugador) {
    const { nombreJugador, saquesExitosos, totalSaquesIntentados } = datosJugador;

    if (!validarDatosProbabilidad(saquesExitosos, totalSaquesIntentados)) {
        return {
            estado: "Error",
            mensaje: "Datos inválidos. Los saques exitosos no pueden superar el total intentados y los totales deben ser mayores a cero."
        };
    }

    const probabilidadDecimal = saquesExitosos / totalSaquesIntentados;
    const probabilidadPorcentaje = Number((probabilidadDecimal * 100).toFixed(2));

    let evaluacionRendimiento = "Estándar";
    if (probabilidadPorcentaje >= 80) {
        evaluacionRendimiento = "Excelente - Alta efectividad en la mesa";
    } else if (probabilidadPorcentaje >= 50) {
        evaluacionRendimiento = "Regular - Margen de mejora";
    } else {
        evaluacionRendimiento = "Crítico - Necesita ajustes en la precisión";
    }

    return {
        estado: "Exitoso",
        jugador: nombreJugador,
        probabilidadDecimal: probabilidadDecimal,
        probabilidadPorcentaje: `${probabilidadPorcentaje}%`,
        evaluacion: evaluacionRendimiento,
        explicacion: `Se aplicó la regla de probabilidad básica dividiendo los saques exitosos entre el total de intentos en el partido de ping pong.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Jugador con estadísticas reales de saques en un torneo de ping pong
const jugadorNormal = {
    nombreJugador: "Irma Arias",
    saquesExitosos: 38,
    totalSaquesIntentados: 50
};

// Caso Borde: Jugador donde los saques exitosos superan los intentos o datos límite
const jugadorBorde = {
    nombreJugador: "Jugador Prueba Borde",
    saquesExitosos: 60,
    totalSaquesIntentados: 50
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(calcularProbabilidadPingPong(jugadorNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(calcularProbabilidadPingPong(jugadorBorde), null, 2));