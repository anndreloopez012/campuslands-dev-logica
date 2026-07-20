const diagnosticarRender = (material, iluminacion) => {
    if (material === "Madera") {
        return { accion: "Renderizado Natural", motivo: "La madera responde bien a cualquier condición de luz." };
    }

    const tabla = {
        "Metal": {
            "Alta": "Renderizado Épico",
            "Media": "Renderizado Estándar",
            "Baja": "Requiere ajuste de reflejos"
        },
        "Vidrio": {
            "Alta": "Renderizado de Alta Claridad",
            "Media": "Renderizado Estándar",
            "Baja": "Requiere ajuste de transparencia"
        }
    };

    const resultado = tabla[material]?.[iluminacion];

    return resultado 
        ? { accion: resultado, motivo: `Configuración aplicada para ${material} con luz ${iluminacion}.` }
        : { accion: "Error", motivo: "Combinación de material/luz no reconocida." };
};

console.log(diagnosticarRender("Metal", "Alta"));   
console.log(diagnosticarRender("Madera", "Baja")); 