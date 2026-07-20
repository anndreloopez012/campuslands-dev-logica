const UMBRAL_FLUIDEZ = 0.7;

function construirTrazos(participantes) {
  const trazos = [];
  let numeroTrazo = 0;
  for (let i = 0; i < participantes.length - 1; i += 2) {
    numeroTrazo++;
    const distancia = participantes[i];
    const tiempo = participantes[i + 1];
    if (tiempo === undefined || tiempo === 0) {
      trazos.push({ trazo: numeroTrazo, distancia, tiempo, velocidad: null, fluido: false });
      continue;
    }
    const velocidad = Math.round((distancia / tiempo) * 1000) / 1000;
    trazos.push({ trazo: numeroTrazo, distancia, tiempo, velocidad, fluido: velocidad >= UMBRAL_FLUIDEZ });
  }
  return trazos;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length >= 2 && arr.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0);
}

function calcularVelocidadObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 valores numericos y no negativos para formar pares distancia/tiempo" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const trazos = construirTrazos(participantes);
  const trazosValidos = trazos.filter((t) => t.velocidad !== null);

  if (trazosValidos.length === 0) {
    return { error: "no hay pares tiempo validos (distinto de cero)" };
  }

  const velocidad_promedio =
    Math.round((trazosValidos.reduce((acc, t) => acc + t.velocidad, 0) / trazosValidos.length) * 1000) / 1000;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleVelocidad = velocidad_promedio >= UMBRAL_FLUIDEZ;
  const cumplePuntaje = puntaje_final >= 25;

  let clasificacion;
  if (cumpleVelocidad && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleVelocidad || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    trazos,
    velocidad_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los pares distancia/tiempo en objetos con su velocidad individual antes de calcular, y se combino la velocidad promedio con el puntaje final."
  };
}

console.log(calcularVelocidadObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularVelocidadObjetos([5, 20], 0, 0));

console.log(calcularVelocidadObjetos([10, 0], 5, 5));
