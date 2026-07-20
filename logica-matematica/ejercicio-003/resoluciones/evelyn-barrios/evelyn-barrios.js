/**
 * EJERCICIO 03: Área de un Círculo
 *
 * Dada la longitud del radio de un círculo, esta función
 * calcula y devuelve su área.
 *
 * @param {number} radio - La longitud del radio del círculo.
 * @returns {number|string} El área del círculo o un mensaje de error.
 */
function calcularAreaCirculo(radio) {
  // Validación: el radio debe ser un número positivo.
  if (radio <= 0) {
    return "Error: El radio debe ser un número positivo.";
  }

  // Aplicamos la fórmula del área: A = PI * r^2
  const area = Math.PI * (radio ** 2);

  // Redondeamos a 2 decimales para un resultado más limpio y lo convertimos a número.
  return parseFloat(area.toFixed(2));
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Área de un Círculo (Ejercicio 03) ---");

// Prueba 1: Radio de 1.
const resultado1 = calcularAreaCirculo(1);
console.log("\nPrueba 1 (radio 1):", resultado1); // Esperado: 3.14

// Prueba 2: Radio de 10.
const resultado2 = calcularAreaCirculo(10);
console.log("\nPrueba 2 (radio 10):", resultado2); // Esperado: 314.16

// Prueba 3: Radio de 2.5.
const resultado3 = calcularAreaCirculo(2.5);
console.log("\nPrueba 3 (radio 2.5):", resultado3); // Esperado: 19.63

// Prueba 4: Con una entrada inválida.
const resultado4 = calcularAreaCirculo(-5);
console.log("\nPrueba 4 (entrada inválida):", resultado4);

console.log("\n--- Pruebas Finalizadas ---");