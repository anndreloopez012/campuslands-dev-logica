function construirAterrizajes(participantes) {
  const aterrizajes = [];
  let salto = 0;
  for (let i = 0; i < participantes.length - 1; i += 2) {
    salto++;
    const x = participantes[i];
    const y = participantes[i + 1] !== undefined ? participantes[i + 1] : 0;
    const distancia = Math.round(Math.sqrt(x * x + y * y) * 100) / 100;
    let precision;
    if (distancia <= 35) precision = "cerca";
    else if (distancia <= 50) precision = "medio";
    else precision = "lejos";
    aterrizajes.push({ salto, x, y, distancia, precision });
  }
  return aterrizajes;
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

function calcularCoordenadasObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 valores numericos y no negativos para formar coordenadas" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const aterrizajes = construirAterrizajes(participantes);
  const distancia_promedio =
    Math.round((aterrizajes.reduce((acc, a) => acc + a.distancia, 0) / aterrizajes.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleDistancia = distancia_promedio <= 35;
  const cumplePuntaje = puntaje_final >= 25;

  let clasificacion;
  if (cumpleDistancia && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleDistancia || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    aterrizajes,
    distancia_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los pares de coordenadas en objetos con su distancia al objetivo antes de calcular, y se combino la distancia promedio con el puntaje final."
  };
}

console.log(calcularCoordenadasObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularCoordenadasObjetos([80, 90], 0, 0));

console.log(calcularCoordenadasObjetos([10], 5, 5));
