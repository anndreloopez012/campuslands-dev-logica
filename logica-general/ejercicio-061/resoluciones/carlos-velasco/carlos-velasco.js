const clasificarJugador = (jugador) => {
    // Regla 1: Toxicidad (prioridad máxima)
    if (jugador.reportesToxicidad > 5) {
        return { categoria: "Suspendido", motivo: "Exceso de reportes por comportamiento tóxico." };
    }

    // Reglas de nivel según tasa de victorias
    if (jugador.tasaVictorias >= 70) {
        return { categoria: "Pro", motivo: "Excelente tasa de victorias." };
    } else if (jugador.tasaVictorias >= 40) {
        return { categoria: "Casual", motivo: "Tasa de victorias estándar." };
    } else {
        return { categoria: "Novato", motivo: "Jugador en etapa de aprendizaje." };
    }
};

console.log(clasificarJugador({ nombre: "PlayerOne", tasaVictorias: 85, reportesToxicidad: 1 })); 
console.log(clasificarJugador({ nombre: "ToxicoBoy", tasaVictorias: 90, reportesToxicidad: 10 })); 