'use strict';

const PRIORIDAD_ESTADO = {
  bloqueado: 0,
  pendiente: 1,
  aprobado: 2,
};

const PRIORIDAD_URGENCIA = {
  alta: 0,
  media: 1,
  baja: 2,
};

function compararOpciones(opciones) {
  if (!Array.isArray(opciones) || opciones.length === 0) {
    return {
      accion: 'sin opciones para revisar',
      motivo: 'la lista de opciones esta vacia o no es valida.',
    };
  }

  const validas = opciones.filter(
    (op) =>
      op &&
      typeof op.nombre === 'string' &&
      PRIORIDAD_ESTADO[op.estado] !== undefined &&
      PRIORIDAD_URGENCIA[op.urgencia] !== undefined
  );

  if (validas.length === 0) {
    return {
      accion: 'sin opciones validas para revisar',
      motivo: 'ninguna opcion tiene un estado o urgencia reconocidos.',
    };
  }

  const ganadora = validas.reduce((mejor, actual) => {
    if (!mejor) return actual;

    const estadoActual = PRIORIDAD_ESTADO[actual.estado];
    const estadoMejor = PRIORIDAD_ESTADO[mejor.estado];

    if (estadoActual < estadoMejor) return actual;
    if (estadoActual > estadoMejor) return mejor;

    const urgenciaActual = PRIORIDAD_URGENCIA[actual.urgencia];
    const urgenciaMejor = PRIORIDAD_URGENCIA[mejor.urgencia];

    if (urgenciaActual < urgenciaMejor) return actual;

    return mejor;
  }, null);

  return {
    accion: `revisar ${ganadora.nombre}`,
    motivo: `la regla prioriza estado "${ganadora.estado}" con urgencia "${ganadora.urgencia}" antes que el resto de opciones.`,
  };
}

module.exports = { compararOpciones };

console.log(
  compararOpciones([
    { nombre: 'mesa-1', estado: 'aprobado', urgencia: 'baja' },
    { nombre: 'mesa-2', estado: 'pendiente', urgencia: 'alta' },
    { nombre: 'mesa-3', estado: 'bloqueado', urgencia: 'media' },
  ])
);

console.log(compararOpciones([]));

console.log(
  compararOpciones([
    { nombre: 'mesa-4', estado: 'bloqueado', urgencia: 'media' },
    { nombre: 'mesa-5', estado: 'bloqueado', urgencia: 'alta' },
  ])
);

console.log(
  compararOpciones([
    { nombre: 'mesa-6', estado: 'desconocido', urgencia: 'alta' },
    { nombre: 'mesa-7', estado: 'pendiente', urgencia: 'baja' },
  ])
);