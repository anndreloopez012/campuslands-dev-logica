// Ejercicio 064 - Filtros por condiciones en inventario de motos

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay elementos bloqueados, pero aun quedan pendientes por resolver.',
  aprobado: 'todos los elementos de la lista ya estan aprobados.',
  desconocido: 'se encontro un estado no reconocido en la lista.',
};

function determinarAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin_accion', motivo: 'no hay elementos para revisar.' };
  }

  const estadoPrioritario = items.reduce((masUrgente, estadoActual) => {
    const prioridadActual = PRIORIDADES[estadoActual] ?? Infinity;
    const prioridadMasUrgente = PRIORIDADES[masUrgente] ?? Infinity;
    return prioridadActual < prioridadMasUrgente ? estadoActual : masUrgente;
  });

  const clave = PRIORIDADES[estadoPrioritario] ? estadoPrioritario : 'desconocido';

  return { accion: `revisar ${clave}`, motivo: MOTIVOS[clave] };
}

module.exports = { determinarAccion };