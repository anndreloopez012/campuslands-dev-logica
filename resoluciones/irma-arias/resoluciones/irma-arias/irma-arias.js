
/**
 * Ejercicio 004: Inventario de motos - Filtros por condiciones
 * Autor: Irma Yaneht Arias García
 */

const inventario = [
    { marca: "Yamaha", cilindrada: 250, estado: "disponible" },
    { marca: "Honda", cilindrada: 150, estado: "vendido" },
    { marca: "Kawasaki", cilindrada: 600, estado: "disponible" }
];

function filtrarMotos(lista) {
    // Regla: Solo mostrar motos disponibles y con cilindrada >= 200
    return lista.filter(moto => moto.estado === "disponible" && moto.cilindrada >= 200);
}

console.log("Motos aptas para venta:");
console.table(filtrarMotos(inventario));