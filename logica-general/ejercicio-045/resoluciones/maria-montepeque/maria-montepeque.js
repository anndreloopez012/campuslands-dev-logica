// Ejercicio 045 - Ordenamiento de prioridades

const PRIORIDAD_ESTADOS = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS_ESTADOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "no hay riesgos bloqueantes, pero requiere seguimiento.",
  aprobado: "no requiere atencion inmediata.",
};

function determinarAccionPrioritaria(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin accion",
      motivo: "no se recibieron items para evaluar.",
    };
  }

  const estadoPrioritario = items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDAD_ESTADOS[actual];

    if (prioridadActual === undefined) {
      return masUrgente;
    }

    if (masUrgente === undefined || prioridadActual < PRIORIDAD_ESTADOS[masUrgente]) {
      return actual;
    }

    return masUrgente;
  }, undefined);

  if (estadoPrioritario === undefined) {
    return {
      accion: "sin accion",
      motivo: "ningun item tiene un estado reconocido.",
    };
  }

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS_ESTADOS[estadoPrioritario],
  };
}

const casoNormal = determinarAccionPrioritaria(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = determinarAccionPrioritaria([]);
console.log("Caso borde (lista vacia):", casoBorde);

const casoEstadoDesconocido = determinarAccionPrioritaria(["en_revision", "aprobado"]);
console.log("Caso borde (estado no reconocido):", casoEstadoDesconocido);

module.exports = { determinarAccionPrioritaria };