const clasificarJugadoresCompetitivos = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "suspender cola", motivo: "Error: Datos de la sala o metadatos de regla incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "iniciar partida",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la sala de juego cumple con todas las reglas competitivas y está despejada."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(clasificarJugadoresCompetitivos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones nulas o strings vacíos) ---");
console.log(clasificarJugadoresCompetitivos(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Lobby competitivo limpio para torneo) ---");
console.log(clasificarJugadoresCompetitivos(["aprobado", "aprobado"], "alta", "verificar smurfs"));