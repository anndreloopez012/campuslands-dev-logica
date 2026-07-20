/**
 * Ejercicio 039 - Inventarios logicos
 *
 * Recibe una lista de estados de items y decide cual accion tomar
 * segun la regla del reto: los bloqueados se revisan primero,
 * luego los pendientes, y los aprobados no requieren accion urgente.
 */

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay bloqueados, se atienden los pendientes.',
  aprobado: 'todos los items estan aprobados, no se requiere revision urgente.',
};

function determinarAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin accion', motivo: 'no hay items para evaluar.' };
  }

  const estadosValidos = items.filter((estado) => estado in PRIORIDAD);

  if (estadosValidos.length === 0) {
    return { accion: 'sin accion', motivo: 'ningun estado recibido es valido.' };
  }

  const estadoPrioritario = estadosValidos.reduce((masUrgente, actual) =>
    PRIORIDAD[actual] < PRIORIDAD[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

// --- Pruebas manuales ---

// Caso normal (ejemplo del README)
console.log(determinarAccion(['aprobado', 'pendiente', 'bloqueado']));
// => { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(determinarAccion([]));
// => { accion: 'sin accion', motivo: 'no hay items para evaluar.' }

// Caso borde: solo aprobados
console.log(determinarAccion(['aprobado', 'aprobado']));
// => { accion: 'revisar aprobado', motivo: 'todos los items estan aprobados, no se requiere revision urgente.' }

module.exports = determinarAccion;