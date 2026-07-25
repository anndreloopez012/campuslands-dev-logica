// irma-arias.js - Ejercicio 079: Fórmulas químicas (Inventarios lógicos)

// Función 1: Validar que el inventario de reactivos no esté vacío
function validarInventarioReactivos(inventario) {
    if (!inventario || !Array.isArray(inventario) || inventario.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Evaluar el estado lógico de stock de un compuesto o reactivo individual
function evaluarStockReactivo(reactivo) {
    if (reactivo.cantidadDisponible <= reactivo.stockMinimoAlerta) {
        return {
            id: reactivo.codigo,
            nombreCompuesto: reactivo.nombre,
            estadoStock: "Crítico - Requiere Reabastecimiento",
            deficit: reactivo.stockMinimoAlerta - reactivo.cantidadDisponible
        };
    }
    return {
        id: reactivo.codigo,
        nombreCompuesto: reactivo.nombre,
        estadoStock: "Óptimo",
        deficit: 0
    };
}

// Función principal que coordina el análisis lógico del inventario de fórmulas y reactivos
function auditarInventarioQuimico(inventario) {
    if (!validarInventarioReactivos(inventario)) {
        return {
            estado: "Error",
            mensaje: "El inventario de reactivos químicos está vacío o no es válido."
        };
    }

    let alertasReabastecimiento = [];
    let itemsOptimos = 0;

    for (let i = 0; i < inventario.length; i++) {
        const evaluacion = evaluarStockReactivo(inventario[i]);
        if (evaluacion.estadoStock.includes("Crítico")) {
            alertasReabastecimiento.push(evaluacion);
        } else {
            itemsOptimos++;
        }
    }

    return {
        accion: "Auditoría de inventarios lógicos en laboratorio químico",
        totalReactivosEvaluados: inventario.length,
        totalOptimos: itemsOptimos,
        totalAlertasCriticas: alertasReabastecimiento.length,
        detallesAlertas: alertasReabastecimiento
    };
}

// --- Casos de prueba ---
const inventarioNormal = [
    { codigo: "H2SO4", nombre: "Ácido Sulfúrico", cantidadDisponible: 4, stockMinimoAlerta: 10 }, // Crítico
    { codigo: "NaCl", nombre: "Cloruro de Sodio", cantidadDisponible: 50, stockMinimoAlerta: 15 }, // Óptimo
    { codigo: "HCl", nombre: "Ácido Clorhídrico", cantidadDisponible: 2, stockMinimoAlerta: 8 }   // Crítico
];

const inventarioBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(auditarInventarioQuimico(inventarioNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(auditarInventarioQuimico(inventarioBorde), null, 2));