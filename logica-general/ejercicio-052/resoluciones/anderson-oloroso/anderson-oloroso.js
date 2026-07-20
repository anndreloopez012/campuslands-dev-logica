function compararJugadores(jugador1, jugador2) {
    let ganador;

    if (jugador1.puntos > jugador2.puntos) {
        ganador = jugador1.nombre;
    } else if (jugador2.puntos > jugador1.puntos) {
        ganador = jugador2.nombre;
    } else {
        ganador = "Empate";
    }

    console.log("Jugador 1:", jugador1);
    console.log("Jugador 2:", jugador2);
    console.log("Resultado:", ganador);
}

// Ejemplo
const jugadorA = {
    nombre: "Laura",
    puntos: 11
};

const jugadorB = {
    nombre: "Carlos",
    puntos: 9
};

compararJugadores(jugadorA, jugadorB);