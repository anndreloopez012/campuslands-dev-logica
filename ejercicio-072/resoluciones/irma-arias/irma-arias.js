
// Función 1: Validar que la lista de jugadores a comparar no esté vacía
function validarOpciones(jugadores) {
    if (!jugadores || !Array.isArray(jugadores) || jugadores.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Evaluar y comparar dos opciones de jugadores según efectividad
function compararDosJugadores(jugadorA, jugadorB) {
    const efectividadA = jugadorA.partidosGanados / (jugadorA.partidosJugados || 1);
    const efectividadB = jugadorB.partidosGanados / (jugadorB.partidosJugados || 1);

    if (efectividadA > efectividadB) {
        return jugadorA;
    } else if (efectividadB > efectividadA) {
        return jugadorB;
    } else {
        // En caso de empate en efectividad, se compara por menor cantidad de errores no forzados
        return jugadorA.erroresNoForzados <= jugadorB.erroresNoForzados ? jugadorA : jugadorB;
    }
}

// Función principal que coordina la comparación de múltiples opciones
function seleccionarMejorOpcionPingPong(jugadores) {
    if (!validarOpciones(jugadores)) {
        return {
            estado: "Error",
            mensaje: "La lista de opciones de jugadores está vacía o no es válida."
        };
    }

    let mejorOpcion = jugadores[0];

    for (let i = 1; i < jugadores.length; i++) {
        mejorOpcion = compararDosJugadores(mejorOpcion, jugadores[i]);
    }

    return {
        accion: "Comparación de opciones y selección óptima en ping pong",
        totalOpcionesEvaluadas: jugadores.length,
        opcionRecomendada: mejorOpcion
    };
}

// --- Casos de prueba ---
const opcionesJugadoresNormal = [
    { nombre: "Liu Shiwen", partidosJugados: 20, partidosGanados: 16, erroresNoForzados: 12 },
    { nombre: "Ma Long", partidosJugados: 25, partidosGanados: 22, erroresNoForzados: 8 },
    { nombre: "Fan Zhendong", partidosJugados: 25, partidosGanados: 22, erroresNoForzados: 10 } // Mismas victorias que Ma Long pero más errores
];

const opcionesJugadoresBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(seleccionarMejorOpcionPingPong(opcionesJugadoresNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(seleccionarMejorOpcionPingPong(opcionesJugadoresBorde), null, 2));