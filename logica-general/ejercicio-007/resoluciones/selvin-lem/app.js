// deteccion de inconsistencias en playlist musical (estados de items)
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];

function detectarInconsistencias(items, prioridad, regla) {
  const inconsistencias = [];

  if (!Array.isArray(items) || items.length === 0) {
    return { inconsistencias: ["items vacio o invalido."], motivo: "no hay datos para evaluar consistencia." };
  }

  const vistos = new Set();
  items.forEach((item, i) => {
    if (!ESTADOS_VALIDOS.includes(item)) {
      inconsistencias.push(`item en posicion ${i} ("${item}") no es un estado valido.`);
    }
    if (vistos.has(item)) {
      inconsistencias.push(`item "${item}" esta duplicado en la lista.`);
    }
    vistos.add(item);
  });

  const hayRiesgo = items.includes("bloqueado") || items.includes("pendiente");
  if (prioridad === "alta" && !hayRiesgo) {
    inconsistencias.push("prioridad alta declarada pero no hay items en riesgo (bloqueado/pendiente).");
  }

  return {
    inconsistencias,
    motivo: inconsistencias.length === 0
      ? "los datos son consistentes con las reglas del sistema."
      : "se encontraron inconsistencias entre los datos y las reglas del sistema.",
  };
}

// pruebas
console.log(detectarInconsistencias(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { inconsistencias: [], motivo: 'los datos son consistentes con las reglas del sistema.' }

console.log(detectarInconsistencias([], "alta", "revisar bloqueados primero"));
// caso borde: { inconsistencias: ['items vacio o invalido.'], motivo: 'no hay datos para evaluar consistencia.' }

console.log(detectarInconsistencias(["aprobado", "aprobado"], "alta", "revisar bloqueados primero"));
// caso borde: duplicado + prioridad alta sin riesgo -> dos inconsistencias