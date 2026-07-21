/**
 * Resuelve el reto de mínimos y límites para el taller mecánico.
 *
 * El objetivo es determinar si el nivel de aceite de un motor es óptimo,
 * bajo o alto, basándose en su capacidad y el nivel actual.
 *
 * @param {number} capacidadMinima La capacidad mínima de aceite que el motor necesita (en litros).
 * @param {number} capacidadMaxima La capacidad máxima de aceite que el motor puede tener (en litros).
 * @param {number} nivelActual El nivel de aceite actual en el motor (en litros).
 * @returns {object} Un objeto con el estado del nivel de aceite ('nivel_bajo', 'nivel_alto', 'nivel_optimo') y una explicación.
 */
function resolverRetoTaller(capacidadMinima, capacidadMaxima, nivelActual) {
  if (nivelActual < capacidadMinima) {
    return {
      estado: 'nivel_bajo',
      explicacion: `El nivel de aceite (${nivelActual}L) está por debajo del mínimo requerido de ${capacidadMinima}L. Se necesita rellenar.`,
    };
  }

  if (nivelActual > capacidadMaxima) {
    return {
      estado: 'nivel_alto',
      explicacion: `El nivel de aceite (${nivelActual}L) supera el máximo permitido de ${capacidadMaxima}L. Se necesita drenar aceite.`,
    };
  }

  return {
    estado: 'nivel_optimo',
    explicacion: `El nivel de aceite (${nivelActual}L) está dentro del rango óptimo (${capacidadMinima}L - ${capacidadMaxima}L).`,
  };
}

// --- Casos de prueba ---

// Prueba 1: Caso normal (nivel óptimo)
const resultado1 = resolverRetoTaller(4, 6, 5);
console.log('Prueba 1 (Nivel Óptimo):');
console.log(resultado1);

// Prueba 2: Caso borde (nivel bajo)
const resultado2 = resolverRetoTaller(4, 6, 3.5);
console.log('\nPrueba 2 (Nivel Bajo):');
console.log(resultado2);

// Prueba 3: Caso borde (nivel alto)
const resultado3 = resolverRetoTaller(4, 6, 6.5);
console.log('\nPrueba 3 (Nivel Alto):');
console.log(resultado3);