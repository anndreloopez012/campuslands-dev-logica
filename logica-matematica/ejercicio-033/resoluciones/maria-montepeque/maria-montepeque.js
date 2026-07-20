// Ejercicio 033 - Logica matematica - Paracaidismo
// Entrada: lista de puntajes de participantes, un bono y una penalizacion.
// Salida: puntaje final del grupo destacado y su clasificacion.

const CLASIFICACIONES = {
  COMPETITIVO: 'competitivo',
  REGULAR: 'regular',
  NECESITA_MEJORAR: 'necesita mejorar',
  SIN_DATOS: 'sin datos',
};

function promedio(lista) {
  const suma = lista.reduce((acumulado, valor) => acumulado + valor, 0);
  return suma / lista.length;
}

function calcularPuntajeFinal({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: null,
      clasificacion: CLASIFICACIONES.SIN_DATOS,
      explicacion: 'No hay participantes para calcular un puntaje.',
    };
  }

  const promedioGeneral = promedio(participantes);

  // Destacados: quienes superan el promedio general del grupo.
  const destacados = participantes.filter((valor) => valor > promedioGeneral);

  // Si nadie supera el promedio (ej. todos empatados), se usa el promedio general.
  const promedioDestacados = destacados.length > 0 ? promedio(destacados) : promedioGeneral;

  const puntajeFinal = Math.floor(promedioDestacados);
  const umbral = promedioGeneral + bono - penalizacion;

  let clasificacion;
  if (puntajeFinal >= umbral) {
    clasificacion = CLASIFICACIONES.COMPETITIVO;
  } else if (puntajeFinal >= promedioGeneral) {
    clasificacion = CLASIFICACIONES.REGULAR;
  } else {
    clasificacion = CLASIFICACIONES.NECESITA_MEJORAR;
  }

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: `Se promediaron los puntajes por encima del promedio general (${promedioGeneral}) y se comparo contra el umbral (${umbral}) definido por el bono y la penalizacion.`,
  };
}

// --- Pruebas manuales ---

// Caso normal (ejemplo del README)
console.log(
  calcularPuntajeFinal({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  })
);
// Esperado: { puntaje_final: 27, clasificacion: 'competitivo', ... }

// Caso borde: todos los participantes empatados
console.log(
  calcularPuntajeFinal({
    participantes: [20, 20, 20, 20],
    bono: 5,
    penalizacion: 5,
  })
);
// Esperado: { puntaje_final: 20, clasificacion: 'competitivo', ... }

// Caso borde: lista vacia
console.log(
  calcularPuntajeFinal({
    participantes: [],
    bono: 5,
    penalizacion: 5,
  })
);
// Esperado: { puntaje_final: null, clasificacion: 'sin datos', ... }

module.exports = { calcularPuntajeFinal };