function calcularPresupuesto(participantes, bono, penalizacion) {
    const totalBase = participantes.reduce((acc, val) => acc + val, 0);
    const totalFinal = totalBase + bono - penalizacion;
    
    let clasificacion = "";
    if (totalFinal >= 100) clasificacion = "alto presupuesto";
    else if (totalFinal >= 50) clasificacion = "competitivo";
    else clasificacion = "bajo presupuesto";

    return { puntaje_final: totalFinal, clasificacion };
}