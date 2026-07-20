// Ejercicio 038 - Sistemas de turnos (soldadura)
// Entrada: lista de items con su estado, mas prioridad y regla de contexto.
// Salida: objeto con la accion a tomar y el motivo, segun el estado mas urgente presente.

// Mapa de prioridad: numero mas bajo = mayor urgencia.
// Un objeto de mapeo evita condicionales encadenados y es mas facil de extender.
const PRIORIDAD_ESTADOS = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

function procesarSistemaTurnos({ items, prioridad = "alta", regla = "revisar bloqueados primero" } = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: "sin turnos que revisar",
      motivo: "la lista de turnos esta vacia.",
    };
  }

  let estadoMasUrgente = null;
  let menorPrioridad = Infinity;

  for (const estado of items) {
    const nivel = PRIORIDAD_ESTADOS[estado];

    // Se ignoran estados que no estan definidos en el mapa de prioridad.
    if (nivel === undefined) continue;

    if (nivel < menorPrioridad) {
      menorPrioridad = nivel;
      estadoMasUrgente = estado;
    }
  }

  if (estadoMasUrgente === null) {
    return {
      accion: "sin turnos validos",
      motivo: "ningun estado en la lista es reconocido.",
    };
  }

  return {
    accion: `revisar ${estadoMasUrgente}`,
    motivo: "la regla prioriza riesgos antes de tareas normales.",
  };
}

module.exports = { procesarSistemaTurnos, PRIORIDAD_ESTADOS };

// ---------------------------------------------
// Pruebas manuales
// ---------------------------------------------

// Caso normal (ejemplo del README)
console.log(
  procesarSistemaTurnos({
    items: ["aprobado", "pendiente", "bloqueado"],
    prioridad: "alta",
    regla: "revisar bloqueados primero",
  })
);
// Esperado: { accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }

// Caso borde: lista vacia
console.log(procesarSistemaTurnos({ items: [] }));
// Esperado: { accion: 'sin turnos que revisar', motivo: 'la lista de turnos esta vacia.' }

// Caso borde: estados no reconocidos
console.log(procesarSistemaTurnos({ items: ["desconocido", "otro"] }));
// Esperado: { accion: 'sin turnos validos', motivo: 'ningun estado en la lista es reconocido.' }

// Caso adicional: solo aprobados, ninguna urgencia
console.log(procesarSistemaTurnos({ items: ["aprobado", "aprobado"] }));
// Esperado: { accion: 'revisar aprobado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }