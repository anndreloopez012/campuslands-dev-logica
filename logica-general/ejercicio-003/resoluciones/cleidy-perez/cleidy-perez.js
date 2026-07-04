function evaluarPrioridad(items, prioridad){
    if (items.includes("bloqueado") && prioridad=="alta"){
        return {
            accion: "Revisar bloqueado",
            motivo: "La regla prioriza riesgo"
        };
    }
    return {
        accion:"Revisar pendientes/aprobados",
        motivo: "No hay riesgos bloqueados con prioridad alta."
    };
}


console.log("Caso normal:", evaluarPrioridad(["aprobado", "pendiente", "bloqueado"],"alta"));
console.log("caso borde:", evaluarPrioridad(["aprobado", "pendiente"], "baja"));
