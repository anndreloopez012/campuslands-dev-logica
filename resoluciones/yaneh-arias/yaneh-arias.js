
/**
 * Ejercicio 010: Redondeo y precisión en Viajes y Turismo
 * Autor: Yaneht Arias
 */

function calcularCostoPromedio(totalGastos, numeroTuristas) {
    if (numeroTuristas <= 0) return "El número de turistas debe ser mayor a 0";

    const promedio = totalGastos / numeroTuristas;

    return {
        totalGastos,
        numeroTuristas,
        // Redondeo a 2 decimales para moneda
        costoPorPersona: parseFloat(promedio.toFixed(2)),
        // Redondeo al entero más cercano para reporte
        costoRedondeado: Math.round(promedio)
    };
}

// --- PRUEBAS ---
// Caso Normal: Gastos con varios decimales
console.log("Caso Normal:", calcularCostoPromedio(1500.75, 3));

// Caso Borde: Gastos mínimos
console.log("Caso Borde:", calcularCostoPromedio(10, 1));