function evaluarDecision(items, prioridad, regla) {
  const instruccionNormalizada = regla.toLowerCase();

  if (instruccionNormalizada.includes('bloqueado') || instruccionNormalizada.includes('bloqueados')) {
    return {
      accion: 'revisar bloqueado',
      motivo: 'La regla prioriza riesgos antes de tareas normales.'
    };
  }

  if (instruccionNormalizada.includes('aprobado') || instruccionNormalizada.includes('aprobados')) {
    return {
      accion: 'archivar aprobados',
      motivo: 'La regla indica procesar los elementos ya finalizados.'
    };
  }

  return { accion: 'ninguna', motivo: 'La instrucción no contiene una acción prioritaria conocida.' };
}

module.exports = evaluarDecision;