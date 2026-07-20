function gestionarPasajeros(pasajeros, instruccion) {
    if (instruccion === "priorizar confirmados") {
        const organizados = [...pasajeros].sort((a, b) => 
            (b.estatus === "confirmado") - (a.estatus === "confirmado")
        );
        return { pasajeros_organizados: organizados, accion_ejecutada: "reordenamiento por estatus de confirmación" };
    } 
    
    if (instruccion === "filtrar cancelados") {
        const filtrados = pasajeros.filter(p => p.estatus !== "cancelado");
        return { pasajeros_organizados: filtrados, accion_ejecutada: "filtrado de pasajeros cancelados" };
    }
    
    return { pasajeros_organizados: pasajeros, accion_ejecutada: "ninguna acción aplicada" };
}