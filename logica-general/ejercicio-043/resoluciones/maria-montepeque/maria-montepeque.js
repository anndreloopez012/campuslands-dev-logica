// Ejercicio 043 - Logica general: toma de decisiones en torneo de esports

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVOS = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente: "las tareas pendientes requieren seguimiento antes de cerrar el ciclo.",
  aprobado: "no hay riesgos pendientes, se revisan los aprobados para cierre.",
};

function tomarDecision(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin acciones",
      motivo: "no hay elementos para evaluar.",
    };
  }

  const [estadoPrioritario] = [...items].sort(
    (a, b) => PRIORIDAD[a] - PRIORIDAD[b]
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS[estadoPrioritario],
  };
}

module.exports = { tomarDecision };

const casoNormal = tomarDecision(["aprobado", "pendiente", "bloqueado"]);
console.log("Caso normal:", casoNormal);

const casoBorde = tomarDecision([]);
console.log("Caso borde:", casoBorde);