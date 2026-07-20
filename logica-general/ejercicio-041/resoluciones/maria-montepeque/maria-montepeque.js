// Ejercicio 041 - Clasificacion por reglas

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: {
    accion: 'revisar bloqueado',
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  },
  pendiente: {
    accion: 'revisar pendiente',
    motivo: 'no hay bloqueados, se atiende lo pendiente.',
  },
  aprobado: {
    accion: 'sin accion requerida',
    motivo: 'todos los items estan aprobados.',
  },
};

function clasificarPorReglas(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin accion', motivo: 'no hay items para evaluar.' };
  }

  const itemPrioritario = items.reduce((prioritario, actual) => {
    const prioridadActual = PRIORIDAD[actual] ?? Infinity;
    const prioridadPrioritario = PRIORIDAD[prioritario] ?? Infinity;
    return prioridadActual < prioridadPrioritario ? actual : prioritario;
  });

  return ACCIONES[itemPrioritario] ?? { accion: 'sin accion', motivo: 'estado no reconocido.' };
}

// Pruebas manuales

// Caso normal
console.log(
  clasificarPorReglas(['aprobado', 'pendiente', 'bloqueado'])
);
// Esperado: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(clasificarPorReglas([]));
// Esperado: { accion: 'sin accion', motivo: 'no hay items para evaluar.' }

// Caso adicional: solo aprobados
console.log(clasificarPorReglas(['aprobado', 'aprobado']));
// Esperado: { accion: 'sin accion requerida', motivo: 'todos los items estan aprobados.' }

module.exports = { clasificarPorReglas };