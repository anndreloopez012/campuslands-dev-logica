//Ejercicio 032 - Logica matematica - Probabilidad basica

const CLASIFICACION = {
  COMPETITIVO: "competitivo",
  INTERMEDIO: "intermedio",
  PRINCIPIANTE: "principiante",
  SIN_DATOS: "sin_datos",
};

const UMBRAL_COMPETITIVO = 25;
const UMBRAL_INTERMEDIO = 10;

function calcularMediana(valores) {
  const ordenados = [...valores].sort((a, b) => a - b);
  const centro = Math.floor(ordenados.length / 2);

  return ordenados.length % 2 === 0
    ? (ordenados[centro - 1] + ordenados[centro]) / 2
    : ordenados[centro];
}

function clasificar(puntajeFinal) {
  if (puntajeFinal >= UMBRAL_COMPETITIVO) return CLASIFICACION.COMPETITIVO;
  if (puntajeFinal >= UMBRAL_INTERMEDIO) return CLASIFICACION.INTERMEDIO;
  return CLASIFICACION.PRINCIPIANTE;
}

function calcularPuntaje(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: CLASIFICACION.SIN_DATOS,
      explicacion: "No hay participantes registrados para calcular el puntaje.",
    };
  }

  const mediana = calcularMediana(participantes);
  const ajustado = mediana + bono - penalizacion;
  const puntajeFinal = Math.round(ajustado);
  const clasificacion = clasificar(puntajeFinal);

  const explicacion =
    `Se calculo la mediana de los puntajes (${mediana}), se sumo el bono ` +
    `(${bono}) y se resto la penalizacion (${penalizacion}) para obtener ${puntajeFinal} puntos.`;

  return { puntaje_final: puntajeFinal, clasificacion, explicacion };
}

module.exports = { calcularPuntaje };

if (require.main === module) {
  console.log("Caso normal:", calcularPuntaje([12, 18, 25, 30], 8, 3));

  console.log("Caso borde (vacio):", calcularPuntaje([], 5, 2));

  console.log("Caso adicional (bajo):", calcularPuntaje([2, 4, 6], 1, 3));
}
