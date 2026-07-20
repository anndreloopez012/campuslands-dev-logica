'use strict';

//Ejercicio 033 - Logica general

const CLIMAS_APTOS = ['bueno', 'moderado'];

const REGLAS = [
  {
    motivo: 'no cuenta con certificacion vigente',
    incumple: (jumper) => !jumper.certificado,
  },
  {
    motivo: 'peso fuera del rango permitido (40-120 kg)',
    incumple: (jumper) => jumper.peso < 40 || jumper.peso > 120,
  },
  {
    motivo: 'no cumple con las horas minimas de entrenamiento (8h)',
    incumple: (jumper) => jumper.horasEntrenamiento < 8,
  },
  {
    motivo: 'el equipo no fue revisado',
    incumple: (jumper) => !jumper.equipoRevisado,
  },
];

function evaluarSalto(jumper, clima) {
  if (!CLIMAS_APTOS.includes(clima)) {
    return {
      nombre: jumper.nombre,
      autorizado: false,
      motivo: 'clima no apto para saltar',
    };
  }

  const reglaIncumplida = REGLAS.find((regla) => regla.incumple(jumper));

  if (reglaIncumplida) {
    return {
      nombre: jumper.nombre,
      autorizado: false,
      motivo: reglaIncumplida.motivo,
    };
  }

  return {
    nombre: jumper.nombre,
    autorizado: true,
    motivo: 'cumple con todas las condiciones para saltar',
  };
}

function procesarSaltos(jumpers, clima) {
  if (!Array.isArray(jumpers) || jumpers.length === 0) {
    return [];
  }

  return jumpers.map((jumper) => evaluarSalto(jumper, clima));
}

const grupoNormal = [
  { nombre: 'Ana', peso: 65, horasEntrenamiento: 10, certificado: true, equipoRevisado: true },
  { nombre: 'Luis', peso: 90, horasEntrenamiento: 5, certificado: true, equipoRevisado: true },
];

console.log(procesarSaltos(grupoNormal, 'bueno'));

const grupoClimaMalo = [
  { nombre: 'Carla', peso: 60, horasEntrenamiento: 20, certificado: true, equipoRevisado: true },
];

console.log(procesarSaltos(grupoClimaMalo, 'malo'));

console.log(procesarSaltos([], 'bueno'));

module.exports = { procesarSaltos, evaluarSalto };