/**
 * EJERCICIO 10: Suma de Dígitos
 *
 * Dada un número entero, esta función calcula la suma de sus dígitos.
 *
 * @param {number} numero - El número entero.
 * @returns {number} La suma de los dígitos del número.
 */
function sumarDigitos(numero) {
  // Tomamos el valor absoluto para manejar números negativos.
  let num = Math.abs(numero);
  let suma = 0;

  // Mientras queden dígitos por procesar.
  while (num > 0) {
    // Obtenemos el último dígito con el operador módulo.
    suma += num % 10;
    // Eliminamos el último dígito.
    num = Math.floor(num / 10);
  }

  return suma;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Suma de Dígitos (Ejercicio 10) ---");

// Prueba 1: Número positivo.
console.log("\nPrueba 1 (suma de dígitos de 123):", sumarDigitos(123)); // Esperado: 6

// Prueba 2: Número negativo.
console.log("\nPrueba 2 (suma de dígitos de -456):", sumarDigitos(-456)); // Esperado: 15

// Prueba 3: Número de un solo dígito.
console.log("\nPrueba 3 (suma de dígitos de 8):", sumarDigitos(8)); // Esperado: 8

// Prueba 4: El número 0.
console.log("\nPrueba 4 (suma de dígitos de 0):", sumarDigitos(0)); // Esperado: 0

console.log("\n--- Pruebas Finalizadas ---");