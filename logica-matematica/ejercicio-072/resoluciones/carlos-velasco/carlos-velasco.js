// ejercicio logica mate- probabilidad basica - Ejercicio 072

const calcularProbabilidadVictoria = (puntosGanados, puntosPerdidos) => {
    const totalPuntos = puntosGanados + puntosPerdidos;
    
    if (totalPuntos === 0) {
        return {
            probabilidad: 0,
            explicacion: "No hay registro de puntos para calcular probabilidad."
        };
    }

    const probabilidad = (puntosGanados / totalPuntos) * 100;

    return {
        probabilidad_victoria: parseFloat(probabilidad.toFixed(2)) + "%",
        explicacion: `Se calcularon las probabilidades basándose en ${puntosGanados} juegos ganados de un total de ${totalPuntos}.`
    };
};

console.log(calcularProbabilidadVictoria(15, 5));
console.log(calcularProbabilidadVictoria(0, 10));