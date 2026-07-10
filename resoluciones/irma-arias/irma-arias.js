
/**
 * Clasificador de estados de videojuegos
 * @param {Array} items - Lista de estados
 * @returns {Object} - Resultado con acción y motivo
 */
function clasificarTareas(items) {
    // 1. Validar si está vacío
    if (!items || items.length === 0) {
        return { accion: "ninguna", motivo: "lista vacía" };
    }

    // 2. Aplicar reglas de prioridad
    if (items.includes("bloqueado")) {
        return { 
            accion: "revisar bloqueado", 
            motivo: "la regla prioriza riesgos antes de tareas normales." 
        };
    }

    if (items.includes("pendiente")) {
        return { 
            accion: "revisar pendiente", 
            motivo: "no hay riesgos, se procede con tareas pendientes." 
        };
    }

    return { accion: "finalizar", motivo: "todos los items están aprobados." };
}

// --- Pruebas ---
console.log("Prueba 1 (Caso Borde - Bloqueado):", clasificarTareas(["aprobado", "bloqueado"]));
console.log("Prueba 2 (Caso Normal - Pendiente):", clasificarTareas(["aprobado", "pendiente"]));
console.log("Prueba 3 (Caso Vacío):", clasificarTareas([]));