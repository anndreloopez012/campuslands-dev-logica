function procesarRegla(items, prioridad, regla) {
  if (typeof regla !== 'string' || regla.trim() === '') {
    return { accion: 'ninguna', motivo: 'La regla está vacía o es inválida.' };
  }

  const reglaMinusculas = regla.toLowerCase();

  if (reglaMinusculas.includes('bloqueado') || reglaMinusculas.includes('bloqueados')) {
    return { accion: 'revisar bloqueado', motivo: 'La regla prioriza riesgos antes de tareas normales.' };
  }

  return { accion: 'ninguna', motivo: 'La regla no contiene una acción prioritaria conocida.' };
}

module.exports = procesarRegla;