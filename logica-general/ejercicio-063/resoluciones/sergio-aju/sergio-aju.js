function gestionarPartida(partida) {
    if (partida.estado_servidor === "crítico") {
        return { accion: "cancelar", motivo: "servidor en estado crítico, seguridad comprometida" };
    }
    
    if (partida.estado_servidor === "inestable") {
        if (partida.jugadores_conectados < 5) {
            return { accion: "pausar", motivo: "servidor inestable y pocos jugadores" };
        }
        return { accion: "continuar", motivo: "servidor inestable pero con quórum suficiente para jugar" };
    }
    
    return { accion: "continuar", motivo: "servidor estable" };
}