/**
 * EJERCICIO 15: Verificador de Números Perfectos
 *
 * Dada un número entero, esta función determina si es un Número Perfecto.
 *
 * @param {number} numero - El número a verificar.
 * @returns {boolean} Devuelve `true` si es un Número Perfecto, `false` en caso contrario.
 */
function esNumeroPerfecto(numero) {
  // Los números perfectos son enteros positivos.
  if (numero <= 1) {
    return false;
  }

  let sumaDeDivisores = 1; // Empezamos en 1 porque 1 siempre es un divisor propio.

  // Iteramos hasta la raíz cuadrada para optimizar.
  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      sumaDeDivisores += i;
      // Si i no es la raíz cuadrada, añadimos el divisor correspondiente.
      if (i * i !== numero) {
        sumaDeDivisores += numero / i;
      }
    }
  }

  return sumaDeDivisores === numero;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Números Perfectos (Ejercicio 15) ---");

// Prueba 1: Un número perfecto.
console.log("\nPrueba 1 (28 es perfecto?):", esNumeroPerfecto(28)); // Esperado: true

// Prueba 2: Un número que no es perfecto.
console.log("\nPrueba 2 (12 es perfecto?):", esNumeroPerfecto(12)); // Esperado: false

// Prueba 3: El primer número perfecto.
console.log("\nPrueba 3 (6 es perfecto?):", esNumeroPerfecto(6)); // Esperado: true

// Prueba 4: Un número primo (nunca son perfectos).
console.log("\nPrueba 4 (29 es perfecto?):", esNumeroPerfecto(29)); // Esperado: false

console.log("\n--- Pruebas Finalizadas ---");