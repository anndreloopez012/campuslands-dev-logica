/**
 * Ejercicio 076: Lógica matemática - Presupuestos y descuentos (Animación 3D)
 * Alumna: Yaneh Arias
 */

function calcularPresupuestoAnimacion(costosItems, porcentajeDescuento) {
    if (!costosItems || costosItems.length === 0 || porcentajeDescuento < 0) {
        return {
            subtotal: 0,
            descuento_aplicado: 0,
            total_final: 0,
            explicacion: "Los datos de entrada no son válidos o están vacíos."
        };
    }

    let subtotal = 0;
    for (let i = 0; i < costosItems.length; i++) {
        subtotal += costosItems[i];
    }

    let montoDescuento = subtotal * (porcentajeDescuento / 100);
    let totalFinal = subtotal - montoDescuento;

    return {
        subtotal: Number(subtotal.toFixed(2)),
        descuento_aplicado: Number(montoDescuento.toFixed(2)),
        total_final: Number(totalFinal.toFixed(2)),
        explicacion: "Se sumaron los costos de los recursos de animación 3D, se calculó el descuento según el porcentaje y se obtuvo el total final."
    };
}

// Casos de prueba
const pruebaNormal = calcularPresupuestoAnimacion([1200, 450, 300], 10);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularPresupuestoAnimacion([], 15);
console.log("Prueba Borde:", pruebaBorde);
