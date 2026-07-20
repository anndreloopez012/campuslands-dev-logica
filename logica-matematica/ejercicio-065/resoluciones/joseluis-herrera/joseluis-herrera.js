function verificarStockCritico(inventario, limiteMinimo) {
    let repuestosCriticos = [];

    for (let i = 0; i < inventario.length; i++) {
        let item = inventario[i];

        if (item.cantidad <= limiteMinimo) {
            let cantidadFaltante = limiteMinimo - item.cantidad + 10; 
            repuestosCriticos.push({
                nombre: item.nombre,
                pedidoSug: cantidadFaltante
            });
        }
    }

    return repuestosCriticos;
}

const inventarioTaller = [
    { nombre: "Filtros de aceite", cantidad: 5 },
    { nombre: "Pastillas de freno", cantidad: 2 },
    { nombre: "Bujías", cantidad: 12 },
    { nombre: "Correas de distribución", cantidad: 1 }
];

const limite = 5;
const alertaPedidos = verificarStockCritico(inventarioTaller, limite);

console.log("--- Reporte de Stock Crítico ---");
alertaPedidos.forEach(item => {
    console.log(`Repuesto: ${item.nombre} | Pedir: ${item.pedidoSug} unidades`);
});