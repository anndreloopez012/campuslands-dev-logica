// Ejercicio 059 - Inventarios logicos (formulas quimicas)

const PRIORIDAD = {
  inestable: 1,
  pendiente: 2,
  estable: 3,
};

const ACCIONES = {
  inestable: {
    accion: 'aislar compuesto inestable',
    motivo: 'la regla prioriza riesgos de reactividad antes que cualquier otra tarea.',
  },
  pendiente: {
    accion: 'analizar compuesto pendiente',
    motivo: 'no hay compuestos inestables, se revisan primero los pendientes de clasificar.',
  },
  estable: {
    accion: 'sin accion requerida',
    motivo: 'todos los compuestos estan estables y no representan riesgo.',
  },
};

function decidirAccionInventario(compuestos) {
  if (!Array.isArray(compuestos) || compuestos.length === 0) {
    return {
      accion: 'sin datos',
      motivo: 'no se recibieron compuestos para evaluar.',
    };
  }

  const estadoPrioritario = compuestos.reduce((masUrgente, estadoActual) => {
    const prioridadActual = PRIORIDAD[estadoActual];
    if (prioridadActual === undefined) return masUrgente;
    if (masUrgente === null || prioridadActual < PRIORIDAD[masUrgente]) {
      return estadoActual;
    }
    return masUrgente;
  }, null);

  if (estadoPrioritario === null) {
    return {
      accion: 'sin datos',
      motivo: 'ningun estado recibido es valido.',
    };
  }

  return {
    estado: estadoPrioritario,
    ...ACCIONES[estadoPrioritario],
  };
}

// Pruebas manuales

// Caso normal: hay un compuesto inestable entre otros estados
console.log(
  decidirAccionInventario(['estable', 'pendiente', 'inestable'])
);
// Esperado: { estado: 'inestable', accion: 'aislar compuesto inestable', motivo: '...' }

// Caso borde: lista vacia
console.log(decidirAccionInventario([]));
// Esperado: { accion: 'sin datos', motivo: 'no se recibieron compuestos para evaluar.' }

// Caso adicional: todos estables
console.log(decidirAccionInventario(['estable', 'estable']));
// Esperado: { estado: 'estable', accion: 'sin accion requerida', motivo: '...' }

// Caso adicional: pendientes y estables, sin inestables
console.log(decidirAccionInventario(['estable', 'pendiente', 'pendiente']));
// Esperado: { estado: 'pendiente', accion: 'analizar compuesto pendiente', motivo: '...' }

module.exports = { decidirAccionInventario };