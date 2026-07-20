/**
 * EJERCICIO 16: Clasificador de Números (Perfecto, Abundante, Deficiente)
 *
 * Dada un número entero, esta función lo clasifica como Perfecto,
 * Abundante o Deficiente.
 *
 * @param {number} numero - El número a clasificar.
 * @returns {string} La clasificación del número.
 */
function clasificarNumero(numero) {
  if (!Number.isInteger(numero) || numero <= 0) {
    return "Error: La entrada debe ser un número entero positivo.";
  }

  if (numero === 1) {
    return "Deficiente"; // 1 es deficiente por convención (suma de divisores es 0).
  }

  let sumaDeDivisores = 1;

  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      sumaDeDivisores += i;
      if (i * i !== numero) {
        sumaDeDivisores += numero / i;
      }
    }
  }

  if (sumaDeDivisores > numero) {
    return "Abundante";
  } else if (sumaDeDivisores < numero) {
    return "Deficiente";
  } else {
    return "Perfecto";
  }
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Clasificador de Números (Ejercicio 16) ---");

console.log("\nPrueba 1 (Clasificación de 12):", clasificarNumero(12)); // Esperado: Abundante

console.log("\nPrueba 2 (Clasificación de 10):", clasificarNumero(10)); // Esperado: Deficiente

console.log("\nPrueba 3 (Clasificación de 28):", clasificarNumero(28)); // Esperado: Perfecto

console.log("\nPrueba 4 (Clasificación de 1):", clasificarNumero(1)); // Esperado: Deficiente

console.log("\n--- Pruebas Finalizadas ---");