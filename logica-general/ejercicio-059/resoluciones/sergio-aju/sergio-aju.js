function verificarStock(inventario, pedido) {
    const item = inventario.find(i => i.nombre === pedido.nombre);
    
    if (!item || item.stock < pedido.cantidad) {
        const disponible = item ? item.stock : 0;
        return { 
            estado: "pendiente", 
            faltante: pedido.cantidad - disponible 
        };
    }
    
    return { estado: "aprobado", faltante: 0 };
}