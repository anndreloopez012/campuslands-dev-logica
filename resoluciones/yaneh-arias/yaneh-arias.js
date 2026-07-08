
/**
 * Ejercicio 004: Inventario de motos
 * Autor: Yaneht Arias
 */

function procesarInventario(stock) {
    if (!stock || stock.length === 0) return "Stock vacío";

    const maximo = Math.max(...stock);
    const minimo = Math.min(...stock);
    const rango = maximo - minimo;

    return {
        maximo,
        minimo,
        rango,
        estado: rango > 50 ? "crítico" : "estable"
    };
}

// --- PRUEBAS ---
console.log("Caso Normal:", procesarInventario([100, 150, 120, 200]));
console.log("Caso Borde:", procesarInventario([50, 50]));