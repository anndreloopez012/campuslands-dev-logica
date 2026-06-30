function obtenerNuevoEstado(estadoActual, evento) {
    if (estadoActual === "Calma") {
        if (evento === "ruido") return "Alerta";
        if (evento === "fantasma") return "Pánico";
    }
    if (estadoActual === "Alerta") {
        if (evento === "fantasma") return "Pánico";
        if (evento === "silencio") return "Calma";
    }
    if (estadoActual === "Pánico") {
        if (evento === "luz") return "Alerta";
    }
    return estadoActual; 
}

console.log(obtenerNuevoEstado("Calma", "ruido"));  
console.log(obtenerNuevoEstado("Pánico", "luz"));  