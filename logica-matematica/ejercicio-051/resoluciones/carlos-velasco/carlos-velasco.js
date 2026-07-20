const calcularTotalPeleas = (peleadoresPorNivel) => {
    let totalPeleas = 0;
    let detalle = {};

    for (let nivel in peleadoresPorNivel) {
        const n = peleadoresPorNivel[nivel];
        // Combinaciones de n elementos tomados de 2 en 2
        const combinaciones = (n * (n - 1)) / 2;
        
        detalle[nivel] = combinaciones;
        totalPeleas += combinaciones;
    }

    return {
        total_peleas: totalPeleas,
        detalle_por_nivel: detalle,
        explicacion: "Se calculó el total de enfrentamientos posibles (1vs1) por cada categoría usando combinatoria básica."
    };
};

// Prueba
console.log(calcularTotalPeleas({ Principiante: 4, Intermedio: 3 }));