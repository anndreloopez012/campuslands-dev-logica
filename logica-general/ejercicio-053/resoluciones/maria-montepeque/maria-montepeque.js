// Ejercicio 053 - Logica general - Resolucion de casos (paracaidismo)

const PRIORIDADES = {
  bloqueado: 1,
  pendiente: 2,
  aprobado: 3,
};

const ACCIONES = {
  bloqueado: 'revisar bloqueado',
  pendiente: 'revisar pendiente',
  aprobado: 'continuar salto',
};

const MOTIVOS = {
  bloqueado: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'hay paracaidistas en espera de aprobacion.',
  aprobado: 'todos los estados permiten continuar sin bloqueos.',
};

function evaluarEstadosSalto(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'sin accion',
      motivo: 'no hay paracaidistas para revisar.',
    };
  }

  const estadoPrioritario = items.reduce((masUrgente, actual) => {
    const prioridadActual = PRIORIDADES[actual] ?? Infinity;
    const prioridadUrgente = PRIORIDADES[masUrgente] ?? Infinity;
    return prioridadActual < prioridadUrgente ? actual : masUrgente;
  });

  return {
    accion: ACCIONES[estadoPrioritario] ?? 'estado desconocido',
    motivo: MOTIVOS[estadoPrioritario] ?? 'estado no reconocido en las reglas.',
  };
}

module.exports = { evaluarEstadosSalto };

// Pruebas manuales

const casoEjemplo = evaluarEstadosSalto(['aprobado', 'pendiente', 'bloqueado']);
console.log('Caso ejemplo:', casoEjemplo);
console.assert(
  casoEjemplo.accion === 'revisar bloqueado' &&
    casoEjemplo.motivo === 'la regla prioriza riesgos antes de tareas normales.',
  'Fallo en caso ejemplo',
);

const casoNormal = evaluarEstadosSalto(['aprobado', 'pendiente']);
console.log('Caso normal:', casoNormal);
console.assert(
  casoNormal.accion === 'revisar pendiente',
  'Fallo en caso normal',
);

const casoTodosAprobados = evaluarEstadosSalto(['aprobado', 'aprobado']);
console.log('Caso todos aprobados:', casoTodosAprobados);
console.assert(
  casoTodosAprobados.accion === 'continuar salto',
  'Fallo en caso todos aprobados',
);

const casoBorde = evaluarEstadosSalto([]);
console.log('Caso borde (lista vacia):', casoBorde);
console.assert(
  casoBorde.accion === 'sin accion',
  'Fallo en caso borde',
);