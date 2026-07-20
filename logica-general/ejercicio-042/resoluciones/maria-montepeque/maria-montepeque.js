// Ejercicio 042 - Validacion de datos (ranking de futbol sala)

const PRIORIDAD = {
  bloqueado: {
    orden: 1,
    accion: 'revisar bloqueado',
    motivo: 'la regla prioriza riesgos antes de tareas normales.',
  },
  pendiente: {
    orden: 2,
    accion: 'revisar pendiente',
    motivo: 'los partidos pendientes requieren confirmacion antes de continuar.',
  },
  aprobado: {
    orden: 3,
    accion: 'sin accion requerida',
    motivo: 'el partido ya fue aprobado y no representa un riesgo.',
  },
};

function evaluarEstadoPartidos(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: 'sin datos', motivo: 'no hay partidos para evaluar.' };
  }

  const validos = items.filter((item) => PRIORIDAD[item] !== undefined);

  if (validos.length === 0) {
    return { accion: 'sin datos validos', motivo: 'ningun estado recibido es reconocido por el sistema.' };
  }

  const masUrgente = validos.reduce((actualMasUrgente, item) =>
    PRIORIDAD[item].orden < PRIORIDAD[actualMasUrgente].orden ? item : actualMasUrgente
  );

  const { accion, motivo } = PRIORIDAD[masUrgente];
  return { accion, motivo };
}

module.exports = evaluarEstadoPartidos;

if (require.main === module) {
  console.log(evaluarEstadoPartidos(['aprobado', 'pendiente', 'bloqueado']));
  console.log(evaluarEstadoPartidos([]));
  console.log(evaluarEstadoPartidos(['aprobado', 'aprobado']));
  console.log(evaluarEstadoPartidos(['aprobado', 'desconocido', 'pendiente']));
  console.log(evaluarEstadoPartidos(['fantasma']));
}