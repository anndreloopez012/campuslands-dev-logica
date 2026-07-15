
/**
 * Lógica para resolver el ejercicio 043 de Esports
 */
function procesarTorneo(items, prioridad) {
    // Validación de entradas
    if (!Array.isArray(items) || items.length === 0) {
        return { accion: "esperando datos", motivo: "la lista de items está vacía" };
    }

    // Análisis de estados
    const hayBloqueados = items.includes("bloqueado");
    const hayPendientes = items.includes("pendiente");

    // Lógica de decisión
    if (hayBloqueados) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }
    
    if (prioridad === "alta" && hayPendientes) {
        return {
            accion: "gestionar pendiente",
            motivo: "la prioridad alta exige procesar tareas pendientes."
        };
    }

    return {
        accion: "revisar aprobados",
        motivo: "no hay riesgos ni pendientes urgentes, el torneo fluye."
    };
}

// Pruebas
console.log("Caso prueba 1 (Normal):", procesarTorneo(["aprobado", "pendiente", "bloqueado"], "alta"));
console.log("Caso prueba 2 (Borde - Vacío):", procesarTorneo([], "normal"));