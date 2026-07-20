// Ejercicio 050 - Redondeo y precisión (Viajes y Turismo)

function planificarLogisticaViaje(totalTuristas, capacidadVehiculo, costoTotalViaje) {
    if (totalTuristas <= 0 || capacidadVehiculo <= 0 || costoTotalViaje < 0) {
        return { error: "Los datos de entrada deben ser números positivos." };
    }

    const vehiculosNecesarios = Math.ceil(totalTuristas / capacidadVehiculo);

    const costoBruto = costoTotalViaje / totalTuristas;
    const costoPorPersona = parseFloat(costoBruto.toFixed(2));

    const totalRecaudado = costoPorPersona * totalTuristas;
    const diferencia = parseFloat((totalRecaudado - costoTotalViaje).toFixed(2));

    return {
        logistica: {
            turistas: totalTuristas,
            vehiculos_asignados: vehiculosNecesarios
        },
        finanzas: {
            costo_total_original: costoTotalViaje,
            cuota_exacta_por_persona: costoPorPersona,
            ajuste_centavos: diferencia
        }
    };
}

// Pruebas

console.log("--- Caso Normal (Excursión al Cerro de la Cruz) ---");
console.log(planificarLogisticaViaje(34, 12, 1550.75));

console.log("\n--- Caso Borde (Grupo exacto, sin decimales en moneda) ---");
console.log(planificarLogisticaViaje(20, 20, 2000));