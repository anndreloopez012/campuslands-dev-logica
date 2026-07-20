function construirJugadores(participantes, puntos_totales) {
  const maximo = Math.max(...participantes);
  return participantes.map((puntos, i) => {
    const probabilidad_individual = puntos_totales === 0
      ? 0
      : Math.round((puntos / puntos_totales) * 1000) / 1000;
    return {
      id: i + 1,
      puntos,
      probabilidad_individual,
      esTop: puntos === maximo
    };
  });
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularProbabilidadObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  let puntos_totales = 0;
  for (let i = 0; i < participantes.length; i++) puntos_totales += participantes[i];

  const jugadores = construirJugadores(participantes, puntos_totales);
  const jugadorTop = jugadores.find((j) => j.esTop);
  const probabilidad_top = jugadorTop.probabilidad_individual;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleProbabilidad = probabilidad_top >= 0.35;
  const cumplePuntaje = puntaje_final >= 25;

  let clasificacion;
  if (cumpleProbabilidad && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleProbabilidad || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    jugadores,
    probabilidad_top,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los jugadores en objetos con su probabilidad individual antes de calcular, y se combino la probabilidad del jugador top con el puntaje final."
  };
}

console.log(calcularProbabilidadObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularProbabilidadObjetos([20, 20, 20, 20], 0, 0));

console.log(calcularProbabilidadObjetos([12, -5, 20], 5, 2));
