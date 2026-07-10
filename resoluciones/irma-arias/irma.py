/**
 * Lógica General 022: Validación de datos para Ranking de fútbol sala
 * Autor: Tu Nombre
 */

function validarEquipo(equipo) {
    // 1. Validar existencia de datos
    if (!equipo.nombre || equipo.puntos === undefined || equipo.partidos === undefined) {
        return { estado: "Error", mensaje: "Datos incompletos." };
    }

    // 2. Validar rangos (Lógica de fútbol sala)
    if (equipo.puntos < 0) {
        return { estado: "Error", mensaje: "Los puntos no pueden ser negativos." };
    }

    // 3. Validar consistencia (Ejemplo: máximo 3 puntos por partido)
    if (equipo.puntos > (equipo.partidos * 3)) {
        return { estado: "Error", mensaje: "Puntuación imposible según partidos jugados." };
    }

    return { estado: "Validado", mensaje: "Equipo listo para el ranking." };
}

// --- PRUEBAS ---
// Caso Normal
const equipoNormal = { nombre: "Lobos FC", puntos: 9, partidos: 4 };
console.log("Caso Normal:", validarEquipo(equipoNormal));

// Caso Borde (Puntos imposibles)
const equipoInvalido = { nombre: "Tigres", puntos: 20, partidos: 3 };
console.log("Caso Borde:", validarEquipo(equipoInvalido));