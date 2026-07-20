function evaluarTiemposTaller(tiempos, minGarantizado, maxEntrega) {
    if (tiempos.length === 0) return { promedio_ajustado: 0, estado_cumplimiento: "retrasado", incidencias: [] };
    
    const suma = tiempos.reduce((acc, val) => acc + val, 0);
    const promedio = suma / tiempos.length;
    const incidencias = tiempos.filter(t => t > maxEntrega);
    
    const esApto = promedio >= minGarantizado && incidencias.length === 0;
    
    return {
        promedio_ajustado: promedio,
        estado_cumplimiento: esApto ? "apto" : "retrasado",
        incidencias: incidencias
    };
}