
// Inventario base de motos
const inventarioMotos = [
    { id: 1, marca: "Yamaha", modelo: "MT-03", cilindrada: 321, precio: 25000000, estado: "disponible", anio: 2023 },
    { id: 2, marca: "Honda", modelo: "CB 190R", cilindrada: 184, precio: 11500000, estado: "reservada", anio: 2022 },
    { id: 3, marca: "Kawasaki", modelo: "Ninja 400", cilindrada: 399, precio: 32000000, estado: "disponible", anio: 2024 },
    { id: 4, marca: "Suzuki", modelo: "GIXXER 250", cilindrada: 249, precio: 14000000, estado: "vendida", anio: 2023 },
    { id: 5, marca: "Bajaj", modelo: "Pulsar NS 200", cilindrada: 199, precio: 10500000, estado: "disponible", anio: 2024 }
];

/**
 * Filtra el inventario de motos según múltiples condiciones dinámicas.
 * @param {Array} inventario - Lista de objetos de motos.
 * @param {Object} criterios - Objeto con las condiciones de filtrado.
 * @returns {Array} - Motos que cumplen los filtros.
 */
function filtrarInventarioMotos(inventario, criterios) {
    // Validación de datos vacíos de entrada
    if (!Array.isArray(inventario) || inventario.length === 0) {
        console.log("Aviso: El inventario está vacío o no es válido.");
        return [];
    }

    return inventario.filter(moto => {
        // Condición 1: Filtrar por estado (si se especifica)
        if (criterios.estado && moto.estado !== criterios.estado) {
            return false;
        }

        // Condición 2: Filtrar por cilindrada mínima (si se especifica)
        if (criterios.cilindradaMinima && moto.cilindrada < criterios.cilindradaMinima) {
            return false;
        }

        // Condición 3: Filtrar por precio máximo (si se especifica)
        if (criterios.precioMaximo && moto.precio > criterios.precioMaximo) {
            return false;
        }

        // Condición 4: Filtrar por marca específica (si se especifica)
        if (criterios.marca && moto.marca.toLowerCase() !== criterios.marca.toLowerCase()) {
            return false;
        }

        return true;
    });
}

// ==========================================
// PRUEBAS DE EJECUCIÓN
// ==========================================

console.log("=== PRUEBA 1: Caso Normal (Motos disponibles con cilindraje >= 200 y precio <= 30M) ===");
const criteriosNormales = {
    estado: "disponible",
    cilindradaMinima: 200,
    precioMaximo: 30000000
};
const resultadoNormal = filtrarInventarioMotos(inventarioMotos, criteriosNormales);
console.log(resultadoNormal);

console.log("\n=== PRUEBA 2: Caso Borde (Criterios estrictos donde ninguna moto coincide) ===");
const criteriosBorde = {
    estado: "disponible",
    cilindradaMinima: 1000 // No hay motos de 1000cc en este inventario
};
const resultadoBorde = filtrarInventarioMotos(inventarioMotos, criteriosBorde);
console.log(resultadoBorde);