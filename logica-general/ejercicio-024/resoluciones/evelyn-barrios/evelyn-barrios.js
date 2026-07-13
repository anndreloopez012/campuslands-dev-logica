/**
 * EJERCICIO 24: Ordenamiento Multi-Criterio
 *
 * Dada una lista de productos, esta función devuelve un nuevo arreglo
 * ordenado por categoría (alfabéticamente) y, en caso de empate,
 * por precio (de menor a mayor).
 *
 * @param {object[]} productos - Un arreglo de objetos de producto.
 * @returns {object[]} Un nuevo arreglo con los productos ordenados.
 */
function ordenarProductosMultiCriterio(productos) {
  // Creamos una copia para no modificar el arreglo original (buena práctica).
  const productosCopiados = [...productos];

  productosCopiados.sort((a, b) => {
    // Criterio 1: Ordenar por categoría (alfabéticamente).
    const comparacionCategoria = a.categoria.localeCompare(b.categoria);

    if (comparacionCategoria !== 0) {
      // Si las categorías son diferentes, usamos este resultado para ordenar.
      return comparacionCategoria;
    } else {
      // Criterio 2: Si las categorías son iguales, ordenar por precio (numéricamente).
      return a.precio - b.precio;
    }
  });

  return productosCopiados;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Ordenamiento Multi-Criterio (Ejercicio 24) ---");

const catalogo = [
  { id: 1, nombre: 'Laptop Pro', precio: 1500, categoria: 'Electronica' },
  { id: 2, nombre: 'Libro de Diseño', precio: 45, categoria: 'Libros' },
  { id: 3, nombre: 'Silla de Oficina', precio: 250, categoria: 'Hogar' },
  { id: 4, nombre: 'Monitor 4K', precio: 450, categoria: 'Electronica' },
  { id: 5, nombre: 'Teclado Mecánico', precio: 95, categoria: 'Electronica' },
];

const productosOrdenados = ordenarProductosMultiCriterio(catalogo);

console.log("Productos ordenados por categoría y precio:");
console.log(productosOrdenados);

console.log("\n--- Pruebas Finalizadas ---");