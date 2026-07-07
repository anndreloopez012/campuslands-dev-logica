function evaluarSalto(viento, equipoVerificado) {
    if (viento > 30) {
        return { estado: "CANCELADO", motivo: "Viento demasiado fuerte." };
    }
    
    if (!equipoVerificado) {
        return { estado: "CANCELADO", motivo: "Equipo no verificado." };
    }

    return { estado: "APROBADO", motivo: "Condiciones óptimas para el salto." };
}
console.log(evaluarSalto(20, true));  
console.log(evaluarSalto(40, true));  