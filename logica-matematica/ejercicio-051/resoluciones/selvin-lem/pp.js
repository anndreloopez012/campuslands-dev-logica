const DIF_MAXIMA = 6;

function construirCombates(participantes) {
  const combates = [];
  let contador = 0;
  for (let i = 0; i < participantes.length; i++) {
    for (let j = i + 1; j < participantes.length; j++) {
      contador++;
      const peleadorA = participantes[i];
      const peleadorB = participantes[j];
      const diferencia = Math.abs(peleadorA - peleadorB);
      combates.push({
        combate: contador,
        peleadorA,
        peleadorB,
        diferencia,
        parejo: diferencia <= DIF_MAXIMA
      });
    }
  }
  return combates;
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

function calcularCombinatoriaObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 participantes validos (numeros finitos, no negativos)" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const combates = construirCombates(participantes);
  const parejos = combates.filter((c) => c.parejo).length;
  const proporcion_parejos = Math.round((parejos / combates.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleParejos = proporcion_parejos >= 0.3;
  const cumplePuntaje = puntaje_final >= 25;

  let clasificacion;
  if (cumpleParejos && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleParejos || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    combates,
    proporcion_parejos,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron todas las combinaciones posibles de peleadores en objetos con su diferencia de nivel antes de calcular, y se combino la proporcion de combates parejos con el puntaje final."
  };
}

console.log(calcularCombinatoriaObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularCombinatoriaObjetos([50, 51, 52], 0, 0));

console.log(calcularCombinatoriaObjetos([10], 5, 5));