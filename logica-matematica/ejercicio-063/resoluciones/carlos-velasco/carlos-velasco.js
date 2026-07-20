const analizarRendimiento = (scores) => {
    if (!scores.length) return { error: "Sin datos" };

    const suma = scores.reduce((a, b) => a + b, 0);
    const promedio = suma / scores.length;

    const sorted = [...scores].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const mediana = sorted.length % 2 !== 0 
        ? sorted[mid] 
        : (sorted[mid - 1] + sorted[mid]) / 2;

    let clasif = "Jugador Equilibrado";
    if (promedio > mediana) clasif = "Jugador Consistente";
    else if (promedio < mediana) clasif = "Jugador Irregular";

    return { promedio, mediana, clasificacion: clasif, explicacion: "Análisis basado en tendencia central." };
};

console.log(analizarRendimiento([10, 20, 30, 40, 50])); 
console.log(analizarRendimiento([10, 10, 10, 100]));    