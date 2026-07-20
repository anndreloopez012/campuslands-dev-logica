function calcularCostoTatuaje(diseno, precioPorCm2, costoFijo) {
    if (diseno.ancho <= 0 || diseno.alto <= 0) {
        return { error: "Dimensiones inválidas para un diseño." };
    }

    const area = diseno.ancho * diseno.alto;
    const perimetro = 2 * (diseno.ancho + diseno.alto);
    const costoTotal = (area * precioPorCm2) + costoFijo;

    return {
        area: `${area} cm²`,
        perimetro: `${perimetro} cm`,
        costo_total: `$${costoTotal}`,
        explicacion: `El costo se basa en ${area} cm² de relleno y ${perimetro} cm de contorno.`
    };
}