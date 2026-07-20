// Ejercicio 060 - Logica matematica: simulaciones con formulas

const CLASIFICACIONES = [
  { min: 25, nombre: 'competitivo' },
  { min: 15, nombre: 'intermedio' },
  { min: -Infinity, nombre: 'principiante' },
];

function obtenerClasificacion(puntaje) {
  return CLASIFICACIONES.find(({ min }) => puntaje >= min).nombre;
}

function calcularPuntajeFinal(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'No hay participantes para calcular el puntaje.',
    };
  }

  const promedio =
    participantes.reduce((acumulado, valor) => acumulado + valor, 0) /
    participantes.length;

  const puntajeFinal = Math.round(promedio + bono - penalizacion);
  const clasificacion = obtenerClasificacion(puntajeFinal);

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `Se promediaron ${participantes.length} participantes (${promedio.toFixed(
      2,
    )}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}), resultando en ${puntajeFinal} puntos, clasificado como "${clasificacion}".`,
  };
}

// Pruebas manuales

// Caso normal
console.log(calcularPuntajeFinal([12, 18, 25, 30], 8, 3));
// { puntaje_final: 26, clasificacion: 'competitivo', explicacion: '...' }

// Caso borde: lista vacia
console.log(calcularPuntajeFinal([], 8, 3));
// { puntaje_final: 0, clasificacion: 'sin_datos', explicacion: '...' }

// Caso borde: puntaje bajo
console.log(calcularPuntajeFinal([2, 4], 0, 5));
// promedio = 3, puntaje_final = -2, clasificacion 'principiante'

module.exports = { calcularPuntajeFinal };