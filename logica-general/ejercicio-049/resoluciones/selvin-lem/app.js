function detectarReglaFuerzaAprobacion(regla) {
  return typeof regla === "string" && regla.toLowerCase().includes("forzar aprobacion");
}

function construirContexto(items, prioridad, regla) {
  const bloqueadosAcumuladosOriginal = [];
  let contador = 0;

  for (const estado of items) {
    bloqueadosAcumuladosOriginal.push(contador);
    if (estado === "bloqueado") contador++;
  }

  return {
    bloqueadosAcumuladosOriginal, // cuantos bloqueados existian antes de cada posicion, segun datos originales
    prioridadAlta: prioridad === "alta",
    reglaFuerzaAprobacion: detectarReglaFuerzaAprobacion(regla),
  };
}

function transicionBase(estado, prioridadAlta) {
  if (estado !== "pendiente") return estado;
  return prioridadAlta ? "bloqueado" : "aprobado";
}

// fase 2: recorrer items consultando el contexto ya organizado
function simularEstadosOrganizado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { contexto: null, estadoFinal: [], historial: [], motivo: "no hay items para simular." };
  }

  const contexto = construirContexto(items, prioridad, regla);
  const estadoFinal = [];
  const historial = [];

  for (let i = 0; i < items.length; i++) {
    const estadoInicial = items[i];
    let estadoNuevo;

    if (estadoInicial !== "pendiente") {
      estadoNuevo = estadoInicial;
    } else if (contexto.reglaFuerzaAprobacion) {
      estadoNuevo = "aprobado";
    } else if (contexto.bloqueadosAcumuladosOriginal[i] >= 2) {
      estadoNuevo = "pendiente"; // congelado segun el contexto precalculado
    } else {
      estadoNuevo = transicionBase(estadoInicial, contexto.prioridadAlta);
    }

    if (estadoNuevo !== estadoInicial) {
      historial.push({ item: i, de: estadoInicial, a: estadoNuevo });
    }
    estadoFinal.push(estadoNuevo);
  }

  const motivo = contexto.reglaFuerzaAprobacion
    ? "el contexto detecto la instruccion de forzar aprobacion antes de procesar cualquier item."
    : "el contexto ya tenia precalculados los bloqueados acumulados por posicion antes de decidir transiciones.";

  return { contexto, estadoFinal, historial, motivo };
}

// pruebas
console.log(simularEstadosOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: pendiente transiciona a bloqueado por prioridad alta

console.log(simularEstadosOrganizado([], "alta", "revisar bloqueados primero"));

console.log(simularEstadosOrganizado(["bloqueado", "bloqueado", "pendiente"], "alta", "revisar saturacion"));

console.log(simularEstadosOrganizado(["pendiente", "pendiente"], "alta", "forzar aprobacion de todos"));
