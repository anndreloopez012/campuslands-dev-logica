function evaluarTorneo(participantes) {
    // Validar si la lista está vacía (Caso borde)
    if (!participantes || participantes.length === 0) {
        return "Error: No hay datos de participantes para evaluar.";
    }

    // Aplicar reglas: ordenar por mayor puntaje, y en caso de empate, por menor penalización
    participantes.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos; // Mayor puntaje primero
        }
        return a.penalizaciones - b.penalizaciones; // Menor penalización en empate
    });

    const ganador = participantes[0];

    return {
        accion: "Seleccionar ganador oficial del torneo",
        ganador: ganador.nombre,
        motivo: `El equipo lidera con ${ganador.puntos} puntos y presenta ${ganador.penalizaciones} penalizaciones.`
    };
}

// --- Casos de prueba ---
const casoNormal = [
    { nombre: "CyberTitans", puntos: 20, penalizaciones: 2 },
    { nombre: "NexusGamers", puntos: 25, penalizaciones: 1 },
    { nombre: "ByteForce", puntos: 25, penalizaciones: 0 } // Empate en puntos, gana por cero penalizaciones
];

const casoBorde = []; // Lista vacía

console.log("--- CASO NORMAL ---");
console.log(evaluarTorneo(casoNormal));

console.log("--- CASO BORDE ---");
console.log(evaluarTorneo(casoBorde));