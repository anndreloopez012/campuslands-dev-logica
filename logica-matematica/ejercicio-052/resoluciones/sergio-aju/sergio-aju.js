function calcularProbabilidadPingPong(efectividad, penalizacion) {
    let efectividadAjustada = Math.max(0, efectividad - penalizacion);
    const probabilidad = efectividadAjustada / 100;
    let clasificacion = "Bajo rendimiento";
    if (probabilidad > 0.7) clasificacion = "Élite";
    else if (probabilidad >= 0.4) clasificacion = "Promedio";
    return {
        probabilidad_ganar: probabilidad.toFixed(2),
        clasificacion,
        explicacion: `Efectividad ajustada al ${efectividadAjustada}%.`
    };
}