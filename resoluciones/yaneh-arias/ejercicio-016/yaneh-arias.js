
/**
 * Ejercicio 016: Presupuestos y Descuentos
 * Nombre: Yaneh Arias
 */

function calcularPresupuesto(precios) {
    // Suma total de los servicios
    const subtotal = precios.reduce((acc, p) => acc + p, 0);

    // Regla: 10% de descuento si supera 100
    let descuento = subtotal > 100 ? subtotal * 0.10 : 0;
    let totalFinal = subtotal - descuento;

    // Clasificación
    let estado = totalFinal > 50 ? "proyecto_grande" : "proyecto_basico";

    return {
        subtotal,
        descuento,
        totalFinal,
        estado
    };
}

// Prueba
console.log("Resultado:", calcularPresupuesto([50, 60, 20]));