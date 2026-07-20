const seleccionarIngrediente = (ingredientes, estrategia) => {
    if (ingredientes.length === 0) return { ingrediente: "Ninguno", motivo: "Inventario vacío." };

    let seleccionado;

    switch (estrategia) {
        case "económica":
            seleccionado = ingredientes.reduce((min, cur) => cur.costo < min.costo ? cur : min);
            break;
        case "premium":
            seleccionado = ingredientes.reduce((max, cur) => cur.frescura > max.frescura ? cur : max);
            break;
        case "popular":
            seleccionado = ingredientes.reduce((max, cur) => cur.popularidad > max.popularidad ? cur : max);
            break;
        default:
            return { ingrediente: "Error", motivo: "Estrategia no válida." };
    }

    return { 
        ingrediente_seleccionado: seleccionado.nombre, 
        motivo: `Elegido bajo estrategia: ${estrategia}.` 
    };
};

// Pruebas
const menu = [
    { nombre: "Tomate", frescura: 8, costo: 2, popularidad: 9 },
    { nombre: "Carne", frescura: 9, costo: 10, popularidad: 7 }
];

console.log(seleccionarIngrediente(menu, "económica")); // Tomate
console.log(seleccionarIngrediente(menu, "premium"));   // Carne