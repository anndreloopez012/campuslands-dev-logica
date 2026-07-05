// simulacion de estados para peliculas de miedo (maquina de estados simple)
function transicionar(estado, prioridad) {
  if (estado === "pendiente") {
    return prioridad === "alta" ? "bloqueado" : "aprobado";
  }
  return estado; // bloqueado y aprobado son estados finales, no cambian
}

function simularEstados(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { estadoFinal: [], transiciones: [], motivo: "no hay items para simular." };
  }

  const transiciones = [];

  const estadoFinal = items.map((estadoInicial, i) => {
    const estadoNuevo = transicionar(estadoInicial, prioridad);
    if (estadoNuevo !== estadoInicial) {
      transiciones.push({ item: i, de: estadoInicial, a: estadoNuevo });
    }
    return estadoNuevo;
  });

  return {
    estadoFinal,
    transiciones,
    motivo: transiciones.length > 0
      ? "los pendientes transicionaron segun la prioridad declarada."
      : "ningun item tenia estado pendiente, no hubo transiciones.",
  };
}

// pruebas
console.log(simularEstados(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: pendiente pasa a bloqueado por prioridad alta

console.log(simularEstados([], "alta", "revisar bloqueados primero"));
// caso borde: { estadoFinal: [], transiciones: [], motivo: 'no hay items para simular.' }

console.log(simularEstados(["pendiente", "pendiente"], "baja", "resolver pendientes"));
// caso borde: ambos pendientes pasan a aprobado por prioridad no alta