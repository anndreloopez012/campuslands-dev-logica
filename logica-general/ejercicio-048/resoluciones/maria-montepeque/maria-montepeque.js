// Ejercicio 048 - Logica general: flujos paso a paso

const PRIORIDAD_ESTADO = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

function determinarAccionPrioritaria(escenas) {
  if (!Array.isArray(escenas) || escenas.length === 0) {
    return {
      accion: "sin accion",
      motivo: "no se recibieron escenas para evaluar.",
    };
  }

  const estadoPrioritario = escenas.reduce((prioritario, actual) => {
    const prioridadActual = PRIORIDAD_ESTADO[actual];
    const prioridadPrioritario = PRIORIDAD_ESTADO[prioritario];
    return prioridadActual < prioridadPrioritario ? actual : prioritario;
  });

  switch (estadoPrioritario) {
    case "bloqueado":
      return {
        accion: "revisar bloqueado",
        motivo: "la regla prioriza riesgos antes de tareas normales.",
      };
    case "pendiente":
      return {
        accion: "revisar pendiente",
        motivo: "no hay bloqueados, se atiende lo pendiente antes que lo aprobado.",
      };
    default:
      return {
        accion: "sin accion requerida",
        motivo: "todas las escenas estan aprobadas.",
      };
  }
}

const casoNormal = determinarAccionPrioritaria(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = determinarAccionPrioritaria([]);
console.log("Caso borde:", casoBorde);

const casoSoloAprobados = determinarAccionPrioritaria(["aprobado", "aprobado"]);
console.log("Caso solo aprobados:", casoSoloAprobados);

module.exports = { determinarAccionPrioritaria };