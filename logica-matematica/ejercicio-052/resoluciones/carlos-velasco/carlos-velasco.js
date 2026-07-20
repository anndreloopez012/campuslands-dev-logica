const calcularProbabilidadSaque = (exitosos, totales, margen) => {
    if (totales === 0) return { prob: 0, clasificacion: "Novato", explicacion: "Sin datos." };

    let prob = (exitosos / totales) + margen;
    if (prob > 1) prob = 1;

    let clasificacion = "Novato";
    if (prob >= 0.8) clasificacion = "Experto";
    else if (prob >= 0.5) clasificacion = "Promedio";

    return {
        probabilidad_final: (prob * 100).toFixed(2) + "%",
        clasificacion: clasificacion,
        explicacion: `Probabilidad base calculada con margen de confianza de ${margen * 100}%`
    };
};

// Pruebas
console.log(calcularProbabilidadSaque(8, 10, 0.05)); // Normal
console.log(calcularProbabilidadSaque(0, 10, 0.01)); // Borde: probabilidad muy baja