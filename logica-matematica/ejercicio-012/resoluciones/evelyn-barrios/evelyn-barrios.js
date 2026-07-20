/**
 * EJERCICIO 12: Conversor de Números Romanos
 *
 * Dada una cadena de texto con un número romano, esta función
 * lo convierte a su equivalente en número entero.
 *
 * @param {string} romano - La cadena de texto con el número romano.
 * @returns {number} El número entero equivalente.
 */
function convertirRomanoAEntero(romano) {
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let resultado = 0;

  for (let i = 0; i < romano.length; i++) {
    const valorActual = valores[romano[i]];
    const valorSiguiente = valores[romano[i + 1]];

    // Si el valor actual es menor que el siguiente, se resta.
    if (valorSiguiente && valorActual < valorSiguiente) {
      resultado -= valorActual;
    } else {
      // Si no, se suma.
      resultado += valorActual;
    }
  }

  return resultado;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Conversor de Romanos (Ejercicio 12) ---");

console.log("\nPrueba 1 ('III'):", convertirRomanoAEntero("III")); // Esperado: 3

console.log("\nPrueba 2 ('IV'):", convertirRomanoAEntero("IV")); // Esperado: 4

console.log("\nPrueba 3 ('LVIII'):", convertirRomanoAEntero("LVIII")); // Esperado: 58

console.log("\nPrueba 4 ('MCMXCIV'):", convertirRomanoAEntero("MCMXCIV")); // Esperado: 1994

console.log("\n--- Pruebas Finalizadas ---");