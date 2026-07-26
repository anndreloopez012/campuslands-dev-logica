// irma-arias.js - Ejercicio 060: Comida urbana (Simulaciones con fórmulas)

// Función 1: Validar que los datos de entrada para la simulación sean correctos y coherentes
function validarParametrosSimulacion(datosPedido) {
    if (!datosPedido || typeof datosPedido !== 'object') return false;
    const { porciones, distanciaKm, factorCongestion } = datosPedido;

    if (
        typeof porciones !== 'number' || porciones <= 0 ||
        typeof distanciaKm !== 'number' || distanciaKm < 0 ||
        typeof factorCongestion !== 'number' || factorCongestion < 1
    ) {
        return false;
    }
    return true;
}

// Función 2: Ejecutar la simulación matemática de costos y tiempos de entrega
function simularPedidoComidaUrbana(datosPedido) {
    if (!validarParametrosSimulacion(datosPedido)) {
        return {
            estado: "Error",
            mensaje: "Parámetros de simulación inválidos. Las porciones deben ser mayores a cero, la distancia no negativa y el factor de congestión mayor o igual a 1."
        };
    }

    const { nombrePlatillo, porciones, distanciaKm, factorCongestion } = datosPedido;

    // Reglas de simulación con fórmulas:
    // 1. Costo base de producción por porción: $7.50 USD + costo operativo fijo de $3.00
    const costoBaseProduccion = (porciones * 7.50) + 3.00;

    // 2. Tiempo estimado de entrega (minutos) = (Tiempo base en cocina de 15 min) + (Distancia * 4 min/km * factor de congestión urbana)
    const tiempoCocinaMin = 15;
    const tiempoTrasladoMin = distanciaKm * 4 * factorCongestion;
    const tiempoTotalEntregaMin = tiempoCocinaMin + tiempoTrasladoMin;

    // 3. Clasificación del tiempo de entrega según la simulación
    let clasificacionServicio = "Estándar";
    if (tiempoTotalEntregaMin <= 30) {
        clasificacionServicio = "Entrega Express (Alta eficiencia urbana)";
    } else if (tiempoTotalEntregaMin <= 60) {
        clasificacionServicio = "Entrega Regular (Tiempo de ruta normal)";
    } else {
        clasificacionServicio = "Entrega Demorada (Ruta crítica o alta congestión)";
    }

    return {
        estado: "Exitoso",
        platilloUrbano: nombrePlatillo,
        parametrosSimulacion: {
            cantidadPorciones: porciones,
            distanciaRutaKm: distanciaKm,
            nivelCongestion: factorCongestion
        },
        resultadosCalculados: {
            costoTotalProduccionUSD: Number(costoBaseProduccion.toFixed(2)),
            tiempoEstimadoEntregaMinutos: Number(tiempoTotalEntregaMin.toFixed(2)),
            clasificacionRuta: clasificacionServicio
        },
        explicacion: "Se aplicaron fórmulas de simulación matemática combinando costos operativos de cocina y tiempos de traslado afectados por la congestión urbana."
    };
}

// --- Casos de prueba ---
// Caso Normal: Pedido de 4 hamburguesas artesanales urbanas a 3.5 km con un factor de congestión moderado (1.2)
const pruebaNormal = {
    nombrePlatillo: "Burgers Urbanas Dobles con Papas",
    porciones: 4,
    distanciaKm: 3.5,
    factorCongestion: 1.2
};

// Caso Borde: Distancia de cero kilómetros (reparto local inmediato) y porciones mínimas para verificar límites
const pruebaBorde = {
    nombrePlatillo: "Tacos Callejeros Express",
    porciones: 1,
    distanciaKm: 0,
    factorCongestion: 1.0
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(simularPedidoComidaUrbana(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(simularPedidoComidaUrbana(pruebaBorde), null, 2));