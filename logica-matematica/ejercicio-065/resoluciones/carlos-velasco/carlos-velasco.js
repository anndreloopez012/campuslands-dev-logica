const analizarEficiencia = (tiempos, minimo, maximo) => {
    const diagnostico = { optimo: 0, revision: 0, ineficiente: 0 };

    tiempos.forEach(tiempo => {
        if (tiempo < minimo) diagnostico.revision++;
        else if (tiempo > maximo) diagnostico.ineficiente++;
        else diagnostico.optimo++;
    });

    return {
        diagnostico,
        explicacion: `Se han analizado ${tiempos.length} reparaciones respecto a los límites ${minimo}-${maximo} minutos.`
    };
};

console.log(analizarEficiencia([20, 45, 70], 30, 60)); 
console.log(analizarEficiencia([10, 15], 30, 60));    