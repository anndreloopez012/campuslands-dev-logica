// Ejercicio 036 - Logica matematica - Presupuestos y descuentos

const RANGOS_CLASIFICACION = [
  { limite: 25, nombre: 'competitivo' },
  { limite: 15, nombre: 'intermedio' },
  { limite: -Infinity, nombre: 'basico' },
];

function calcularMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function clasificarPuntaje(puntaje) {
  return RANGOS_CLASIFICACION.find((rango) => puntaje >= rango.limite).nombre;
}

function calcularPresupuesto({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no hay participantes para calcular el puntaje.',
    };
  }

  const mediana = calcularMediana(participantes);
  const puntaje_final = Math.round(mediana + bono - penalizacion);
  const clasificacion = clasificarPuntaje(puntaje_final);

  return {
    puntaje_final,
    clasificacion,
    explicacion: `se calculo la mediana de los participantes (${mediana}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}), y el resultado se redondeo al entero mas cercano.`,
  };
}

module.exports = { calcularPresupuesto };

if (require.main === module) {
  const casoNormal = calcularPresupuesto({
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3,
  });
  console.log('Caso normal:', casoNormal);

  const casoBorde = calcularPresupuesto({
    participantes: [],
    bono: 5,
    penalizacion: 2,
  });
  console.log('Caso borde (lista vacia):', casoBorde);

  const casoImpar = calcularPresupuesto({
    participantes: [10, 14, 22],
    bono: 4,
    penalizacion: 6,
  });
  console.log('Caso adicional (cantidad impar):', casoImpar);
}