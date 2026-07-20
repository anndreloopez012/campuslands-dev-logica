// Ejercicio 047 - Deteccion de inconsistencias en playlist musical

const PRIORIDAD_ESTADOS = {
  bloqueada: 1,
  pendiente: 2,
  aprobada: 3,
};

const MOTIVOS_POR_ESTADO = {
  bloqueada: 'la regla prioriza riesgos antes de tareas normales.',
  pendiente: 'no hay canciones bloqueadas, se revisan las pendientes de aprobacion.',
  aprobada: 'todas las canciones estan aprobadas, no hay riesgos pendientes.',
};

function analizarPlaylist(estados) {
  if (!Array.isArray(estados) || estados.length === 0) {
    return {
      accion: 'sin acciones',
      motivo: 'la playlist no contiene canciones para revisar.',
    };
  }

  const estadosInvalidos = estados.filter((estado) => !(estado in PRIORIDAD_ESTADOS));

  if (estadosInvalidos.length > 0) {
    return {
      accion: 'revisar inconsistencia',
      motivo: `se encontraron estados no reconocidos: ${estadosInvalidos.join(', ')}.`,
    };
  }

  const estadoPrioritario = estados.reduce((masUrgente, actual) =>
    PRIORIDAD_ESTADOS[actual] < PRIORIDAD_ESTADOS[masUrgente] ? actual : masUrgente
  );

  return {
    accion: `revisar ${estadoPrioritario}`,
    motivo: MOTIVOS_POR_ESTADO[estadoPrioritario],
  };
}

const casoNormal = analizarPlaylist(['aprobada', 'pendiente', 'bloqueada']);
console.log('Caso normal:', casoNormal);

const casoBorde = analizarPlaylist([]);
console.log('Caso borde (playlist vacia):', casoBorde);

const casoInconsistente = analizarPlaylist(['aprobada', 'desconocida']);
console.log('Caso inconsistente:', casoInconsistente);

module.exports = { analizarPlaylist };