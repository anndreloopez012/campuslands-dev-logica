/**
 * EJERCICIO 23: Cálculo de Determinante de una Matriz
 *
 * Dada una matriz cuadrada (2x2 o 3x3), esta función calcula su determinante.
 *
 * @param {number[][]} matriz - La matriz para calcular el determinante.
 * @returns {number|string} El valor del determinante o un mensaje de error.
 */
function calcularDeterminante(matriz) {
  const filas = matriz.length;
  if (filas === 0) return "Error: La matriz está vacía.";
  const columnas = matriz[0].length;

  if (filas !== columnas) {
    return "Error: La matriz debe ser cuadrada.";
  }

  // Caso para matriz 2x2
  if (filas === 2) {
    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
  }

  // Caso para matriz 3x3 (Regla de Sarrus)
  if (filas === 3) {
    const a = matriz[0][0];
    const b = matriz[0][1];
    const c = matriz[0][2];
    const d = matriz[1][0];
    const e = matriz[1][1];
    const f = matriz[1][2];
    const g = matriz[2][0];
    const h = matriz[2][1];
    const i = matriz[2][2];

    const sumaPositiva = (a * e * i) + (b * f * g) + (c * d * h);
    const sumaNegativa = (c * e * g) + (b * d * i) + (a * f * h);

    return sumaPositiva - sumaNegativa;
  }

  return "Error: La función solo soporta matrices de 2x2 y 3x3.";
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Cálculo de Determinante (Ejercicio 23) ---");

// Prueba 1: Matriz 2x2.
const matriz1 = [
  [1, 2],
  [3, 4]
];
console.log("\nPrueba 1 (Determinante de matriz 2x2):", calcularDeterminante(matriz1)); // Esperado: -2

// Prueba 2: Matriz 3x3.
const matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("\nPrueba 2 (Determinante de matriz 3x3):", calcularDeterminante(matriz2)); // Esperado: 0

// Prueba 3: Otra matriz 3x3.
const matriz3 = [
  [3, 2, 1],
  [1, 1, 3],
  [0, 2, 4]
];
console.log("\nPrueba 3 (Otra matriz 3x3):", calcularDeterminante(matriz3)); // Esperado: -12

// Prueba 4: Matriz no cuadrada.
const matriz4 = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log("\nPrueba 4 (Matriz no cuadrada):", calcularDeterminante(matriz4));

console.log("\n--- Pruebas Finalizadas ---");