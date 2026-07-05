// simulacion de flujo paso a paso para peliculas de ciencia ficcion
const ACCION_POR_ESTADO = {
  bloqueado: "detener flujo",
  pendiente: "esperar",
  aprobado: "avanzar",
};

function ejecutarFlujo(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { pasos: [], motivo: "no hay items para procesar el flujo." };
  }

  const pasos = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const accion = ACCION_POR_ESTADO[item];

    if (!accion) {
      pasos.push({ paso: i + 1, item, accion: "omitir", detalle: "estado no reconocido." });
      continue;
    }

    pasos.push({ paso: i + 1, item, accion, detalle: `item procesado como ${item}.` });

    if (item === "bloqueado") {
      pasos.push({ paso: i + 2, item: null, accion: "flujo detenido", detalle: "un bloqueado interrumpe el flujo." });
      break;
    }
  }

  return {
    pasos,
    motivo: "el flujo se procesa en orden y se detiene ante el primer bloqueado.",
  };
}

// pruebas
console.log(ejecutarFlujo(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: avanzar -> esperar -> detener flujo -> flujo detenido

console.log(ejecutarFlujo([], "alta", "revisar bloqueados primero"));
// caso borde: { pasos: [], motivo: 'no hay items para procesar el flujo.' }

console.log(ejecutarFlujo(["aprobado", "aprobado"], "media", "flujo normal"));
// caso borde sin bloqueado: dos pasos de avanzar, sin deteccion de detencion