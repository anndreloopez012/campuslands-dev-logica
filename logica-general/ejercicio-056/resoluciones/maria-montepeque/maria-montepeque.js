// Ejercicio 056 - Logica general - Matrices simples

const PRIORIDAD_ESTADOS = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS_ESTADOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'las tareas pendientes deben revisarse antes que las aprobadas.',
  aprobado: 'no hay riesgos ni pendientes, se revisan las tareas aprobadas.',
};

function determinarAccionPrioritaria(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay elementos para evaluar.',
    };
  }

  const estadoPrioritario = items.reduce((prioritario, actual) => {
    const prioridadActual = PRIORIDAD_ESTADOS[actual];
    if (prioridadActual === undefined) return prioritario;
    if (prioritario === null) return actual;
    return prioridadActual < PRIORIDAD_ESTADOS[prioritario] ? actual : prioritario;
  }, null);

  if (estadoPrioritario === null) {
    return {
      accion: 'sin accion',
      motivo: 'ningun elemento tiene un estado reconocido.',
    };
  }

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS_ESTADOS[estadoPrioritario],
  };
}

// Pruebas manuales

// Caso normal (ejemplo del README)
console.log(determinarAccionPrioritaria(['aprobado', 'pendiente', 'bloqueado']));
// Salida esperada: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(determinarAccionPrioritaria([]));
// Salida esperada: { accion: 'sin accion', motivo: 'no hay elementos para evaluar.' }

module.exports = { determinarAccionPrioritaria };