const FACTOR_KMH_A_MPH = 0.621371;
const LIMITE_MPH = 15;

function kmhAMph(valorKmh) {
  return valorKmh * FACTOR_KMH_A_MPH;
}

function construirAutos(participantes) {
  return participantes.map((velocidad_kmh, i) => {
    const velocidad_mph = Math.round(kmhAMph(velocidad_kmh) * 100) / 100;
    return {
      id: i + 1,
      velocidad_kmh,
      velocidad_mph,
      superaLimite: velocidad_mph > LIMITE_MPH
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

function calcularConversionObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const autos = construirAutos(participantes);

  const promedio_mph =
    Math.round((autos.reduce((acc, a) => acc + a.velocidad_mph, 0) / autos.length) * 100) / 100;

  const cantidadSuperaLimite = autos.filter((a) => a.superaLimite).length;
  const superan_limite = Math.round((cantidadSuperaLimite / autos.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePromedio = promedio_mph >= 13;
  const cumpleSuperan = superan_limite >= 0.4;

  let clasificacion;
  if (cumplePromedio && cumpleSuperan) clasificacion = "competitivo";
  else if (cumplePromedio || cumpleSuperan) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    autos,
    promedio_mph,
    superan_limite,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los autos en objetos con su velocidad convertida antes de calcular, y se combinaron el promedio en mph con la proporcion que supera el limite de referencia."
  };
}

// prueba normal (ejemplo)
console.log(calcularConversionObjetos([12, 18, 25, 30], 8, 3));

// prueba caso especial (velocidades bajas)
console.log(calcularConversionObjetos([5, 6, 7], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularConversionObjetos([12, -5, 20], 5, 2));
