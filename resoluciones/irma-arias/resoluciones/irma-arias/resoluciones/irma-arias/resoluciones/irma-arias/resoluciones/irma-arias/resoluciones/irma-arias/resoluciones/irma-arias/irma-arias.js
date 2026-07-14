
/**
 * Selector de Comida Urbana
 * Lógica:
 * 1. Filtra opciones por restricciones (ej. vegetariano).
 * 2. Selecciona la opción más barata dentro de las permitidas.
 * 3. Si no hay presupuesto o no hay opciones, devuelve un error.
 */

function seleccionarComida(menu, presupuesto, esVegetariano) {
    // 1. Filtrar opciones permitidas
    let opcionesPermitidas = menu.filter(item => {
        if (esVegetariano && !item.esVegetariano) return false;
        return item.precio <= presupuesto;
    });

    // 2. Manejo de casos (vacío)
    if (opcionesPermitidas.length === 0) {
        return { accion: "ninguna", motivo: "No hay opciones disponibles bajo tu presupuesto o restricciones." };
    }

    // 3. Selección por estrategia (la opción más barata)
    opcionesPermitidas.sort((a, b) => a.precio - b.precio);
    
    return {
        platillo: opcionesPermitidas[0].nombre,
        precio: opcionesPermitidas[0].precio,
        motivo: "Es la opción más económica que cumple con tus restricciones."
    };
}

// --- Pruebas ---
const menuComidaUrbana = [
    { nombre: "Tacos de carne", precio: 15, esVegetariano: false },
    { nombre: "Tacos de papa", precio: 10, esVegetariano: true },
    { nombre: "Hamburguesa", precio: 25, esVegetariano: false }
];

console.log("Caso Normal (Vegetariano):", seleccionarComida(menuComidaUrbana, 20, true));
console.log("Caso Borde (Sin presupuesto):", seleccionarComida(menuComidaUrbana, 5, false));