'use strict';

// Prioridad numerica por estado: menor numero = mayor urgencia.
const PRIORIDAD_ESTADO = {
  bloqueado: 0,
  pendiente: 1,
  aprobado: 2,
};

const MOTIVOS_POR_ESTADO = {
  bloqueado: 'los pedidos bloqueados se revisan primero porque representan un riesgo.',
  pendiente: 'entre los pedidos sin riesgo, se atiende primero al que mas tiempo ha esperado.',
  aprobado: 'entre los pedidos sin riesgo, se atiende primero al que mas tiempo ha esperado.',
};

/**
 * Selecciona el siguiente pedido a atender en un puesto de comida urbana.
 * Estrategia de seleccion:
 *  1. Los pedidos bloqueados siempre tienen prioridad (riesgo a resolver).
 *  2. Entre pedidos del mismo estado, gana el que mas minutos ha esperado.
 *  3. Si hay empate total, gana el id mas bajo (orden de llegada).
 */
function seleccionarPedido(pedidos) {
  if (!Array.isArray(pedidos) || pedidos.length === 0) {
    return {
      accion: 'sin pedidos',
      motivo: 'no hay pedidos para procesar.',
      pedidoSeleccionado: null,
    };
  }

  const pedidosValidos = pedidos.filter(
    (p) => p && typeof p.estado === 'string' && PRIORIDAD_ESTADO[p.estado] !== undefined
  );

  if (pedidosValidos.length === 0) {
    return {
      accion: 'sin pedidos validos',
      motivo: 'ningun pedido tiene un estado reconocido.',
      pedidoSeleccionado: null,
    };
  }

  const seleccionado = pedidosValidos.reduce((mejor, actual) => {
    const prioridadMejor = PRIORIDAD_ESTADO[mejor.estado];
    const prioridadActual = PRIORIDAD_ESTADO[actual.estado];

    if (prioridadActual !== prioridadMejor) {
      return prioridadActual < prioridadMejor ? actual : mejor;
    }

    const esperaMejor = mejor.minutosEspera || 0;
    const esperaActual = actual.minutosEspera || 0;

    if (esperaActual !== esperaMejor) {
      return esperaActual > esperaMejor ? actual : mejor;
    }

    return mejor.id <= actual.id ? mejor : actual;
  });

  return {
    accion: `atender pedido ${seleccionado.id}`,
    motivo: MOTIVOS_POR_ESTADO[seleccionado.estado],
    pedidoSeleccionado: seleccionado,
  };
}

module.exports = { seleccionarPedido };

// --- pruebas manuales ---

// Caso normal: hay un pedido bloqueado, debe ganar sin importar espera.
console.log(seleccionarPedido([
  { id: 1, estado: 'aprobado', minutosEspera: 10 },
  { id: 2, estado: 'pendiente', minutosEspera: 25 },
  { id: 3, estado: 'bloqueado', minutosEspera: 5 },
]));

// Caso borde: lista vacia.
console.log(seleccionarPedido([]));

// Caso borde: empate en estado y espera, gana el id menor.
console.log(seleccionarPedido([
  { id: 5, estado: 'pendiente', minutosEspera: 15 },
  { id: 2, estado: 'pendiente', minutosEspera: 15 },
]));