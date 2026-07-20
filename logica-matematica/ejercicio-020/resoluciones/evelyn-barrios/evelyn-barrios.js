/**
 * EJERCICIO 20: Estadísticas Básicas (Media, Mediana, Moda)
 *
 * Dada una lista de números, esta función calcula su media, mediana y moda.
 *
 * @param {number[]} numeros - Un arreglo de números.
 * @returns {object|string} Un objeto con las estadísticas o un mensaje de error.
 */
function calcularEstadisticas(numeros) {
  if (!numeros || numeros.length === 0) {
    return "Error: El arreglo no puede estar vacío.";
  }

  // --- Media ---
  const media = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;

  // --- Mediana ---
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(numerosOrdenados.length / 2);
  let mediana;
  if (numerosOrdenados.length % 2 === 0) {
    mediana = (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2;
  } else {
    mediana = numerosOrdenados[mitad];
  }

  // --- Moda ---
  const frecuencia = {};
  for (const num of numeros) {
    frecuencia[num] = (frecuencia[num] || 0) + 1;
  }

  let maxFrecuencia = 0;
  let moda = [];
  for (const num in frecuencia) {
    if (frecuencia[num] > maxFrecuencia) {
      maxFrecuencia = frecuencia[num];
      moda = [Number(num)];
    } else if (frecuencia[num] === maxFrecuencia) {
      moda.push(Number(num));
    }
  }

  return {
    media: parseFloat(media.toFixed(2)),
    mediana,
    moda,
  };
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas de Estadísticas Básicas (Ejercicio 20) ---");

// Prueba 1: Caso estándar.
const datos1 = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log("\nPrueba 1 (Datos: [1, 2, 2, 3, 4, 5, 5, 5, 6]):", calcularEstadisticas(datos1));

// Prueba 2: Número par de elementos.
const datos2 = [1, 2, 3, 4, 5, 6];
console.log("\nPrueba 2 (Datos: [1, 2, 3, 4, 5, 6]):", calcularEstadisticas(datos2));

// Prueba 3: Múltiples modas.
const datos3 = [1, 1, 2, 2, 3];
console.log("\nPrueba 3 (Datos: [1, 1, 2, 2, 3]):", calcularEstadisticas(datos3));

console.log("\n--- Pruebas Finalizadas ---");