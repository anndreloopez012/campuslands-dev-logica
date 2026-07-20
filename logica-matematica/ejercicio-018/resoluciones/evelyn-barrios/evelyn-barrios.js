/**
 * EJERCICIO 18: Verificador de Anagramas
 *
 * Dada dos cadenas de texto, esta función determina si son anagramas.
 *
 * @param {string} textoA - La primera cadena de texto.
 * @param {string} textoB - La segunda cadena de texto.
 * @returns {boolean} Devuelve `true` si son anagramas, `false` en caso contrario.
 */
function sonAnagramas(textoA, textoB) {
  // Normalizamos los textos: quitamos espacios y convertimos a minúsculas.
  const strA = textoA.replace(/\s/g, '').toLowerCase();
  const strB = textoB.replace(/\s/g, '').toLowerCase();

  // Si las longitudes son diferentes, no pueden ser anagramas.
  if (strA.length !== strB.length) {
    return false;
  }

  // Creamos mapas de frecuencia para cada cadena.
  const frecuenciaA = {};
  const frecuenciaB = {};

  for (const char of strA) {
    frecuenciaA[char] = (frecuenciaA[char] || 0) + 1;
  }

  for (const char of strB) {
    frecuenciaB[char] = (frecuenciaB[char] || 0) + 1;
  }

  // Comparamos los mapas de frecuencia.
  const clavesA = Object.keys(frecuenciaA);
  if (clavesA.length !== Object.keys(frecuenciaB).length) {
    return false;
  }

  for (const clave of clavesA) {
    if (frecuenciaA[clave] !== frecuenciaB[clave]) {
      return false;
    }
  }

  return true;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Verificador de Anagramas (Ejercicio 18) ---");

console.log("\nPrueba 1 ('roma', 'amor'):", sonAnagramas('roma', 'amor')); // Esperado: true

console.log("\nPrueba 2 ('hola', 'adios'):", sonAnagramas('hola', 'adios')); // Esperado: false

console.log("\nPrueba 3 ('Amor Roma', 'roma amor'):", sonAnagramas('Amor Roma', 'roma amor')); // Esperado: true

console.log("\nPrueba 4 ('casa', 'casas'):", sonAnagramas('casa', 'casas')); // Esperado: false

console.log("\n--- Pruebas Finalizadas ---");