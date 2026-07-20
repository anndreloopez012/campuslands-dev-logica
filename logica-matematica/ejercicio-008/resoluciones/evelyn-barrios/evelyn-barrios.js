/**
 * EJERCICIO 08: Máximo Común Divisor (MCD)
 *
 * Dada dos números enteros, esta función calcula su Máximo Común Divisor
 * utilizando el Algoritmo de Euclides.
 *
 * @param {number} a - El primer número entero.
 * @param {number} b - El segundo número entero.
 * @returns {number|string} El MCD de los dos números o un mensaje de error.
 */
function maximoComunDivisor(a, b) {
  // Validación: asegurar que son números enteros positivos.
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
    return "Error: Ambos números deben ser enteros positivos.";
  }

  // Algoritmo de Euclides iterativo.
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Máximo Común Divisor (Ejercicio 08) ---");

// Prueba 1: Caso estándar.
console.log("\nPrueba 1 (MCD de 48 y 18):", maximoComunDivisor(48, 18)); // Esperado: 6

// Prueba 2: Con números más grandes.
console.log("\nPrueba 2 (MCD de 270 y 192):", maximoComunDivisor(270, 192)); // Esperado: 6

// Prueba 3: Números primos entre sí (coprimos).
console.log("\nPrueba 3 (MCD de 17 y 23):", maximoComunDivisor(17, 23)); // Esperado: 1

// Prueba 4: Con una entrada inválida.
console.log("\nPrueba 4 (entrada inválida):", maximoComunDivisor(10, -5));

console.log("\n--- Pruebas Finalizadas ---");