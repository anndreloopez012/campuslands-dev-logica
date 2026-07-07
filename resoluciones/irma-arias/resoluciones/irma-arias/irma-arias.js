
/**
 * Sistema de diagnóstico de tatuajes
 */

function diagnosticarTatuaje(items) {
    // 1. Validar si está bloqueado (Prioridad alta)
    if (items.includes("bloqueado")) {
        return {
            accion: "Detener",
            motivo: "Se detectó un elemento bloqueado. No se puede proceder con seguridad."
        };
    }

    // 2. Validar si hay pendientes
    if (items.includes("pendiente")) {
        return {
            accion: "Revisar",
            motivo: "Hay elementos pendientes que requieren validación antes de tatuar."
        };
    }

    // 3. Caso todo aprobado
    return {
        accion: "Proceder",
        motivo: "Todos los elementos están validados y listos para la sesión."
    };
}

// --- PRUEBAS ---

// Caso 1: Normal (Todos aprobados)
const casoNormal = ["aprobado", "aprobado", "aprobado"];
console.log("Caso Normal:", diagnosticarTatuaje(casoNormal));

// Caso 2: Borde (Bloqueado)
const casoBorde = ["aprobado", "bloqueado", "pendiente"];
console.log("Caso Borde:", diagnosticarTatuaje(casoBorde));