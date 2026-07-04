const entrada = { items: ["aprobado", "pendiente", "bloqueado"], prioridad: "alta" };
const entradaVacio = { items: [], prioridad: "baja" };
const entradaPendientes = { items: ["aprobado", "pendiente"], prioridad: "media" };

function clasificacionDePrioridad(datos) {
    // 1. Validación de entrada (Segura y corregida)
    if (!datos?.items || datos.items.length === 0) {
        return { accion: "ninguna", motivo: "no hay items" };
    }

    const { items, prioridad } = datos;

    // 2. Regla: Alta prioridad con elementos bloqueados
    if (prioridad === "alta" && items.includes("bloqueado")) {
        return { accion: "revisar el bloqueo", motivo: "Debido a que se deben evitar riesgos" };
    }

    // 3. Regla: Contiene elementos pendientes (corregido "pendiente" en singular como tus objetos)
    if (items.includes("pendiente")) {
        return { accion: "revisar el pendiente", motivo: "Se atienden las tareas en espera" };
    }

    // 4. Caso por defecto
    return { accion: "monitorear", motivo: "todos los elementos están aprobados" };
}

console.log(clasificacionDePrioridad(entrada));
console.log(clasificacionDePrioridad(entradaVacio));
console.log(clasificacionDePrioridad(entradaPendientes));