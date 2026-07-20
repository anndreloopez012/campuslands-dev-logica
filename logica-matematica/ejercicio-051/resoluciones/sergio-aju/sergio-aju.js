function calcularTorneo(participantes, bono, penalizacion) {
    const n = participantes.length;
    const combinaciones = n < 2 ? 0 : (n * (n - 1)) / 2;
    const sumaNiveles = participantes.reduce((acc, p) => acc + p.nivel, 0);
    const puntajeFinal = sumaNiveles + bono - penalizacion;
    let categoria = "Principiante";
    if (puntajeFinal > 50) categoria = "Elite";
    else if (puntajeFinal >= 20) categoria = "Competitivo";
    
    return { combinaciones, puntajeFinal, categoria };
}