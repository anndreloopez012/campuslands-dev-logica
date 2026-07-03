//Ejercicio 003 - Torneo de Esports

function evaluarEstadoJugador(estado, prioridadTorneo) {
    let accion = "";
    let motivo = "";

    if (estado === "bloqueado") {
        accion = "revisar bloqueado";
        motivo = "la regla prioriza riesgos antes de tareas normales.";
    } 
    else if (estado === "pendiente" && prioridadTorneo === "alta") {
        accion = "revision urgente";
        motivo = "el torneo tiene prioridad alta, requiere validación inmediata.";
    } 
    else if (estado === "pendiente" && prioridadTorneo === "normal") {
        accion = "en espera";
        motivo = "se procesará cuando se libere la cola de alta prioridad.";
    } 
    else if (estado === "aprobado") {
        accion = "permitir ingreso";
        motivo = "el jugador cumple con todos los requisitos del torneo.";
    } 
    else {
        accion = "estado desconocido";
        motivo = "los datos ingresados no coinciden con los estados permitidos.";
    }

    return { accion, motivo };
}

// PRUEBAS

console.log("--- Prueba: Caso Ejemplo ---");
console.log(evaluarEstadoJugador("bloqueado", "alta"));

console.log("\n--- Prueba: Caso Normal ---");
console.log(evaluarEstadoJugador("aprobado", "normal"));

console.log("\n--- Prueba: Caso Borde ---");
console.log(evaluarEstadoJugador("pendiente", "alta"));