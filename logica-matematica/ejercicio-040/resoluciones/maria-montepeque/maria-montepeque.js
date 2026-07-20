// Ejercicio 040 - Simulaciones con formulas

const CLASIFICACIONES = [
  { minimo: 30, nombre: 'elite' },
  { minimo: 20, nombre: 'competitivo' },
  { minimo: 10, nombre: 'regular' },
  { minimo: -Infinity, nombre: 'bajo' },
];

function calcularPromedio(participantes) {
  const suma = participantes.reduce((acc, valor) => acc + valor, 0);
  return suma / participantes.length;
}

function obtenerClasificacion(puntaje) {
  return CLASIFICACIONES.find(({ minimo }) => puntaje >= minimo).nombre;
}

function simularFormula({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const promedio = calcularPromedio(participantes);
  const puntajeFinal = Math.ceil(promedio + bono - penalizacion);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion:
      'se promedio a los participantes, se sumo el bono y se resto la penalizacion, redondeando hacia arriba.',
  };
}

module.exports = { simularFormula };

// Pruebas manuales

console.log(
  simularFormula({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 })
);
// Esperado: { puntaje_final: 27, clasificacion: 'competitivo', explicacion: '...' }

console.log(simularFormula({ participantes: [], bono: 5, penalizacion: 2 }));
// Caso borde: lista de participantes vacia
// Esperado: { puntaje_final: 0, clasificacion: 'sin_datos', explicacion: '...' }