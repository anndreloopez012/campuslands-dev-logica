// Ejercicio 051 - Organizacion de listas (kickboxing)

const PRIORIDAD_ESTADOS = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS_ESTADOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueados, se revisan los pendientes antes que los aprobados.',
  aprobado: 'no hay bloqueados ni pendientes, todos los elementos estan aprobados.',
};

function organizarPeleadores(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin elementos', motivo: 'la lista esta vacia, no hay nada que revisar.' };
  }

  const ordenados = [...items].sort((a, b) => {
    const prioridadA = PRIORIDAD_ESTADOS[a] ?? Number.MAX_SAFE_INTEGER;
    const prioridadB = PRIORIDAD_ESTADOS[b] ?? Number.MAX_SAFE_INTEGER;
    return prioridadA - prioridadB;
  });

  const estadoPrioritario = ordenados[0];

  if (!(estadoPrioritario in PRIORIDAD_ESTADOS)) {
    return { accion: 'estado no reconocido', motivo: `el estado "${estadoPrioritario}" no esta definido en las reglas.` };
  }

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS_ESTADOS[estadoPrioritario],
  };
}

// Pruebas

// Caso normal (ejemplo del README)
console.log(organizarPeleadores(['aprobado', 'pendiente', 'bloqueado']));
// { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(organizarPeleadores([]));
// { accion: 'sin elementos', motivo: 'la lista esta vacia, no hay nada que revisar.' }

// Caso borde: solo aprobados
console.log(organizarPeleadores(['aprobado', 'aprobado']));
// { accion: 'revisar aprobado', motivo: 'no hay bloqueados ni pendientes, todos los elementos estan aprobados.' }

// Caso borde: estado no reconocido
console.log(organizarPeleadores(['descalificado']));
// { accion: 'estado no reconocido', motivo: 'el estado "descalificado" no esta definido en las reglas.' }

module.exports = { organizarPeleadores };