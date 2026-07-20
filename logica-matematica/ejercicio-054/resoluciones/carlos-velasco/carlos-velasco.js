const calcularCostoTatuaje = (figuras, precioCm2, costoTrazo) => {
    let totalCosto = 0;

    figuras.forEach(f => {
        const area = f.ancho * f.alto;
        const perimetro = 2 * (f.ancho + f.alto);
        totalCosto += (area * precioCm2) + (perimetro * costoTrazo);
    });

    let clasificacion = "Simple";
    if (totalCosto > 500) clasificacion = "Complejo";
    else if (totalCosto > 200) clasificacion = "Estándar";

    return {
        costo_final: totalCosto.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Cálculo basado en ${figuras.length} áreas geométricas.`
    };
};

// Pruebas
console.log(calcularCostoTatuaje([{ ancho: 10, alto: 10 }], 2, 5));
console.log(calcularCostoTatuaje([{ ancho: 2, alto: 2 }], 1, 1));