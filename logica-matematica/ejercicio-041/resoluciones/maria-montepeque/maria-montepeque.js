// Ejercicio 041 - Operaciones aritméticas controladas

const LIMITE_MINIMO = 0;
const LIMITE_MAXIMO = 100;

const REGLAS_CLASIFICACION = [
  { minimo: 80, etiqueta: "competitivo" },
  { minimo: 50, etiqueta: "intermedio" },
  { minimo: 0, etiqueta: "principiante" },
];

function normalizarNumero(valor) {
  return Number.isFinite(valor) ? valor : 0;
}

function calcularPuntajeControlado(puntosBase, bonificacion, penalizacion) {
  const puntaje = normalizarNumero(puntosBase) + normalizarNumero(bonificacion) - normalizarNumero(penalizacion);
  return Math.min(LIMITE_MAXIMO, Math.max(LIMITE_MINIMO, puntaje));
}

function clasificarPuntaje(puntaje) {
  const regla = REGLAS_CLASIFICACION.find((r) => puntaje >= r.minimo);
  return regla.etiqueta;
}

function calcularPuntajesJugadores(jugadores) {
  if (!Array.isArray(jugadores) || jugadores.length === 0) {
    return [];
  }

  return jugadores.map(({ nombre, puntosBase, bonificacion, penalizacion }) => {
    const puntajeFinal = calcularPuntajeControlado(puntosBase, bonificacion, penalizacion);

    return {
      nombre,
      puntajeFinal,
      clasificacion: clasificarPuntaje(puntajeFinal),
    };
  });
}

module.exports = { calcularPuntajesJugadores };

// Pruebas manuales

console.log(
  calcularPuntajesJugadores([
    { nombre: "Kai", puntosBase: 75, bonificacion: 10, penalizacion: 3 },
    { nombre: "Noa", puntosBase: 40, bonificacion: 5, penalizacion: 15 },
    { nombre: "Ren", puntosBase: 95, bonificacion: 20, penalizacion: 0 },
  ])
);
// Esperado:
// [
//   { nombre: 'Kai', puntajeFinal: 82, clasificacion: 'competitivo' },
//   { nombre: 'Noa', puntajeFinal: 30, clasificacion: 'principiante' },
//   { nombre: 'Ren', puntajeFinal: 100, clasificacion: 'competitivo' }
// ]

console.log(calcularPuntajesJugadores([]));
// Esperado: []