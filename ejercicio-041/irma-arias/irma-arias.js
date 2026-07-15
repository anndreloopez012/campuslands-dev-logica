
// Inventario de motos
const inventario = [
    { id: 1, marca: "Yamaha", estado: "disponible", precio: 5000, km: 100 },
    { id: 2, marca: "Honda", estado: "bloqueado", precio: 3000, km: 2000 },
    { id: 3, marca: "Suzuki", estado: "pendiente", precio: 4500, km: 200 },
    { id: 4, marca: "Kawasaki", estado: "disponible", precio: 8000, km: 600 }
];

function filtrarInventario(lista, presupuestoMax) {
    // Regla: Priorizar bloqueados, luego filtrar por precio y km
    const bloqueados = lista.filter(m => m.estado === "bloqueado");
    const disponibles = lista.filter(m => m.estado !== "bloqueado" && m.precio < presupuestoMax && m.km < 500);

    return {
        prioridad: bloqueados,
        opciones: disponibles
    };
}

// Pruebas
console.log("--- Caso Normal ---");
console.log(filtrarInventario(inventario, 6000));

console.log("\n--- Caso Borde (Presupuesto muy bajo) ---");
console.log(filtrarInventario(inventario, 1000));