/**
 * Ejercicio 070: Lógica matemática - Redondeo y precisión (Viajes y turismo)
 * Alumna: Yaneh Arias
 */

function calcularPresupuestoTuristico(costosBase, tasaImpuesto, decimales) {
    if (!costosBase || costosBase.length === 0 || tasaImpuesto < 0) {
        return {
            subtotal: 0,
            total_con_impuesto: 0,
            explicacion: "Los datos de entrada no son válidos o están vacíos."
        };
    }

    let subtotal = 0;
    for (let i = 0; i < costosBase.length; i++) {
        subtotal += costosBase[i];
    }

    let totalConImpuesto = subtotal + (subtotal * tasaImpuesto);
    let precisionDecimal = decimales !== undefined ? decimales : 2;

    return {
        subtotal: Number(subtotal.toFixed(precisionDecimal)),
        total_con_impuesto: Number(totalConImpuesto.toFixed(precisionDecimal)),
        explicacion: "Se calculó el subtotal de los costos de turismo, se aplicó la tasa de impuesto y se ajustó la precisión decimal."
    };
}

// Casos de prueba
const pruebaNormal = calcularPresupuestoTuristico([150.50, 300.75, 120.00], 0.16, 2);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularPresupuestoTuristico([], 0.12, 2);
console.log("Prueba Borde:", pruebaBorde);
