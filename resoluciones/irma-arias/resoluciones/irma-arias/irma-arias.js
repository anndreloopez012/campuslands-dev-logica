
/**
 * Diagnóstico de Arquitectura 3D mediante Tabla de Decisión
 */

function definirRenderizado(material, iluminacion) {
    // Definimos la lógica basada en la tabla
    if (material === "vidrio") {
        return iluminacion === "alta" ? "Raytracing" : "Estándar";
    }

    if (material === "metal") {
        return iluminacion === "alta" ? "Reflejos dinámicos" : "Mate (bajo consumo)";
    }

    if (material === "madera") {
        return "Renderizado básico";
    }

    return "Material no reconocido";
}

// --- PRUEBAS ---
console.log("Prueba 1 (Vidrio/Alta):", definirRenderizado("vidrio", "alta"));
console.log("Prueba 2 (Metal/Baja):", definirRenderizado("metal", "baja"));
console.log("Prueba 3 (Caso Borde - Desconocido):", definirRenderizado("cemento", "alta"));