
/**
 * Diagnóstico de Dibujo Digital
 * @param {Object} dibujo - { nombre: string, capas: number, estado: string }
 */
function diagnosticarDibujo(dibujo) {
    // Regla 1: Bloqueos críticos
    if (dibujo.estado === "bloqueado") {
        return { accion: "Detener", motivo: "El archivo presenta errores críticos de sistema." };
    }

    // Regla 2: Complejidad baja
    if (dibujo.capas < 3) {
        return { accion: "Revisar", motivo: "El dibujo tiene muy pocas capas, parece incompleto." };
    }

    // Regla 3: Complejidad alta
    if (dibujo.capas > 50) {
        return { accion: "Optimizar", motivo: "Demasiadas capas. Se requiere reducir el peso antes de exportar." };
    }

    // Regla 4: Éxito
    return { accion: "Exportar", motivo: "El dibujo cumple con todos los estándares." };
}

// --- PRUEBAS ---
const dibujo1 = { nombre: "Retrato", capas: 10, estado: "aprobado" };
const dibujo2 = { nombre: "Boceto", capas: 1, estado: "aprobado" };
const dibujo3 = { nombre: "Arte Final", capas: 60, estado: "aprobado" };

console.log("Resultado 1:", diagnosticarDibujo(dibujo1));
console.log("Resultado 2:", diagnosticarDibujo(dibujo2));
console.log("Resultado 3:", diagnosticarDibujo(dibujo3));