/**
 * EJERCICIO 07: Criba de Eratóstenes
 *
 * Dada un número n, esta función encuentra todos los números primos
 * desde 2 hasta n utilizando el algoritmo de la Criba de Eratóstenes.
 *
 * @param {number} n - El número límite hasta el cual encontrar primos.
 * @returns {number[]|string} Un arreglo con los números primos o un mensaje de error.
 */
function cribaDeEratostenes(n) {
  // Validación: el algoritmo funciona para n >= 2.
  if (n < 2) {
    return "Error: El número debe ser mayor o igual a 2.";
  }

  // 1. Crear una lista booleana e inicializarla a true.
  const esPrimo = new Array(n + 1).fill(true);

  // 0 y 1 no son primos.
  esPrimo[0] = false;
  esPrimo[1] = false;

  // 2. Proceso de tachado.
  for (let p = 2; p * p <= n; p++) {
    // Si esPrimo[p] no ha sido tachado, entonces es un primo.
    if (esPrimo[p]) {
      // Tachar todos los múltiplos de p.
      for (let i = p * p; i <= n; i += p) {
        esPrimo[i] = false;
      }
    }
  }

  // 3. Recolectar los números primos.
  const primos = [];
  for (let i = 2; i <= n; i++) {
    if (esPrimo[i]) {
      primos.push(i);
    }
  }

  return primos;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de la Criba de Eratóstenes (Ejercicio 07) ---");

console.log("\nPrueba 1 (n=30):", cribaDeEratostenes(30));

console.log("\nPrueba 2 (n=10):", cribaDeEratostenes(10));

console.log("\nPrueba 3 (n=1):", cribaDeEratostenes(1));

console.log("\n--- Pruebas Finalizadas ---");