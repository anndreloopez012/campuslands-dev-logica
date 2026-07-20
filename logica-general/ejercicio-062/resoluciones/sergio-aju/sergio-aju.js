function validarJugadores(jugadores, reglas) {
    const aptos = jugadores
        .filter(j => j.edad >= reglas.edad_minima && j.goles >= reglas.goles_minimos)
        .map(j => j.nombre);
        
    return {
        jugadores_aptos: aptos,
        estado: aptos.length > 0 ? "validación completada" : "ningún jugador apto encontrado"
    };
}