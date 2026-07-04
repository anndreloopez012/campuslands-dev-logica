
function procesarVideojuego(items, prioridad) {
    // Caso borde: lista vacía
    if (!items || items.length === 0) {
        return { accion: "esperar", motivo: "no hay datos de entrada" };
    }

    // Reglas de negocio
    if (items.includes("bloqueado")) {
        return {
            accion: "revisar bloqueado",
            motivo: "la regla prioriza riesgos antes de tareas normales."
        };
    }

    if (items.includes("aprobado") && prioridad === "alta") {
        return {
            accion: "publicar inmediato",
            motivo: "prioridad alta con aprobación confirmada."
        };
    }

    return { accion: "continuar flujo normal", motivo: "sin bloqueos ni urgencias." };
}

// Pruebas
console.log(procesarVideojuego(["aprobado", "pendiente", "bloqueado"], "alta"));
console.log(procesarVideojuego([], "baja")); // Caso borde