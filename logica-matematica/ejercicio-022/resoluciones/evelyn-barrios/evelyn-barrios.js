/**
 * EJERCICIO 22: Multiplicación de Matrices
 *
 * Dadas dos matrices, esta función calcula su producto.
 *
 * @param {number[][]} matrizA - La primera matriz.
 * @param {number[][]} matrizB - La segunda matriz.
 * @returns {number[][]|string} La matriz resultante o un mensaje de error.
 */
function multiplicarMatrices(matrizA, matrizB) {
  const filasA = matrizA.length;
  const columnasA = matrizA[0].length;
  const filasB = matrizB.length;
  const columnasB = matrizB[0].length;

  // Validación: el número de columnas de A debe ser igual al número de filas de B.
  if (columnasA !== filasB) {
    return "Error: Las dimensiones de las matrices no son compatibles para la multiplicación.";
  }

  // Inicializar la matriz resultado con ceros.
  const resultado = new Array(filasA).fill(0).map(() => new Array(columnasB).fill(0));

  // Realizar la multiplicación.
  for (let i = 0; i < filasA; i++) {
    for (let j = 0; j < columnasB; j++) {
      for (let k = 0; k < columnasA; k++) {
        resultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return resultado;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Multiplicación de Matrices (Ejercicio 22) ---");

// Prueba 1: Multiplicación de matrices 2x2.
const matrizA1 = [
  [1, 2],
  [3, 4]
];
const matrizB1 = [
  [5, 6],
  [7, 8]
];
console.log("\nPrueba 1 (Matrices 2x2):", multiplicarMatrices(matrizA1, matrizB1));

// Prueba 2: Multiplicación de matrices 2x3 y 3x2.
const matrizA2 = [
  [1, 2, 3],
  [4, 5, 6]
];
const matrizB2 = [
  [7, 8],
  [9, 10],
  [11, 12]
];
console.log("\nPrueba 2 (Matrices 2x3 y 3x2):", multiplicarMatrices(matrizA2, matrizB2));

// Prueba 3: Dimensiones incompatibles.
const matrizA3 = [
  [1, 2],
  [3, 4]
];
const matrizB3 = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log("\nPrueba 3 (Dimensiones incompatibles):", multiplicarMatrices(matrizA3, matrizB3));

console.log("\n--- Pruebas Finalizadas ---");