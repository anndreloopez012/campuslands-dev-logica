// Ejercicio 038 - Normalizacion de puntajes

function normalizarPuntajes({ participantes, bono = 0, penalizacion = 0 } = {}) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin datos",
      explicacion: "no hay participantes para normalizar.",
    };
  }

  const promedioGeneral =
    participantes.reduce((acumulado, puntaje) => acumulado + puntaje, 0) / participantes.length;

  const destacados = participantes.filter((puntaje) => puntaje > promedioGeneral);
  const baseCalculo = destacados.length > 0 ? destacados : participantes;

  const promedioBase =
    baseCalculo.reduce((acumulado, puntaje) => acumulado + puntaje, 0) / baseCalculo.length;

  const puntajeFinal = Math.floor(promedioBase);
  const umbral = promedioGeneral + bono - penalizacion;
  const clasificacion = puntajeFinal >= umbral ? "competitivo" : "regular";

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "se sumo el bono y se resto la penalizacion segun las reglas.",
  };
}

module.exports = { normalizarPuntajes };

// ---------------------------------------------
// Pruebas manuales
// ---------------------------------------------

console.log(
  normalizarPuntajes({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  })
);
// Esperado: { puntaje_final: 27, clasificacion: 'competitivo', explicacion: '...' }

console.log(
  normalizarPuntajes({
    participantes: [10, 10, 10, 10],
    bono: 0,
    penalizacion: 5,
  })
);
// Esperado: { puntaje_final: 10, clasificacion: 'competitivo', explicacion: '...' }

console.log(normalizarPuntajes({ participantes: [] }));
// Esperado: { puntaje_final: 0, clasificacion: 'sin datos', explicacion: '...' }