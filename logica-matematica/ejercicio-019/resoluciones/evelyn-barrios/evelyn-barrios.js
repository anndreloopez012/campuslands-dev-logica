/**
 * EJERCICIO 19: Triángulo de Pascal
 *
 * Dada un número n, esta función genera las primeras n filas
 * del Triángulo de Pascal.
 *
 * @param {number} numFilas - El número de filas a generar.
 * @returns {number[][]} Un arreglo de arreglos representando el triángulo.
 */
function generarTrianguloPascal(numFilas) {
  if (numFilas === 0) {
    return [];
  }
  if (numFilas === 1) {
    return [[1]];
  }

  const triangulo = [[1]];

  for (let i = 1; i < numFilas; i++) {
    const filaAnterior = triangulo[i - 1];
    const nuevaFila = [1]; // Todas las filas empiezan con 1.

    for (let j = 0; j < filaAnterior.length - 1; j++) {
      // Cada elemento es la suma de los dos de arriba.
      nuevaFila.push(filaAnterior[j] + filaAnterior[j + 1]);
    }

    nuevaFila.push(1); // Todas las filas terminan con 1.
    triangulo.push(nuevaFila);
  }

  return triangulo;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Triángulo de Pascal (Ejercicio 19) ---");

// Prueba 1: Generar 5 filas.
console.log("\nPrueba 1 (n=5):");
generarTrianguloPascal(5).forEach(fila => console.log(JSON.stringify(fila)));

console.log("\nPrueba 2 (n=1):", generarTrianguloPascal(1));

console.log("\nPrueba 3 (n=0):", generarTrianguloPascal(0));

console.log("\n--- Pruebas Finalizadas ---");