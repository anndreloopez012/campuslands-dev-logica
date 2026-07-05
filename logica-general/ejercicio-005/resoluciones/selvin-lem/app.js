// ordenamiento de prioridades para taller mecanico
const PESO_RIESGO = { bloqueado: 0, pendiente: 1, aprobado: 2 };

function ordenarPorPrioridad(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { ordenados: [], motivo: "no hay items para ordenar." };
  }

  const conIndice = items.map((item, indiceOriginal) => ({ item, indiceOriginal }));

  conIndice.sort((a, b) => {
    const pesoA = PESO_RIESGO[a.item] ?? 99;
    const pesoB = PESO_RIESGO[b.item] ?? 99;
    if (pesoA !== pesoB) return pesoA - pesoB;
    return a.indiceOriginal - b.indiceOriginal; // empate: conserva orden original
  });

  return {
    ordenados: conIndice.map((x) => x.item),
    motivo: "la regla prioriza riesgos antes de tareas normales, en caso de empate se conserva el orden original.",
  };
}

// pruebas
console.log(ordenarPorPrioridad(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { ordenados: ['bloqueado', 'pendiente', 'aprobado'], motivo: '...' }

console.log(ordenarPorPrioridad([], "alta", "revisar bloqueados primero"));
// caso borde: { ordenados: [], motivo: 'no hay items para ordenar.' }

console.log(ordenarPorPrioridad(["pendiente", "bloqueado", "pendiente", "bloqueado"], "media", "orden por riesgo"));
// caso borde con empate: { ordenados: ['bloqueado', 'bloqueado', 'pendiente', 'pendiente'], motivo: '...' }