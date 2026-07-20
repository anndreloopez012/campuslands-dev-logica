const ACCION_POR_ESTADO = { bloqueado: "detener flujo", pendiente: "esperar", aprobado: "avanzar" };

function construirMapaDeBloques(items) {
  const mapa = { bloques: [], totalBloqueados: 0 };
  let i = 0;

  while (i < items.length) {
    const estado = items[i];

    if (estado === "pendiente") {
      let fin = i;
      while (fin < items.length && items[fin] === "pendiente") fin++;
      mapa.bloques.push({ tipo: "pendiente", desde: i, hasta: fin - 1, cantidad: fin - i });
      i = fin;
      continue;
    }

    if (estado === "bloqueado") mapa.totalBloqueados++;
    mapa.bloques.push({ tipo: estado, desde: i, hasta: i, cantidad: 1 });
    i++;
  }

  return mapa;
}

function detectarReglaPermiteContinuar(regla) {
  return typeof regla === "string" && regla.toLowerCase().includes("continuar pese a bloqueo");
}

// fase 2: recorrer el mapa ya organizado para generar el flujo
function ejecutarFlujoOrganizado(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { mapa: null, pasos: [], motivo: "no hay items para procesar el flujo." };
  }

  const mapa = construirMapaDeBloques(items);
  const reglaPermiteContinuar = detectarReglaPermiteContinuar(regla);
  const prioridadAlta = prioridad === "alta";

  const pasos = [];

  for (const bloque of mapa.bloques) {
    if (bloque.tipo === "pendiente" && bloque.cantidad >= 2) {
      pasos.push({ desde: bloque.desde, hasta: bloque.hasta, accion: "reintento agrupado", detalle: `${bloque.cantidad} pendientes consecutivos segun el mapa.` });
      continue;
    }

    const accion = ACCION_POR_ESTADO[bloque.tipo] ?? "omitir";
    pasos.push({ desde: bloque.desde, hasta: bloque.hasta, accion, detalle: `bloque de tipo "${bloque.tipo}" procesado desde el mapa.` });

    if (bloque.tipo === "bloqueado") {
      if (prioridadAlta) {
        pasos.push({ desde: bloque.desde, hasta: bloque.hasta, accion: "flujo detenido", detalle: "prioridad alta: se detiene segun el mapa." });
        break;
      }
      if (!reglaPermiteContinuar) {
        pasos.push({ desde: bloque.desde, hasta: bloque.hasta, accion: "flujo detenido", detalle: "un bloqueado interrumpe el flujo segun el mapa." });
        break;
      }
      pasos.push({ desde: bloque.desde, hasta: bloque.hasta, accion: "continuar pese a bloqueo", detalle: "la regla permite seguir segun el mapa." });
    }
  }

  return { mapa, pasos, motivo: `el flujo se organizo en ${mapa.bloques.length} bloque(s) antes de decidir las acciones.` };
}

// pruebas
console.log(ejecutarFlujoOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log(ejecutarFlujoOrganizado([], "alta", "revisar bloqueados primero"));

console.log(ejecutarFlujoOrganizado(["pendiente", "pendiente", "bloqueado"], "media", "continuar pese a bloqueo si es necesario"));
