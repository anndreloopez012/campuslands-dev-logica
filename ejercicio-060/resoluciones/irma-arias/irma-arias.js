
/**
 * Lógica General 060 - Estrategias de Selección (Comida Urbana)
 * Estudiante: Irma Arias
 * Descripción: Sistema de selección y priorización de pedidos de comida urbana
 * basándose en reglas de urgencia y tipo de entrega.
 */

function seleccionarPedidoUrbano(pedidos) {
    // Validación de caso borde: lista vacía o no válida
    if (!Array.isArray(pedidos) || pedidos.length === 0) {
        return {
            accion: "ninguna",
            motivo: "la lista de pedidos está vacía o no es válida."
        };
    }

    // Regla: Priorizar pedidos urgentes o con entrega express primero
    let pedidoSeleccionado = pedidos.find(p => p.prioridad === "alta" || p.tipo === "express");

    // Si no hay express o alta, tomamos el primero disponible por defecto
    if (!pedidoSeleccionado) {
        pedidoSeleccionado = pedidos[0];
    }

    return {
        idPedido: pedidoSeleccionado.id,
        item: pedidoSeleccionado.item,
        accion: `procesar ${pedidoSeleccionado.item} con prioridad ${pedidoSeleccionado.prioridad}`,
        motivo: "la regla de selección prioriza pedidos urgentes o express antes que los estándar."
    };
}

// --- PRUEBAS ---

// 1. Prueba Normal
console.log("--- PRUEBA NORMAL (Pedidos de Comida Urbana) ---");
const listaPedidosNormal = [
    { id: 1, item: "perro caliente tradicional", prioridad: "baja", tipo: "local" },
    { id: 2, item: "hamburguesa doble artesanal", prioridad: "alta", tipo: "express" },
    { id: 3, item: "salchipapa mixta", prioridad: "media", tipo: "llevar" }
];
console.log(JSON.stringify(seleccionarPedidoUrbano(listaPedidosNormal), null, 2));

// 2. Prueba de Caso Borde (Lista vacía)
console.log("\n--- PRUEBA CASO BORDE (Lista Vacía) ---");
console.log(JSON.stringify(seleccionarPedidoUrbano([]), null, 2));