
/**
 * Ejercicio 005: Gestión de Taller Mecánico (Mínimos y Límites)
 * Autor: Yaneht Arias
 */

function evaluarStockTaller(piezas, limiteMinimo) {
    // 1. Identificar el valor mínimo actual
    const stockMinimo = Math.min(...piezas);

    // 2. Aplicar reglas de límite
    const requierePedido = stockMinimo < limiteMinimo;

    return {
        stockMinimo,
        limiteMinimo,
        requierePedido,
        mensaje: requierePedido 
            ? "Alerta: El stock está por debajo del límite, realizar pedido." 
            : "Stock saludable: No requiere pedido."
    };
}

// --- PRUEBAS ---
// Caso Normal: Stock variado con un valor bajo
console.log("Caso Normal:", evaluarStockTaller([20, 5, 40, 15], 10));

// Caso Borde: Stock exactamente en el límite
console.log("Caso Borde:", evaluarStockTaller([10, 20, 30], 10));