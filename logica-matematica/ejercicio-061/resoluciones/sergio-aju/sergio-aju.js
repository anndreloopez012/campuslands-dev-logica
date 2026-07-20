function calcularRankingJugador(puntos, racha, penalizacion) {
    if (puntos.length === 0) return { puntaje_final: 0, clasificacion_ranking: "amateur" };
    
    const totalBase = puntos.reduce((acc, val) => acc + val, 0);
    const final = (totalBase * racha) - penalizacion;
    
    let categoria = "";
    if (final >= 500) categoria = "elité";
    else if (final >= 200) categoria = "profesional";
    else categoria = "amateur";
    
    return { puntaje_final: final, clasificacion_ranking: categoria };
}