/**
 * EJERCICIO 11: Verificador de Números Palíndromos
 *
 * Dada un número entero, esta función determina si es un palíndromo.
 *
 * @param {number} numero - El número a verificar.
 * @returns {boolean} Devuelve `true` si es un palíndromo, `false` en caso contrario.
 */
function esNumeroPalindromo(numero) {
  // Por convención, los números negativos no son palíndromos.
  if (numero < 0) {
    return false;
  }

  const original = numero;
  let revertido = 0;
  let num = numero;

  while (num > 0) {
    const ultimoDigito = num % 10;
    revertido = (revertido * 10) + ultimoDigito;
    num = Math.floor(num / 10);
  }

  return original === revertido;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Números Palíndromos (Ejercicio 11) ---");

console.log("\nPrueba 1 (121 es palíndromo?):", esNumeroPalindromo(121)); // Esperado: true

console.log("\nPrueba 2 (123 es palíndromo?):", esNumeroPalindromo(123)); // Esperado: false

console.log("\nPrueba 3 (8 es palíndromo?):", esNumeroPalindromo(8)); // Esperado: true

console.log("\nPrueba 4 (-121 es palíndromo?):", esNumeroPalindromo(-121)); // Esperado: false

console.log("\n--- Pruebas Finalizadas ---");