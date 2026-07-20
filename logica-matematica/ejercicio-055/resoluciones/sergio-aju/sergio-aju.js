function calcularTiempoDibujo(pixeles, velocidad, pausas) {
    if (velocidad <= 0) {
        return { tiempo: "Infinito", clasificacion: "Error", explicacion: "Velocidad inválida." };
    }
    
    const tiempoNeto = pixeles / velocidad;
    const tiempoTotal = tiempoNeto + pausas;
    
    let clasificacion = "Obra maestra compleja";
    if (tiempoTotal < 60) clasificacion = "Ilustración rápida";
    else if (tiempoTotal <= 300) clasificacion = "Proyecto estándar";
    
    return {
        tiempo_estimado_minutos: tiempoTotal,
        clasificacion,
        explicacion: `Trabajo neto ${tiempoNeto} min + ${pausas} min de pausas.`
    };
}