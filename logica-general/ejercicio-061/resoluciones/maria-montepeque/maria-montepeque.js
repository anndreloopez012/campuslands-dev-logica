// Ejercicio 061 - clasificacion por reglas

const PRIORIDAD_ESTADO = {
  bloqueado: 3,
  pendiente: 2,
  aprobado: 1,
};

const MOTIVO_ESTADO = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "la regla prioriza tareas en progreso antes de finalizadas.",
  aprobado: "no hay riesgos ni pendientes, se prioriza lo aprobado.",
};

const PRIORIDAD_DESCONOCIDA = 0;
const MOTIVO_DESCONOCIDO =
  "el estado no esta clasificado, se usa la prioridad mas baja.";

function evaluarItems(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin acciones",
      motivo: "no hay items para evaluar.",
    };
  }

  const estadoPrioritario = items.reduce((actual, estado) => {
    const prioridadActual = PRIORIDAD_ESTADO[actual] ?? PRIORIDAD_DESCONOCIDA;
    const prioridadEstado = PRIORIDAD_ESTADO[estado] ?? PRIORIDAD_DESCONOCIDA;
    return prioridadEstado > prioridadActual ? estado : actual;
  }, items[0]);

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVO_ESTADO[estadoPrioritario] ?? MOTIVO_DESCONOCIDO,
  };
}

module.exports = { evaluarItems };
