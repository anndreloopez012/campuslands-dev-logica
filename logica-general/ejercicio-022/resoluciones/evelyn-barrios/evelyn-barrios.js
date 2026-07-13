/**
 * EJERCICIO 22: Motor de Búsqueda con Ranking de Relevancia
 *
 * Dada una lista de items y un término de búsqueda, esta función filtra los
 * items que coinciden y los ordena, priorizando las coincidencias exactas.
 *
 * @param {object[]} items - Un arreglo de objetos, cada uno con una propiedad `nombre`.
 * @param {string} query - El término de búsqueda.
 * @returns {object[]} Un nuevo arreglo con los items filtrados y ordenados por relevancia.
 */
function buscarYRankear(items, query) {
  // 1. Validación: si no hay query, no hay resultados.
  if (!query || query.trim() === '') {
    return [];
  }

  const queryEnMinusculas = query.toLowerCase();

  // 2. Filtrado: encontrar todos los items que contengan el query.
  const resultadosFiltrados = items.filter(item =>
    item.nombre.toLowerCase().includes(queryEnMinusculas)
  );

  // 3. Ordenamiento (Ranking): priorizar coincidencias exactas.
  resultadosFiltrados.sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    const esCoincidenciaExactaA = nombreA === queryEnMinusculas;
    const esCoincidenciaExactaB = nombreB === queryEnMinusculas;

    // Si A es exacta y B no, A va primero.
    if (esCoincidenciaExactaA && !esCoincidenciaExactaB) {
      return -1;
    }
    // Si B es exacta y A no, B va primero.
    if (!esCoincidenciaExactaA && esCoincidenciaExactaB) {
      return 1;
    }
    // Si ambos son iguales (exactos o parciales), ordenar alfabéticamente.
    return nombreA.localeCompare(nombreB);
  });

  return resultadosFiltrados;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Motor de Búsqueda (Ejercicio 22) ---");

const inventario = [
  { id: 1, nombre: 'Laptop' },
  { id: 2, nombre: 'Teclado' },
  { id: 3, nombre: 'Laptop Gamer' },
  { id: 4, nombre: 'Mouse' },
  { id: 5, nombre: 'Monitor para Laptop' },
];

const query1 = 'Laptop';
console.log(`\nResultados para la búsqueda "${query1}":`, buscarYRankear(inventario, query1));

const query2 = 'key';
console.log(`\nResultados para la búsqueda "${query2}":`, buscarYRankear(inventario, query2));

const query3 = 'Silla';
console.log(`\nResultados para la búsqueda "${query3}":`, buscarYRankear(inventario, query3));

const query4 = ' ';
console.log(`\nResultados para la búsqueda con query vacío:`, buscarYRankear(inventario, query4));

console.log("\n--- Pruebas Finalizadas ---");