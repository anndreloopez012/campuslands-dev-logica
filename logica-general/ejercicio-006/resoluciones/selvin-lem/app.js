// busqueda de elementos criticos en inventario de autos hiperdeportivos
function buscarElemento(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { encontrado: null, indice: -1, motivo: "no hay items para buscar." };
  }

  if (prioridad === "alta") {
    const indiceBloqueado = items.indexOf("bloqueado");
    if (indiceBloqueado !== -1) {
      return {
        encontrado: "bloqueado",
        indice: indiceBloqueado,
        motivo: "la regla prioriza riesgos antes de tareas normales.",
      };
    }
  }

  const indicePendiente = items.indexOf("pendiente");
  if (indicePendiente !== -1) {
    return {
      encontrado: "pendiente",
      indice: indicePendiente,
      motivo: "no se encontro bloqueado con prioridad alta, se busca el siguiente riesgo.",
    };
  }

  return { encontrado: null, indice: -1, motivo: "no se encontro ningun item critico en la lista." };
}

// pruebas
console.log(buscarElemento(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { encontrado: 'bloqueado', indice: 2, motivo: 'la regla prioriza riesgos antes de tareas normales.' }

console.log(buscarElemento([], "alta", "revisar bloqueados primero"));
// caso borde: { encontrado: null, indice: -1, motivo: 'no hay items para buscar.' }

console.log(buscarElemento(["aprobado", "aprobado"], "media", "buscar riesgo"));
// caso borde: { encontrado: null, indice: -1, motivo: 'no se encontro ningun item critico en la lista.' }