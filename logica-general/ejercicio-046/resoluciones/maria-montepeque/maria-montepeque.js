// Ejercicio 046 - Busqueda de elementos

const PRIORIDAD_REVISION = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

function buscarAutoPrioritario(estados) {
  if (!Array.isArray(estados) || estados.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay autos en la lista para revisar.',
    };
  }

  let estadoPrioritario = null;
  let prioridadMinima = Infinity;

  for (const estado of estados) {
    const prioridad = PRIORIDAD_REVISION[estado];
    if (prioridad !== undefined && prioridad < prioridadMinima) {
      prioridadMinima = prioridad;
      estadoPrioritario = estado;
    }
  }

  if (estadoPrioritario === null) {
    return {
      accion: 'sin accion',
      motivo: 'ningun estado de la lista es reconocido.',
    };
  }

  if (estadoPrioritario === 'aprobado') {
    return {
      accion: 'sin accion',
      motivo: 'todos los autos estan aprobados, no hay riesgos pendientes.',
    };
  }

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  };
}

module.exports = { buscarAutoPrioritario };

// Pruebas manuales

// Caso del ejemplo del README
console.log(buscarAutoPrioritario(['aprobado', 'pendiente', 'bloqueado']));
// Esperado: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso normal sin bloqueados
console.log(buscarAutoPrioritario(['aprobado', 'pendiente', 'pendiente']));
// Esperado: { accion: 'revisar pendiente', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(buscarAutoPrioritario([]));
// Esperado: { accion: 'sin accion', motivo: 'no hay autos en la lista para revisar.' }

// Caso borde: todos aprobados
console.log(buscarAutoPrioritario(['aprobado', 'aprobado']));
// Esperado: { accion: 'sin accion', motivo: 'todos los autos estan aprobados, no hay riesgos pendientes.' }

// Caso borde: estados no reconocidos
console.log(buscarAutoPrioritario(['en-transito', 'desconocido']));
// Esperado: { accion: 'sin accion', motivo: 'ningun estado de la lista es reconocido.' }