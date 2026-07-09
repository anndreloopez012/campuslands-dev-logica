
/**
 * Ejercicio 020: Simulaciones con Fórmulas - Comida Urbana
 * Simula el costo de producción de platos basándose en ingredientes y gastos operativos.
 */

function simularCostoProduccion(costosIngredientes, factorOperativo, costoExtra) {
    if (!costosIngredientes || costosIngredientes.length === 0) return "Datos insuficientes";

    let costoTotal = 0;

    // Ciclo acumulador: Sumar costos y aplicar fórmula de simulación
    for (let i = 0; i < costosIngredientes.length; i++) {
        // Fórmula de simulación: (Costo * Factor Operativo) + Extra
        let costoPlato = (costosIngredientes[i] * factorOperativo) + costoExtra;
        costoTotal += costoPlato;
    }

    // Clasificación de rentabilidad basada en el costo total
    let clasificacion = costoTotal > 500 ? "Inversión Alta" : "Inversión Ajustada";

    return {
        costo_total_simulado: costoTotal.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Simulación calculada sobre ${costosIngredientes.length} platos con factor operativo de ${factorOperativo}.`
    };
}

// Pruebas
console.log(simularCostoProduccion([50, 100, 75], 1.2, 10)); // Caso Normal
console.log(simularCostoProduccion([], 1.2, 10));             // Caso Borde (Lista vacía)