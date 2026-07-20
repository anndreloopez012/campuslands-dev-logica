'use strict';

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

function revisarDibujos(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay elementos para revisar.',
    };
  }

  const elementoPrioritario = items.reduce((masPrioritario, actual) => {
    const prioridadActual = PRIORIDAD[actual];
    const prioridadAcumulada = PRIORIDAD[masPrioritario];

    if (prioridadActual === undefined) {
      return masPrioritario;
    }
    if (prioridadAcumulada === undefined || prioridadActual < prioridadAcumulada) {
      return actual;
    }
    return masPrioritario;
  }, items[0]);

  if (PRIORIDAD[elementoPrioritario] === undefined) {
    return {
      accion: 'sin accion',
      motivo: 'ningun estado reconocido en la lista.',
    };
  }

  return {
    accion: `revisar ${elementoPrioritario}`,
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  };
}

console.log(revisarDibujos(['aprobado', 'pendiente', 'bloqueado']));
console.log(revisarDibujos([]));
console.log(revisarDibujos(['en-proceso', 'archivado']));

module.exports = { revisarDibujos };