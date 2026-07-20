/**
 * EJERCICIO 14: Verificador de Números de Armstrong
 *
 * Dada un número entero, esta función determina si es un Número de Armstrong.
 *
 * @param {number} numero - El número a verificar.
 * @returns {boolean} Devuelve `true` si es un Número de Armstrong, `false` en caso contrario.
 */
function esNumeroArmstrong(numero) {
  if (numero < 0) {
    return false;
  }

  const numeroComoString = String(numero);
  const numeroDeDigitos = numeroComoString.length;
  let suma = 0;
  let numTemp = numero;

  while (numTemp > 0) {
    const digito = numTemp % 10;
    suma += Math.pow(digito, numeroDeDigitos);
    numTemp = Math.floor(numTemp / 10);
  }

  return suma === numero;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Números de Armstrong (Ejercicio 14) ---");

// Prueba 1: Un Número de Armstrong.
console.log("\nPrueba 1 (153 es Armstrong?):", esNumeroArmstrong(153)); // Esperado: true

// Prueba 2: Un número que no es de Armstrong.
console.log("\nPrueba 2 (123 es Armstrong?):", esNumeroArmstrong(123)); // Esperado: false

// Prueba 3: Un número de un solo dígito.
console.log("\nPrueba 3 (9 es Armstrong?):", esNumeroArmstrong(9)); // Esperado: true

// Prueba 4: Otro Número de Armstrong.
console.log("\nPrueba 4 (371 es Armstrong?):", esNumeroArmstrong(371)); // Esperado: true

console.log("\n--- Pruebas Finalizadas ---");