/**
 * EJERCICIO 17: Descomposición en Factores Primos
 *
 * Dada un número entero, esta función devuelve un arreglo con sus
 * factores primos.
 *
 * @param {number} numero - El número a descomponer.
 * @returns {number[]|string} Un arreglo con los factores primos o un mensaje de error.
 */
function descomponerEnFactoresPrimos(numero) {
  if (!Number.isInteger(numero) || numero <= 1) {
    return "Error: La entrada debe ser un número entero mayor que 1.";
  }

  const factores = [];
  let n = numero;

  // Manejar el factor 2.
  while (n % 2 === 0) {
    factores.push(2);
    n /= 2;
  }

  // Manejar los factores impares.
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factores.push(i);
      n /= i;
    }
  }

  // Si queda un número mayor que 2, es un factor primo.
  if (n > 2) {
    factores.push(n);
  }

  return factores;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Descomposición en Factores Primos (Ejercicio 17) ---");

// Prueba 1: Un número compuesto.
console.log("\nPrueba 1 (Factores de 360):", descomponerEnFactoresPrimos(360));
// Esperado: [2, 2, 2, 3, 3, 5]

// Prueba 2: Un número primo.
console.log("\nPrueba 2 (Factores de 29):", descomponerEnFactoresPrimos(29));
// Esperado: [29]

// Prueba 3: Otro número compuesto.
console.log("\nPrueba 3 (Factores de 84):", descomponerEnFactoresPrimos(84));
// Esperado: [2, 2, 3, 7]

// Prueba 4: Con una entrada inválida.
console.log("\nPrueba 4 (Entrada 1):", descomponerEnFactoresPrimos(1));

console.log("\n--- Pruebas Finalizadas ---");