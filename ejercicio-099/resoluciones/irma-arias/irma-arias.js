// irma-arias.js - Ejercicio 099: Fórmulas químicas (Inventarios lógicos)

// Función 1: Validar que el inventario de reactivos químicos no esté vacío
function validarInventarioReactivos(inventario) {
    if (!inventario || !Array.isArray(inventario) || inventario.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Evaluar el estado lógico del stock de cada reactivo y detectar alertas de reabastecimiento
function evaluarEstadoReactivo(reactivo) {
    const { nombre, stockActualGramos, stockMinimoRequerido, esPeligroso } = reactivo;
    let estadoStock = "Óptimo";
    let requiereReabastecimiento = false;

    if (stockActualGramos <= stockMinimoRequerido) {
        estadoStock = "Crítico / Bajo Mínimo";
        requiereReabastecimiento = true;
    } else if (stockActualGramos <= stockMinimoRequerido * 1.5) {
        estadoStock = "Precaución / Stock Moderado";
    }

    return {
        reactivo: nombre,
        stockActual: stockActualGramos,
        stockMinimo: stockMinimoRequerido,
        nivelEstado: estadoStock,
        alertaPeligrosidad: esPeligroso ? "Alto riesgo: Manejar bajo campana extractora" : "Riesgo estándar",
        requierePedidoUrgente: requiereReabastecimiento
    };
}

// Función 3: Procesar y auditar todo el inventario lógico de compuestos
function procesarInventarioQuimico(inventario) {
    const auditoriaInventario = inventario.map(reactivo => evaluarEstadoReactivo(reactivo));
    const totalCriticos = auditoriaInventario.filter(r => r.requierePedidoUrgente).length;

    return {
        totalReactivosEvaluados: inventario.length,
        totalAlertasCriticas: totalCriticos,
        detalleAuditoria: auditoriaInventario
    };
}

// Función principal que coordina el flujo de inventarios lógicos
function gestionarInventarioFormulasQuimicas(inventario) {
    if (!validarInventarioReactivos(inventario)) {
        return {
            estado: "Error",
            mensaje: "El inventario de reactivos químicos para fórmulas está vacío o no es válido."
        };
    }

    const resultadoInventario = procesarInventarioQuimico(inventario);

    return {
        accion: "Inventarios lógicos - Control de Reactivos y Fórmulas Químicas",
        ...resultadoInventario
    };
}

// --- Casos de prueba ---
const inventarioNormal = [
    { nombre: "Ácido Sulfúrico (H2SO4)", stockActualGramos: 450, stockMinimoRequerido: 500, esPeligroso: true }, // Crítico
    { nombre: "Cloruro de Sodio (NaCl)", stockActualGramos: 2500, stockMinimoRequerido: 1000, esPeligroso: false }, // Óptimo
    { nombre: "Hidróxido de Sodio (NaOH)", stockActualGramos: 300, stockMinimoRequerido: 400, esPeligroso: true } // Crítico
];

const inventarioBorde = []; // Caso borde: Inventario vacío

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(gestionarInventarioFormulasQuimicas(inventarioNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(gestionarInventarioFormulasQuimicas(inventarioBorde), null, 2));