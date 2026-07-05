// filtro de inventario de motos por condiciones de riesgo
const FILTROS_POR_PRIORIDAD = {
  alta: ["bloqueado", "pendiente"],
  media: ["bloqueado"],
  baja: [],
};

function filtrarItems(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { filtrados: [], motivo: "no hay items para filtrar." };
  }

  const criterios = FILTROS_POR_PRIORIDAD[prioridad];

  if (criterios === undefined) {
    return { filtrados: [], motivo: `prioridad "${prioridad}" no reconocida, no se aplico filtro.` };
  }

  if (criterios.length === 0) {
    return { filtrados: [...items], motivo: "prioridad baja no filtra, se muestran todos los items." };
  }

  const filtrados = items.filter((item) => criterios.includes(item));

  return {
    filtrados,
    motivo: filtrados.length > 0
      ? "la regla prioriza riesgos antes de tareas normales."
      : "ningun item cumplio el criterio de riesgo para esta prioridad.",
  };
}

// pruebas
console.log(filtrarItems(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { filtrados: ['pendiente', 'bloqueado'], motivo: 'la regla prioriza riesgos antes de tareas normales.' }

console.log(filtrarItems([], "media", "revisar"));
// caso borde: { filtrados: [], motivo: 'no hay items para filtrar.' }

console.log(filtrarItems(["aprobado", "aprobado"], "baja", "sin filtro"));
// caso borde: { filtrados: ['aprobado', 'aprobado'], motivo: 'prioridad baja no filtra, se muestran todos los items.' }