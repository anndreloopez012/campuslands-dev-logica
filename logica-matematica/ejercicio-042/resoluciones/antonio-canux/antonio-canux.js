// Ejercicio 042 - Ranking Fútbol Sala

function calcularRendimientoFutsal(partidosJugados, partidosGanados, golesFavor, golesContra) {
    if (partidosJugados <= 0) {
        return { error: "El equipo debe haber jugado al menos un partido." };
    }

    const porcentajeVictorias = (partidosGanados / partidosJugados) * 100;

    const totalGoles = golesFavor + golesContra;
    let proporcionGoles = 0;
    if (totalGoles > 0) {
        proporcionGoles = (golesFavor / totalGoles) * 100;
    }

    const puntajeRanking = (porcentajeVictorias * 0.7) + (proporcionGoles * 0.3);

    const clasificacion = puntajeRanking >= 60 ? "Avanza a liguilla" : "Zona de eliminación";

    return {
        porcentaje_victorias: Math.round(porcentajeVictorias) + "%",
        proporcion_goles: Math.round(proporcionGoles) + "%",
        puntaje_final: parseFloat(puntajeRanking.toFixed(2)),
        estado: clasificacion
    };
}

// Pruebas

console.log("--- Caso Normal (Buen rendimiento) ---");
console.log(calcularRendimientoFutsal(10, 7, 35, 15));

console.log("\n--- Caso Borde (Pocas victorias, muchos goles recibidos) ---");
console.log(calcularRendimientoFutsal(5, 1, 10, 30));