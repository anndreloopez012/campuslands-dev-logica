function calcularRankingFutbol(goles, partidos, bono) {
    if (partidos === 0) return { promedio_final: 0, clasificacion_ranking: "en desarrollo" };
    
    const sumaGoles = goles.reduce((acc, val) => acc + val, 0);
    let promedio = sumaGoles / partidos;
    
    if (promedio > 2.0) {
        promedio += bono;
    }
    
    let categoria = "";
    if (promedio >= 3.0) categoria = "goleador estrella";
    else if (promedio >= 1.5) categoria = "delantero regular";
    else categoria = "en desarrollo";
    
    return { promedio_final: promedio, clasificacion_ranking: categoria };
}