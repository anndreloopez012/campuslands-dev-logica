function clasificarJugador(jugadores, rango) {
    return jugadores.map(j => {
        if (j.win_rate > 70) {
            return { nombre: j.nombre, accion: "ascender", motivo: "supera el 70%" };
        } else if (j.win_rate < 30 && rango !== "bronce") {
            return { nombre: j.nombre, accion: "descender", motivo: "menos del 30%" };
        } else {
            return { nombre: j.nombre, accion: "mantener rango", motivo: "rendimiento estable" };
        }
    });
}