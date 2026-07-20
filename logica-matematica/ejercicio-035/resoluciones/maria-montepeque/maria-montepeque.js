'use strict';

// Ejercicio 035 - logica matematica

const RANGOS_CLASIFICACION = Object.freeze([
  { minimo: 25, nombre: 'competitivo' },
  { minimo: 15, nombre: 'intermedio' },
  { minimo: -Infinity, nombre: 'principiante' },
]);

function obtenerMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function clasificar(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.minimo).nombre;
}

function calcularPuntaje({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }
  const mediana = Math.round(obtenerMediana(participantes));
  const puntaje_final = mediana + bono - penalizacion;
  return {
    puntaje_final,
    clasificacion: clasificar(puntaje_final),
    explicacion: `se tomo la mediana de los participantes (${mediana}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}).`,
  };
}

module.exports = { calcularPuntaje };

if (require.main === module) {
  console.log(calcularPuntaje({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 }));
  console.log(calcularPuntaje({ participantes: [], bono: 5, penalizacion: 2 }));
  console.log(calcularPuntaje({ participantes: [10], bono: 0, penalizacion: 0 }));
}