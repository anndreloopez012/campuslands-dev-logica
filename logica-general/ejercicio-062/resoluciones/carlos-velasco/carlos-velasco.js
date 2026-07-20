const validarEquipo = (equipo) => {
    const { partidosJugados, partidosGanados, partidosEmpatados, golesFavor, golesContra } = equipo;

    // Regla: Goles negativos
    if (golesFavor < 0 || golesContra < 0) {
        return { valido: false, mensaje: "Los goles no pueden ser negativos." };
    }

    // Regla: Partidos ganados + empatados no superan jugados
    if ((partidosGanados + partidosEmpatados) > partidosJugados) {
        return { valido: false, mensaje: "La suma de resultados excede los partidos jugados." };
    }

    return { valido: true, mensaje: "Registro de equipo validado correctamente." };
};

// Pruebas
console.log(validarEquipo({ nombre: "Los Galácticos", partidosJugados: 5, partidosGanados: 3, partidosEmpatados: 1, golesFavor: 10, golesContra: 2 }));
console.log(validarEquipo({ nombre: "Equipo Fantasma", partidosJugados: 2, partidosGanados: 5, partidosEmpatados: 0, golesFavor: 5, golesContra: 0 }));