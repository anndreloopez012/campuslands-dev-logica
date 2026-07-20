const gestionarMezcla = (inventario, mezcla, incompatibles) => {
    // 1. Validar compatibilidad
    const esIncompatible = incompatibles.some(par => 
        (par.includes(mezcla.reactivo1) && par.includes(mezcla.reactivo2))
    );
    if (esIncompatible) return { accion: "Peligro", motivo: "Reacción química violenta detectada." };

    // 2. Validar Stock
    const item1 = inventario.find(i => i.nombre === mezcla.reactivo1);
    const item2 = inventario.find(i => i.nombre === mezcla.reactivo2);

    if (!item1 || item1.cantidad < mezcla.cant1 || !item2 || item2.cantidad < mezcla.cant2) {
        return { accion: "Error", motivo: "Stock insuficiente para la fórmula." };
    }

    return { accion: "Autorizada", motivo: "Mezcla segura y con stock disponible." };
};

// Ejemplo
const inventario = [{nombre: "acido", cantidad: 10}, {nombre: "agua", cantidad: 20}];
const incompatibles = [["acido", "base"]];
console.log(gestionarMezcla(inventario, {reactivo1: "acido", cant1: 5, reactivo2: "agua", cant2: 5}, incompatibles));