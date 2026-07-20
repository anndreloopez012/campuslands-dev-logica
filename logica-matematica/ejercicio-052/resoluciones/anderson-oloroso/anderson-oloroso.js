function calcularProbabilidadVictorias(partidos) {
    let victorias = 0;
    let totalPartidos = partidos.length;

    for (let i = 0; i < partidos.length; i++) {
        if (partidos[i].resultado === "Victoria") {
            victorias++;
        }
    }

    const probabilidad = victorias / totalPartidos;

    return {
        victorias,
        totalPartidos,
        probabilidad: (probabilidad * 100).toFixed(2) + "%"
    };
}

// Ejemplo
const historial = [
    { resultado: "Victoria" },
    { resultado: "Derrota" },
    { resultado: "Victoria" },
    { resultado: "Victoria" },
    { resultado: "Derrota" }
];

console.log(calcularProbabilidadVictorias(historial));