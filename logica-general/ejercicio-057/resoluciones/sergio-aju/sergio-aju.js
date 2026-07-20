function procesarCorte(material, complejidad) {
    const tablaDecision = {
        "madera": { "baja": ["corte laser", "1h"], "media": ["corte laser", "2h"], "alta": ["corte laser", "4h"] },
        "concreto": { "baja": ["corte CNC", "3h"], "media": ["corte CNC", "6h"], "alta": ["corte CNC", "10h"] },
        "acero": { "baja": ["corte plasma", "5h"], "media": ["corte plasma", "10h"], "alta": ["corte plasma", "20h"] }
    };

    const resultado = tablaDecision[material][complejidad];
    return {
        tipo_de_corte: resultado[0],
        tiempo_estimado: resultado[1]
    };
}