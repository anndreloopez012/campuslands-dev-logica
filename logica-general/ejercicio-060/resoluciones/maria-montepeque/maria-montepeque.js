// Ejercicio 060 - Estrategias de seleccion

const PRIORIDAD = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

function seleccionarEstrategia(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return { accion: null, motivo: "No hay items para evaluar." };
  }

  const itemsValidos = items.filter((item) => item in PRIORIDAD);

  if (itemsValidos.length === 0) {
    return { accion: null, motivo: "No hay items validos para evaluar." };
  }

  const seleccionado = itemsValidos.reduce((actual, candidato) =>
    PRIORIDAD[candidato] < PRIORIDAD[actual] ? candidato : actual
  );

  return {
    accion: `revisar ${seleccionado}`,
    motivo: "la regla prioriza riesgos antes de tareas normales.",
  };
}

// Pruebas manuales

// Caso normal (ejemplo del README)
console.log(
  seleccionarEstrategia(["aprobado", "pendiente", "bloqueado"])
);
// { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso sin bloqueados
console.log(
  seleccionarEstrategia(["aprobado", "pendiente"])
);
// { accion: 'revisar pendiente', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(seleccionarEstrategia([]));
// { accion: null, motivo: 'No hay items para evaluar.' }

// Caso borde: valores invalidos
console.log(seleccionarEstrategia(["desconocido", "otro"]));
// { accion: null, motivo: 'No hay items validos para evaluar.' }

module.exports = { seleccionarEstrategia };