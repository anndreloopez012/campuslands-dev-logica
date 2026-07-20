/**
 * EJERCICIO 21: Transposición de una Matriz
 *
 * Dada una matriz (arreglo de arreglos), esta función calcula su transpuesta.
 *
 * @param {number[][]} matriz - La matriz a transponer.
 * @returns {number[][]|string} La matriz transpuesta o un mensaje de error.
 */
function transponerMatriz(matriz) {
  if (!matriz || matriz.length === 0 || matriz[0].length === 0) {
    return "Error: La matriz no puede estar vacía.";
  }

  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Crear la matriz transpuesta con las dimensiones invertidas.
  const transpuesta = [];
  for (let i = 0; i < columnas; i++) {
    transpuesta[i] = [];
  }

  // Llenar la matriz transpuesta.
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      transpuesta[j][i] = matriz[i][j];
    }
  }

  return transpuesta;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Transposición de Matriz (Ejercicio 21) ---");

const matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("\nPrueba 1 (Matriz 3x3):", transponerMatriz(matriz1));

const matriz2 = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log("\nPrueba 2 (Matriz 3x2):", transponerMatriz(matriz2));

const matriz3 = [[10, 20, 30]];
console.log("\nPrueba 3 (Matriz 1x3):", transponerMatriz(matriz3));

console.log("\n--- Pruebas Finalizadas ---");