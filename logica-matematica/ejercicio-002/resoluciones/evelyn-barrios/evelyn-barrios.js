/**
 * EJERCICIO 02: Teorema de Pitágoras
 *
 * Dada la longitud de los dos catetos de un triángulo rectángulo,
 * esta función calcula la longitud de la hipotenusa.
 *
 * @param {number} catetoA - La longitud del primer cateto.
 * @param {number} catetoB - La longitud del segundo cateto.
 * @returns {number|string} La longitud de la hipotenusa o un mensaje de error.
 */
function calcularHipotenusa(catetoA, catetoB) {
  // Validación: los lados de un triángulo deben ser números positivos.
  if (catetoA <= 0 || catetoB <= 0) {
    return "Error: Las longitudes de los catetos deben ser números positivos.";
  }

  // Aplicamos el Teorema de Pitágoras: c = sqrt(a^2 + b^2)
  const sumaDeCuadrados = (catetoA ** 2) + (catetoB ** 2);
  const hipotenusa = Math.sqrt(sumaDeCuadrados);

  return hipotenusa;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Teorema de Pitágoras (Ejercicio 02) ---");

// Prueba 1: Triángulo pitagórico clásico (3, 4, 5).
const resultado1 = calcularHipotenusa(3, 4);
console.log("\nPrueba 1 (catetos 3 y 4):", resultado1); // Esperado: 5

// Prueba 2: Con números más grandes.
const resultado2 = calcularHipotenusa(5, 12);
console.log("\nPrueba 2 (catetos 5 y 12):", resultado2); // Esperado: 13

// Prueba 3: Con números decimales.
const resultado3 = calcularHipotenusa(7.5, 10);
console.log("\nPrueba 3 (catetos 7.5 y 10):", resultado3); // Esperado: 12.5

// Prueba 4: Con una entrada inválida.
const resultado4 = calcularHipotenusa(-3, 4);
console.log("\nPrueba 4 (entrada inválida):", resultado4);

console.log("\n--- Pruebas Finalizadas ---");