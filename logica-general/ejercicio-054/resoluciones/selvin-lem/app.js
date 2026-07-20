const ORDEN_RIESGO = ["bloqueado", "pendiente", "aprobado"];

function clasificar(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin datos", motivo: "no hay items para evaluar." };
  }

  for (const estado of ORDEN_RIESGO) {
    if (items.includes(estado)) {
      return {
        accion: `revisar ${estado}`,
        motivo: "la regla prioriza riesgos antes de tareas normales."
      };
    }
  }

  return { accion: "sin accion", motivo: "ningun item coincide con estados conocidos." };
}

console.log(clasificar(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
console.log(clasificar([], "alta", "revisar bloqueados primero"));
console.log(clasificar(["aprobado", "aprobado"], "alta", "revisar bloqueados primero"));