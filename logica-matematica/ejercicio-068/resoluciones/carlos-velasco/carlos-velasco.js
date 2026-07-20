// ejercicio logica - general - Ejercicio 068

const calcularPuntuacionPelicula = (votos, bono, penalizacion) => {
    if (!votos || votos.length === 0) return { error: "No hay votos" };

    const suma = votos.reduce((acc, voto) => acc + voto, 0);
    const puntajeFinal = suma + bono - penalizacion;
    
    let clasificacion = "";
    if (puntajeFinal >= 80) clasificacion = "Obra Maestra";
    else if (puntajeFinal >= 50) clasificacion = "Competitivo";
    else clasificacion = "De culto";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se sumaron ${votos.length} votos, se aplicó bono de ${bono} y penalización de ${penalizacion}.`
    };
};

console.log(calcularPuntuacionPelicula([20, 25, 30], 8, 3));
console.log(calcularPuntuacionPelicula([5, 10], 2, 10));