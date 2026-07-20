// Ejercicio 057 - Tablas de decision (arquitectura 3D)

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  'en revision': 3,
  aprobado: 4,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'hay tareas pendientes que requieren avance.',
  'en revision': 'hay elementos en revision que deben validarse.',
  aprobado: 'todos los elementos estan aprobados, no se requiere accion.',
};

function decidirAccionProyecto(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin accion', motivo: 'no hay elementos para evaluar.', item: null };
  }

  let seleccionado = null;
  let prioridadMinima = Infinity;

  for (const item of items) {
    const prioridad = PRIORIDADES[item];
    if (prioridad === undefined) continue;
    if (prioridad < prioridadMinima) {
      prioridadMinima = prioridad;
      seleccionado = item;
    }
  }

  if (seleccionado === null) {
    return { accion: 'sin accion', motivo: 'ningun estado reconocido en la lista.', item: null };
  }

  return {
    accion: seleccionado === 'aprobado' ? 'ninguna accion requerida' : `revisar ${seleccionado}`,
    motivo: MOTIVOS[seleccionado],
    item: seleccionado,
  };
}

// Pruebas manuales

console.log(decidirAccionProyecto(['aprobado', 'pendiente', 'bloqueado']));
// { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.', item: 'bloqueado' }

console.log(decidirAccionProyecto(['aprobado', 'en revision']));
// { accion: 'revisar en revision', motivo: 'hay elementos en revision que deben validarse.', item: 'en revision' }

console.log(decidirAccionProyecto(['aprobado', 'aprobado']));
// { accion: 'ninguna accion requerida', motivo: 'todos los elementos estan aprobados, no se requiere accion.', item: 'aprobado' }

console.log(decidirAccionProyecto([]));
// { accion: 'sin accion', motivo: 'no hay elementos para evaluar.', item: null }

console.log(decidirAccionProyecto(['dato-invalido', 'otro-dato-invalido']));
// { accion: 'sin accion', motivo: 'ningun estado reconocido en la lista.', item: null }

module.exports = { decidirAccionProyecto };