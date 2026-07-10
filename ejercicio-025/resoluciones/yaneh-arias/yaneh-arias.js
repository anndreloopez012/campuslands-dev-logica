
Ejercicio 030: Redondeo y Precisión - Viajes y Turismo
 * Regla: Calcular el costo total de un paquete turístico aplicando un impuesto
 * y redondeando siempre al entero más cercano (o a dos decimales según moneda).
 */

function calcularPresupuestoViaje(costoBase, tasaImpuesto) {
    if (costoBase < 0) return "Costo base no puede ser negativo";

    // 1. Cálculo con alta precisión
    let subtotal = costoBase * (1 + tasaImpuesto);

    // 2. Redondeo:
    // Math.round para enteros, o .toFixed(2) para formato moneda
    let totalRedondeado = Math.round(subtotal);
    let totalMoneda = parseFloat(subtotal.toFixed(2));

    return {
        costo_original: costoBase,
        impuesto_aplicado: (tasaImpuesto * 100) + "%",
        total_entero: totalRedondeado,
        total_exacto: totalMoneda
    };
}

// Pruebas
console.log("Presupuesto A:", calcularPresupuestoViaje(1250.55, 0.19)); // 19% impuesto
console.log("Presupuesto B:", calcularPresupuestoViaje(99.99, 0.05));  // 5% impuesto

