/**
 * Ejercicio 037 - Logica general
 * Tematica: arquitectura 3D
 *
 * Recibe una lista de estados de elementos de un modelo 3D y decide
 * cual accion tomar segun la tabla de prioridades del reto.
 *
 * Regla del negocio: los elementos bloqueados representan un riesgo
 * y siempre deben revisarse antes que cualquier otro estado.
 */

const TABLA_DECISION = {
  bloqueado: {
    prioridad: 1,
    accion: 'revisar bloqueado',
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  },
  pendiente: {
    prioridad: 2,
    accion: 'continuar pendiente',
    motivo: 'las tareas pendientes se atienden despues de resolver los riesgos.',
  },
  aprobado: {
    prioridad: 3,
    accion: 'mantener aprobado',
    motivo: 'los elementos aprobados no requieren ninguna accion inmediata.',
  },
};

/**
 * Determina la accion a tomar segun el elemento de mayor prioridad
 * presente en la lista de entrada.
 *
 * @param {string[]} items - estados de los elementos del modelo 3D.
 * @returns {{ accion: string, motivo: string }}
 */
function decidirAccion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin elementos',
      motivo: 'no hay datos para evaluar.',
    };
  }

  let mejorRegla = null;

  for (const estado of items) {
    const regla = TABLA_DECISION[estado];
    if (!regla) continue; // estado invalido, se ignora

    if (!mejorRegla || regla.prioridad < mejorRegla.prioridad) {
      mejorRegla = regla;
    }
  }

  if (!mejorRegla) {
    return {
      accion: 'estado desconocido',
      motivo: 'ningun elemento coincide con los estados validos de la tabla.',
    };
  }

  return {
    accion: mejorRegla.accion,
    motivo: mejorRegla.motivo,
  };
}

// ------------------- Pruebas manuales -------------------

// Caso normal (ejemplo del README del reto)
console.log(
  decidirAccion(['aprobado', 'pendiente', 'bloqueado'])
);
// Esperado: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(decidirAccion([]));
// Esperado: { accion: 'sin elementos', motivo: 'no hay datos para evaluar.' }

// Caso borde: solo estados aprobados
console.log(decidirAccion(['aprobado', 'aprobado']));
// Esperado: { accion: 'mantener aprobado', motivo: 'los elementos aprobados no requieren ninguna accion inmediata.' }

// Caso borde: estado invalido mezclado con uno valido
console.log(decidirAccion(['desconocido', 'pendiente']));
// Esperado: { accion: 'continuar pendiente', motivo: 'las tareas pendientes se atienden despues de resolver los riesgos.' }

module.exports = { decidirAccion, TABLA_DECISION };