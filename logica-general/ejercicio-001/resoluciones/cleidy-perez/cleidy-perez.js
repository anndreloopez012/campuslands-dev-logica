const entrada = { items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta" };

function clasificacionDePrioridades(datos) {
    // 1. Validación de caso borde (si datos es undefined o no tiene items)
    if (!datos?.items?.length) {
        return { accion: "Ninguna", motivo: "No hay items para clasificar" };
    }

    const { items, prioridad } = datos;

    // 2. Aplicación de reglas de negocio
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return { accion: "Revisar", motivo: "Hay items bloqueados con prioridad alta" };
    }
    
    // Corregido: "pendiente" en lugar de "pendientes" para que coincida con el array
    if (items.includes("pendiente")) {
        return { accion: "Revisar pendientes", motivo: "Hay items pendientes" };
    }

    return { accion: "Revisar aprobados", motivo: "Hay items aprobados" };
}

// Pruebas
console.log(clasificacionDePrioridades(entrada)); // Caso Normal
console.log(clasificacionDePrioridades());        // Caso Borde (Vacío)