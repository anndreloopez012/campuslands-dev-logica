/**
 * EJERCICIO 06: Secuencia de Fibonacci
 *
 * Dada un número n, esta función genera los primeros n términos
 * de la secuencia de Fibonacci.
 *
 * @param {number} n - El número de términos de la secuencia a generar.
 * @returns {number[]|string} Un arreglo con la secuencia o un mensaje de error.
 */
function generarFibonacci(n) {
  // Validación: n debe ser un número no negativo.
  if (n < 0) {
    return "Error: El número de términos no puede ser negativo.";
  }

  // Casos base.
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  // Inicializamos la secuencia con los dos primeros términos.
  const secuencia = [0, 1];

  // Generamos los términos restantes hasta alcanzar n.
  while (secuencia.length < n) {
    const ultimo = secuencia[secuencia.length - 1];
    const penultimo = secuencia[secuencia.length - 2];
    secuencia.push(ultimo + penultimo);
  }

  return secuencia;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de la Secuencia de Fibonacci (Ejercicio 06) ---");

console.log("\nPrueba 1 (n=10):", generarFibonacci(10));

console.log("\nPrueba 2 (n=1):", generarFibonacci(1));

console.log("\nPrueba 3 (n=0):", generarFibonacci(0));

console.log("\nPrueba 4 (n=-5):", generarFibonacci(-5));

console.log("\n--- Pruebas Finalizadas ---");