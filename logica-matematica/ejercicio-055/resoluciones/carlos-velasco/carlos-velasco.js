const calcularTiempoProduccion = (trazos, descanso) => {
    if (trazos.length === 0) return { tiempo_total: 0, clasificacion: "Rápido", explicacion: "Sin trazos." };

    const tiempoDibujo = trazos.reduce((acum, t) => acum + (t.longitudPx / t.velocidadTrazado), 0);
    const tiempoTotal = tiempoDibujo + (trazos.length - 1) * descanso;

    let clasificacion = "Detallado";
    if (tiempoTotal < 60) clasificacion = "Rápido";
    else if (tiempoTotal < 120) clasificacion = "Eficiente";

    return {
        tiempo_total: tiempoTotal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Producción calculada con ${trazos.length} trazos y descansos de ${descanso}min.`
    };
};

// Pruebas
console.log(calcularTiempoProduccion([{ longitudPx: 500, velocidadTrazado: 10 }, { longitudPx: 300, velocidadTrazado: 15 }], 5));
console.log(calcularTiempoProduccion([{ longitudPx: 50, velocidadTrazado: 100 }], 5));