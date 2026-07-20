function calcularRanking(puntajes, bono, penalizacion) {
    if (puntajes.length === 0) return { puntaje_final: 0, clasificacion: "en revisión" };
    
    const suma = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntajes.length;
    const final = promedio + bono - penalizacion;
    
    let categoria = "";
    if (final >= 20) categoria = "diseño de vanguardia";
    else if (final >= 10) categoria = "estándar";
    else categoria = "en revisión";
    
    return { puntaje_final: final, clasificacion: categoria };
}