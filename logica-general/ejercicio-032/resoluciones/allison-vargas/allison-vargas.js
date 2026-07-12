// Función principal para evaluar las opciones según las reglas del reto
function compararOpciones(items, prioridad, regla) {
    // Caso borde: Si no hay elementos en la lista
    if (!items || items.length === 0) {
        return {
            accion: "sin accion inmediata",
            motivo: "no se encontraron elementos registrados en la lista para evaluar."
        };
    }

    // Caso normal: Buscar si existe algún elemento bloqueado
    if (regla === "revisar bloqueados primero" && items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    // Flujo por defecto si hay elementos pero no cumplen la regla específica
    return {
        accion: "revisar tareas normales",
        motivo: "no se detectaron bloqueos críticos en la lista analizada."
    };
}

// ==========================================
// PRUEBAS DE VERIFICACIÓN
// ==========================================

// Ejecución Caso Normal
console.log("--- Caso Normal ---");
const resultadoNormal = compararOpciones(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero");
console.log(resultadoNormal);

// Ejecución Caso Borde
console.log("\n--- Caso Borde ---");
const resultadoBorde = compararOpciones([], "baja", "revisar bloqueados primero");
console.log(resultadoBorde);