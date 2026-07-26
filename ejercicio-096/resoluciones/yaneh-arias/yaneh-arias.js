/**
 * Ejercicio 096: Lógica matemática - Presupuestos y descuentos (Animación 3D)
 * Alumna: Yaneh Arias
 */

function calcularPresupuestoAnimacion(costoBase, porcentajeDescuento) {
    if (costoBase < 0 || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        return {
            costo_final: 0,
            descuento_aplicado: 0,
            explicacion: "El costo base no puede ser negativo y el porcentaje de descuento debe estar entre 0 y 100."
        };
    }

    let descuentoAplicado = costoBase * (porcentajeDescuento / 100);
    let costoFinal = costoBase - descuentoAplicado;

    return {
        costo_final: Number(costoFinal.toFixed(2)),
        descuento_aplicado: Number(descuentoAplicado.toFixed(2)),
        explicacion: "Se calculó el presupuesto final aplicando el porcentaje de descuento correspondiente al proyecto de animación 3D."
    };
}

// Casos de prueba
const pruebaNormal = calcularPresupuestoAnimacion(1500, 15);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularPresupuestoAnimacion(800, 0);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
