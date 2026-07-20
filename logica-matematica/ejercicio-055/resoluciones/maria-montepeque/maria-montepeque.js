// Logica matematica 055 - velocidad tiempo distancia

const CLASIFICACIONES = [
  { limite: 30, nombre: 'elite' },
  { limite: 20, nombre: 'competitivo' },
  { limite: 0, nombre: 'principiante' },
];

function obtenerMediana(numeros) {
  const ordenados = [...numeros].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[mitad - 1] + ordenados[mitad]) / 2
    : ordenados[mitad];
}

function clasificar(puntaje) {
  return CLASIFICACIONES.find(({ limite }) => puntaje >= limite).nombre;
}

function calcularPuntajeFinal({ participantes, bono, penalizacion }) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: 'sin datos',
      explicacion: 'no se recibieron participantes, no es posible calcular un puntaje.',
    };
  }

  const mediana = Math.round(obtenerMediana(participantes));
  const puntajeFinal = mediana + bono - penalizacion;

  return {
    puntaje_final: puntajeFinal,
    clasificacion: clasificar(puntajeFinal),
    explicacion: `se calculo la mediana de los participantes (${mediana}), se sumo el bono (${bono}) y se resto la penalizacion (${penalizacion}).`,
  };
}

module.exports = { calcularPuntajeFinal };

// Pruebas manuales

console.log(calcularPuntajeFinal({ participantes: [12, 18, 25, 30], bono: 8, penalizacion: 3 }));
// Caso normal (ejemplo del enunciado) -> { puntaje_final: 27, clasificacion: 'competitivo', ... }

console.log(calcularPuntajeFinal({ participantes: [], bono: 5, penalizacion: 1 }));
// Caso borde: lista vacia -> { puntaje_final: 0, clasificacion: 'sin datos', ... }

console.log(calcularPuntajeFinal({ participantes: [40, 35], bono: 10, penalizacion: 2 }));
// Caso adicional: cantidad par de participantes -> mediana 37.5 redondeada a 38