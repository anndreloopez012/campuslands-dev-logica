// busqueda de elementos con organizacion previa para autos hiperdeportivos
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const CRITERIO_POR_PRIORIDAD = { alta: "bloqueado", media: "pendiente", baja: "aprobado" };

// fase 1: organizar los datos en un objeto indice antes de decidir nada
function construirIndice(items) {
  const indice = {
    bloqueado: { posiciones: [], total: 0 },
    pendiente: { posiciones: [], total: 0 },
    aprobado: { posiciones: [], total: 0 },
    desconocido: { posiciones: [], total: 0 },
  };

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const clave = ESTADOS_VALIDOS.includes(item) ? item : "desconocido";
    indice[clave].posiciones.push(i);
    indice[clave].total++;
  }

  return indice;
}

function extraerEstadoDeRegla(regla) {
  if (typeof regla !== "string") return null;
  const reglaMinuscula = regla.toLowerCase();
  if (!reglaMinuscula.includes("buscar")) return null;
  return ESTADOS_VALIDOS.find((estado) => reglaMinuscula.includes(estado)) ?? null;
}

function resolverCriterioFinal(prioridad, regla) {
  const estadoDeRegla = extraerEstadoDeRegla(regla);
  if (estadoDeRegla) return { criterio: estadoDeRegla, origen: "regla" };
  return { criterio: CRITERIO_POR_PRIORIDAD[prioridad] ?? null, origen: "prioridad" };
}

// fase 2: consultar el indice ya organizado, sin volver a recorrer items
function buscarEnIndice(indice, criterio) {
  if (!criterio || !indice[criterio]) return { posiciones: [], total: 0 };
  return indice[criterio];
}

function buscarElementosOrganizado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { indice: null, encontrados: [], primero: -1, motivo: "no hay items para buscar." };
  }

  const indice = construirIndice(items);
  const { criterio, origen } = resolverCriterioFinal(prioridad, regla);

  if (!criterio) {
    return { indice, encontrados: [], primero: -1, motivo: `prioridad "${prioridad}" no reconocida y la regla no especifica un estado valido.` };
  }

  const { posiciones, total } = buscarEnIndice(indice, criterio);

  if (total === 0) {
    return { indice, encontrados: [], primero: -1, motivo: `ningun item coincide con el estado "${criterio}" segun el indice organizado.` };
  }

  const motivo = origen === "regla"
    ? `la regla especifico buscar "${criterio}"; el indice ya tenia ${total} coincidencia(s) organizadas para ese estado.`
    : `la prioridad "${prioridad}" define buscar "${criterio}"; el indice ya tenia ${total} coincidencia(s) organizadas.`;

  return { indice, encontrados: posiciones, primero: posiciones[0], motivo };
}

// pruebas
console.log(buscarElementosOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log(buscarElementosOrganizado([], "alta", "revisar bloqueados primero"));

console.log(buscarElementosOrganizado(["bloqueado", "aprobado", "bloqueado", "pendiente"], "media", "buscar bloqueado en el lote"));
