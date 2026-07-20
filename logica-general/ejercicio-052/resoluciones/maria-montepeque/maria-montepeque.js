// Ejercicio 052 - comparacion de opciones (pingpong)

"use strict";

const RANGO_ESTADO = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const MOTIVO_POR_ESTADO = {
  bloqueado: "la regla prioriza riesgos antes de tareas normales.",
  pendiente:
    "no hay bloqueados, se atiende lo pendiente antes que lo aprobado.",
  aprobado: "todos los items estan aprobados, no se requiere accion urgente.",
};

function decidirAccion(items, prioridad, regla) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: "sin accion", motivo: "la lista de items esta vacia." };
  }

  const estadoMasUrgente = items.reduce((urgente, actual) => {
    const rangoActual = RANGO_ESTADO[actual] ?? Number.MAX_SAFE_INTEGER;
    const rangoUrgente = RANGO_ESTADO[urgente] ?? Number.MAX_SAFE_INTEGER;
    return rangoActual < rangoUrgente ? actual : urgente;
  }, items[0]);

  const motivo =
    MOTIVO_POR_ESTADO[estadoMasUrgente] ??
    `estado "${estadoMasUrgente}" no reconocido, revisar manualmente.`;

  const accion =
    estadoMasUrgente === "aprobado"
      ? "sin accion urgente"
      : `revisar ${estadoMasUrgente}`;

  return { accion, motivo };
}

module.exports = { decidirAccion };

if (require.main === module) {
  const assert = require("assert");

  const casoNormal = decidirAccion(
    ["aprobado", "pendiente", "bloqueado"],
    "alta",
    "revisar bloqueados primero",
  );
  assert.deepStrictEqual(casoNormal, {
    accion: "revisar bloqueado",
    motivo: "la regla prioriza riesgos antes de tareas normales.",
  });
  console.log("Caso normal ->", casoNormal);

  const casoBorde = decidirAccion([], "alta", "revisar bloqueados primero");
  assert.deepStrictEqual(casoBorde, {
    accion: "sin accion",
    motivo: "la lista de items esta vacia.",
  });
  console.log("Caso borde (lista vacia) ->", casoBorde);

  const casoExtra = decidirAccion(
    ["aprobado", "aprobado"],
    "media",
    "revisar bloqueados primero",
  );
  assert.deepStrictEqual(casoExtra, {
    accion: "sin accion urgente",
    motivo: "todos los items estan aprobados, no se requiere accion urgente.",
  });
  console.log("Caso extra (sin riesgos) ->", casoExtra);

  console.log("Todas las pruebas pasaron.");
}
