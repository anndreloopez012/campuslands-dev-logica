function normalizarPuntaje(puntajes, bono, penalizacion) {
    if (puntajes.length === 0) return { puntaje_final: 0, clasificacion: "requiere capacitación" };
    
    const suma = puntajes.reduce((acc, val) => acc + val, 0);
    const promedio = suma / puntajes.length;
    const final = promedio + bono - penalizacion;
    
    let categoria = "";
    if (final >= 80) categoria = "certificado experto";
    else if (final >= 50) categoria = "certificado básico";
    else categoria = "requiere capacitación";
    
    return { puntaje_final: final, clasificacion: categoria };
}