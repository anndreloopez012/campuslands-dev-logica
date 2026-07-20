const GRUPOS_BASE = ["bloqueado", "pendiente", "aprobado"];

function agruparPorEstado(items) {
  const grupos = { bloqueado: [], pendiente: [], aprobado: [], desconocido: [] };
  for (const item of items) {
    const clave = GRUPOS_BASE.includes(item) ? item : "desconocido";
    grupos[clave].push(item);
  }
  return grupos;
}

function calcularEstadisticas(grupos, total) {
  const estadisticas = {};
  for (const clave in grupos) {
    estadisticas[clave] = {
      cantidad: grupos[clave].length,
      proporcion: total > 0 ? grupos[clave].length / total : 0,
    };
  }
  return estadisticas;
}

function fusionarDesconocidoEnPendiente(grupos) {
  grupos.pendiente = grupos.pendiente.concat(grupos.desconocido);
  grupos.desconocido = [];
  return grupos;
}

function generarAlertas(grupos, estadisticas, prioridad) {
  const alertas = [];

  for (const clave of GRUPOS_BASE) {
    if (estadisticas[clave].proporcion > 0.6) {
      alertas.push(`el grupo "${clave}" concentra ${(estadisticas[clave].proporcion * 100).toFixed(0)}% de los items segun las estadisticas, revisar carga desbalanceada.`);
    }
  }

  if (prioridad === "alta" && grupos.bloqueado.length === 0) {
    alertas.push("prioridad alta declarada pero las estadisticas muestran 0 items en el grupo bloqueado.");
  }

  return alertas;
}

function organizarListaOrganizado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { grupos: {}, estadisticas: {}, alertas: [], motivo: "no hay items para organizar." };
  }

  const reglaMinuscula = typeof regla === "string" ? regla.toLowerCase() : "";
  const reglaPideCompactar = reglaMinuscula.includes("compactar");

  let grupos = agruparPorEstado(items);
  if (reglaPideCompactar && grupos.desconocido.length > 0) {
    grupos = fusionarDesconocidoEnPendiente(grupos);
  }

  const estadisticas = calcularEstadisticas(grupos, items.length);
  const alertas = generarAlertas(grupos, estadisticas, prioridad);

  return {
    grupos,
    estadisticas,
    alertas,
    motivo: alertas.length > 0
      ? "las estadisticas calculadas sobre los grupos revelan casos especiales a revisar."
      : "las estadisticas calculadas sobre los grupos no muestran casos especiales.",
  };
}

// pruebas
console.log(organizarListaOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log(organizarListaOrganizado([], "alta", "revisar bloqueados primero"));

console.log(organizarListaOrganizado(["aprobado", "aprobado", "aprobado", "pendiente"], "alta", "compactar reporte"));
