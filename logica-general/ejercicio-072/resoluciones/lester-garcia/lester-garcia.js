const partido = {
    jugadorA: {
        nombre: "Carlos",
        puntos: 11
    },
    jugadorB: {
        nombre: "Luis",
        puntos: 8
    }
};

let ganador = "";
let motivo = "";

if (partido.jugadorA.puntos > partido.jugadorB.puntos) {
    ganador = partido.jugadorA.nombre;
    motivo = "Obtuvo una mayor cantidad de puntos.";
} else if (partido.jugadorB.puntos > partido.jugadorA.puntos) {
    ganador = partido.jugadorB.nombre;
    motivo = "Obtuvo una mayor cantidad de puntos.";
} else {
    ganador = "Empate";
    motivo = "Ambos jugadores consiguieron la misma cantidad de puntos.";
}

console.log("ganador:", ganador);
console.log("motivo:", motivo);