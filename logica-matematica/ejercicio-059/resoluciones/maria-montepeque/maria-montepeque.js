// Ejercicio 059 - Logica matematica: validaciones numericas

const RANGOS = [
  { limite: 40, clasificacion: 'elite' },
  { limite: 20, clasificacion: 'competitivo' },
  { limite: 0, clasificacion: 'principiante' },
  { limite: -Infinity, clasificacion: 'no_clasificado' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function clasificarPuntaje(puntaje) {
  return RANGOS.find((rango) => puntaje >= rango.limite).clasificacion;
}

function evaluarPuntaje({ participantes, bono = 0, penalizacion = 0 } = {}) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin_datos',
      explicacion: 'No se recibieron participantes para evaluar.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntajeBase = Math.round(mediana);
  const puntajeFinal = puntajeBase + bono - penalizacion;
  const clasificacion = clasificarPuntaje(puntajeFinal);

  const explicacion =
    `Se calculo la mediana de los participantes (${mediana}), se redondeo a ${puntajeBase}, ` +
    `se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}), ` +
    `dando un puntaje final de ${puntajeFinal} clasificado como ${clasificacion}.`;

  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
}

// Pruebas manuales

// Caso normal (ejemplo del README)
console.log(
  evaluarPuntaje({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 })
);

// Caso borde: lista vacia
console.log(evaluarPuntaje({ participantes: [], bono: 5, penalizacion: 2 }));

// Caso borde: penalizacion mayor al puntaje base mas el bono
console.log(
  evaluarPuntaje({ participantes: [5, 5, 5], bono: 0, penalizacion: 10 })
);

module.exports = { evaluarPuntaje };