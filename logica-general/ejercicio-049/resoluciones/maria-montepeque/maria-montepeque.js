// Ejercicio 049 - Logica general: simulacion de estados

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueados, se atiende lo pendiente.',
  aprobado: 'todo esta aprobado, no se requiere accion urgente.',
};

function analizarEstados(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin accion', motivo: 'no hay items para evaluar.' };
  }

  const itemPrioritario = items.reduce((actual, item) => {
    const valor = PRIORIDAD[item];
    if (valor === undefined) return actual;
    if (actual === null || valor < PRIORIDAD[actual]) return item;
    return actual;
  }, null);

  if (itemPrioritario === null) {
    return { accion: 'sin accion', motivo: 'ningun item coincide con un estado valido.' };
  }

  return {
    accion: `revisar ${itemPrioritario}`,
    motivo: MOTIVOS[itemPrioritario],
  };
}

// Pruebas manuales

// Caso normal (ejemplo del README)
console.log(analizarEstados(['aprobado', 'pendiente', 'bloqueado']));
// { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso sin bloqueados
console.log(analizarEstados(['aprobado', 'pendiente']));
// { accion: 'revisar pendiente', motivo: 'no hay bloqueados, se atiende lo pendiente.' }

// Caso borde: lista vacia
console.log(analizarEstados([]));
// { accion: 'sin accion', motivo: 'no hay items para evaluar.' }

module.exports = { analizarEstados };