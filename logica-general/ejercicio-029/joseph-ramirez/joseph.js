const simularEstadosTerror = (items, prioridad, regla) => {
    if (!items?.length || !prioridad || !regla) {
        return { accion: "detener edicion", motivo: "Error: Metadatos de simulación o lista de estados cinematográficos incompletos." };
    }

    const reglaMin = regla.toLowerCase();

    const esBloqueado = reglaMin.includes("bloqueado") && items.includes("bloqueado");
    const esPendienteUrgente = prioridad === "alta" && items.includes("pendiente");

    return {
        accion: esBloqueado ? "revisar bloqueado" : esPendienteUrgente ? "atender pendiente urgente" : "procesar escena",
        motivo: esBloqueado ? "la regla prioriza riesgos antes de tareas normales." : esPendienteUrgente ? "prioridad alta detectada en cola de espera competitiva." : "la toma de metraje cumple con las condiciones para el corte final."
    };
};

console.log("--- Prueba 1: Caso del Ejemplo ---");
console.log(simularEstadosTerror(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log("\n--- Prueba 2: Caso Borde (Colecciones vacías o inválidas) ---");
console.log(simularEstadosTerror(null, "baja", ""));

console.log("\n--- Prueba 3: Caso Propio (Efecto de Sonido Sincronizado para Escena Nocturna) ---");
console.log(simularEstadosTerror(["aprobado", "aprobado"], "media", "verificar ecualizacion de audio"));