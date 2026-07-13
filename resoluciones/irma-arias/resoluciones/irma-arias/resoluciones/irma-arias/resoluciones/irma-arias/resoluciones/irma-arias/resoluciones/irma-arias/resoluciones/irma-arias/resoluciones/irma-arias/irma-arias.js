
/**
 * Procesa instrucciones de viaje basándose en el nivel de urgencia
 * @param {Array} servicios - Lista de servicios solicitados
 * @param {String} urgencia - Nivel de urgencia
 */
function procesarViaje(servicios, urgencia) {
    if (!servicios || servicios.length === 0) {
        return { accion: "error", motivo: "no hay servicios en la lista." };
    }

    let accionPrioritaria = "";

    // Reglas de prioridad
    if (urgencia === "alta") {
        accionPrioritaria = "seguro";
    } else if (urgencia === "media") {
        accionPrioritaria = "vuelo";
    } else {
        accionPrioritaria = "hotel";
    }

    // Verificar si el servicio prioritario está en la lista
    if (servicios.includes(accionPrioritaria)) {
        return {
            accion: `gestionar ${accionPrioritaria}`,
            motivo: `urgencia ${urgencia} requiere atención inmediata a ${accionPrioritaria}.`
        };
    } else {
        return {
            accion: `gestionar ${servicios[0]}`,
            motivo: `servicio prioritario no encontrado, se inicia con el primero disponible.`
        };
    }
}

// --- Pruebas ---
console.log(procesarViaje(["vuelo", "hotel"], "alta"));
// Salida: { accion: 'gestionar seguro', motivo: '...' } (o el primero de la lista si no está el seguro)