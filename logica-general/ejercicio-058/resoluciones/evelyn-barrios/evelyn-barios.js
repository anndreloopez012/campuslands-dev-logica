function gestionarTurnosSoldadura(tareas, capacidadTurnos) {
  const turnos = {
    diurno: { capacidadRestante: capacidadTurnos.diurno, tareasAsignadas: [] },
    nocturno: { capacidadRestante: capacidadTurnos.nocturno, tareasAsignadas: [] }
  };
  const tareasNoAsignadas = [];

  const prioridadValor = { 'alta': 1, 'media': 2, 'baja': 3 };
  const tareasOrdenadas = [...tareas].sort((a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]);

  for (const tarea of tareasOrdenadas) {
    let asignada = false;
    const turnoPreferido = turnos.diurno.capacidadRestante >= turnos.nocturno.capacidadRestante ? 'diurno' : 'nocturno';
    const otroTurno = turnoPreferido === 'diurno' ? 'nocturno' : 'diurno';

    if (turnos[turnoPreferido].capacidadRestante >= tarea.complejidad) {
      turnos[turnoPreferido].capacidadRestante -= tarea.complejidad;
      turnos[turnoPreferido].tareasAsignadas.push(tarea.id);
      asignada = true;
    } else if (turnos[otroTurno].capacidadRestante >= tarea.complejidad) {
      turnos[otroTurno].capacidadRestante -= tarea.complejidad;
      turnos[otroTurno].tareasAsignadas.push(tarea.id);
      asignada = true;
    }

    if (!asignada) {
      tareasNoAsignadas.push(tarea.id);
    }
  }

  return {
    turnos,
    tareasNoAsignadas,
    resumen: `Se procesaron ${tareas.length} tareas. ${tareas.length - tareasNoAsignadas.length} asignadas y ${tareasNoAsignadas.length} quedaron pendientes.`
  };
}

const tareasDiaNormal = [
  { id: 'T01', prioridad: 'alta', complejidad: 4 },
  { id: 'T02', prioridad: 'media', complejidad: 3 },
  { id: 'T03', prioridad: 'alta', complejidad: 5 },
  { id: 'T04', prioridad: 'baja', complejidad: 2 },
];
console.log("--- Caso Normal: Carga de trabajo estándar ---");
console.log(gestionarTurnosSoldadura(tareasDiaNormal, { diurno: 8, nocturno: 8 }));

const tareasSobrecarga = [
  { id: 'T05', prioridad: 'alta', complejidad: 6 },
  { id: 'T06', prioridad: 'alta', complejidad: 7 },
  { id: 'T07', prioridad: 'media', complejidad: 5 },
];
console.log("\n--- Caso Borde: Sobrecarga de trabajo ---");
console.log(gestionarTurnosSoldadura(tareasSobrecarga, { diurno: 8, nocturno: 8 }));