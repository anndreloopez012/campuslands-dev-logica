// Ejercicio 057 - Estadisticas de ranking

const CLASIFICACIONES = [
  { minimo: 35, etiqueta: 'elite' },
  { minimo: 25, etiqueta: 'competitivo' },
  { minimo: 15, etiqueta: 'intermedio' },
  { minimo: -Infinity, etiqueta: 'principiante' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function obtenerClasificacion(puntaje) {
  return CLASIFICACIONES.find((regla) => puntaje >= regla.minimo).etiqueta;
}

function calcularEstadisticasRanking(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: null,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular estadisticas',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeFinal = Math.round(mediana + bono - penalizacion);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `se calculo la mediana de los participantes (${mediana}), se sumo el bono y se resto la penalizacion segun las reglas.`,
  };
}

// Pruebas manuales

// Caso normal
console.log(calcularEstadisticasRanking([12, 18, 25, 30], 8, 3));
// Esperado: { puntaje_final: 27, clasificacion: 'competitivo', explicacion: '...' }

// Caso borde: lista vacia
console.log(calcularEstadisticasRanking([], 8, 3));
// Esperado: { puntaje_final: null, clasificacion: 'sin_datos', explicacion: '...' }

// Caso borde: un solo participante, puntaje bajo
console.log(calcularEstadisticasRanking([10], 5, 2));
// Esperado: { puntaje_final: 13, clasificacion: 'principiante', explicacion: '...' }

module.exports = { calcularEstadisticasRanking };