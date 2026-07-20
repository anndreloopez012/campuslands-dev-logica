function calcularRitmoTorneo(tiempos, bono, penalizacion) {
    if (tiempos.length === 0) return { tiempo_final_ajustado: 0, clasificacion_ritmo: "estándar" };
    
    const suma = tiempos.reduce((acc, val) => acc + val, 0);
    let promedio = suma / tiempos.length;
    if (promedio < 20) {
        promedio += bono;
    }
    
    const final = promedio - penalizacion;
    
    let categoria = "";
    if (final < 15) categoria = "ritmo frenético";
    else if (final <= 25) categoria = "estándar";
    else categoria = "partida lenta";
    
    return { tiempo_final_ajustado: final, clasificacion_ritmo: categoria };
}