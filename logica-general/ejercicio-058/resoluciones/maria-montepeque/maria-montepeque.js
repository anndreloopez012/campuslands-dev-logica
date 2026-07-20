// Ejercicio 058 - Sistema de turnos (soldadura)

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueos, se atiende lo pendiente antes de cerrar.',
  aprobado: 'todos los items estan resueltos, no se requiere accion urgente.',
};

function organizarTurno(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin datos', motivo: 'no se recibieron items para evaluar.' };
  }

  const estadoPrioritario = items.reduce((masUrgente, actual) => {
    if (!(actual in PRIORIDAD)) return masUrgente;
    if (masUrgente === null) return actual;
    return PRIORIDAD[actual] < PRIORIDAD[masUrgente] ? actual : masUrgente;
  }, null);

  if (estadoPrioritario === null) {
    return { accion: 'sin datos', motivo: 'ningun item tiene un estado reconocido.' };
  }

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { organizarTurno };

// Pruebas manuales

console.log(organizarTurno(['aprobado', 'pendiente', 'bloqueado']));
// { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

console.log(organizarTurno(['aprobado', 'pendiente']));
// { accion: 'revisar pendiente', motivo: 'no hay bloqueos, se atiende lo pendiente antes de cerrar.' }

console.log(organizarTurno(['aprobado', 'aprobado']));
// { accion: 'revisar aprobado', motivo: 'todos los items estan resueltos, no se requiere accion urgente.' }

console.log(organizarTurno([]));
// { accion: 'sin datos', motivo: 'no se recibieron items para evaluar.' }