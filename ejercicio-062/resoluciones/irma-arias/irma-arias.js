
function validarDatosRanking(equipo, puntos, golesFavor, golesContra, activo) {
    // Caso borde: Validación de datos vacíos, nulos o tipos incorrectos
    if (!equipo || typeof equipo !== "string" || equipo.trim() === "") {
        return {
            estado: "RECHAZADO",
            motivo: "El nombre del equipo no es válido o está vacío."
        };
    }

    if (typeof puntos !== "number" || puntos < 0 || typeof golesFavor !== "number" || golesFavor < 0 || typeof golesContra !== "number" || golesContra < 0) {
        return {
            estado: "RECHAZADO",
            motivo: "Los puntos y los goles deben ser valores numéricos mayores o iguales a cero."
        };
    }

    if (activo !== true && activo !== false) {
        return {
            estado: "RECHAZADO",
            motivo: "El estado de actividad del equipo debe ser verdadero o falso."
        };
    }

    // Regla de negocio / proceso normal
    const diferenciaGoles = golesFavor - golesContra;
    
    return {
        estado: "APROBADO",
        equipo: equipo.trim(),
        puntosTotales: puntos,
        diferenciaDeGoles: diferenciaGoles,
        motivo: "Los datos cumplen con todas las reglas de validación del ranking de fútbol sala."
    };
}

// --- CASOS DE PRUEBA ---

// 1. Caso Normal (Datos correctos de un equipo de fútbol sala)
console.log("=== CASO NORMAL ===");
const resultadoNormal = validarDatosRanking("Leones F.S.", 15, 20, 10, true);
console.log(resultadoNormal);

// 2. Caso Borde (Datos con valores negativos / inválidos)
console.log("\n=== CASO BORDE (Datos inválidos o vacíos) ===");
const resultadoBorde = validarDatosRanking("", -5, 12, "cinco", true);
console.log(resultadoBorde);

module.exports = { validarDatosRanking };