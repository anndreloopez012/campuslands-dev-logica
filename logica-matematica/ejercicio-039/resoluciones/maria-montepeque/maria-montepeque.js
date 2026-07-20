// Ejercicio 039 - Validaciones numericas

function evaluarFormula(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para evaluar.',
    };
  }

  const promedioGeneral =
    participantes.reduce((acc, valor) => acc + valor, 0) / participantes.length;

  const destacados = participantes.filter((valor) => valor > promedioGeneral);

  const promedioDestacados =
    destacados.length > 0
      ? destacados.reduce((acc, valor) => acc + valor, 0) / destacados.length
      : promedioGeneral;

  const puntajeFinal = Math.floor(promedioDestacados);
  const umbral = promedioGeneral + bono - penalizacion;

  let clasificacion;
  if (puntajeFinal > umbral) {
    clasificacion = 'competitivo';
  } else if (puntajeFinal === umbral) {
    clasificacion = 'regular';
  } else {
    clasificacion = 'bajo';
  }

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion:
      'se calculo el promedio de los destacados y se comparo contra el umbral (promedio general + bono - penalizacion).',
  };
}

// --- Pruebas manuales ---

// Caso normal (ejemplo del README)
console.log(evaluarFormula([12, 18, 25, 30], 8, 3));
// => { puntaje_final: 27, clasificacion: 'competitivo', explicacion: '...' }

// Caso borde: lista vacia
console.log(evaluarFormula([], 5, 2));
// => { puntaje_final: 0, clasificacion: 'sin datos', explicacion: '...' }

// Caso borde: todos los participantes iguales (sin destacados)
console.log(evaluarFormula([10, 10, 10, 10], 5, 2));
// => { puntaje_final: 10, clasificacion: 'bajo', explicacion: '...' }

module.exports = evaluarFormula;