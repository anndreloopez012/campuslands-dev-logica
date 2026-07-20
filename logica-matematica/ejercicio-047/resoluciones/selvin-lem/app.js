function construirTramos(participantes) {
  const tramos = [];
  for (let i = 1; i < participantes.length; i++) {
    const pistaAnterior = participantes[i - 1];
    const pistaSiguiente = participantes[i];
    const diferencia = pistaSiguiente - pistaAnterior;
    let tipo;
    if (diferencia > 0) tipo = "sube";
    else if (diferencia < 0) tipo = "baja";
    else tipo = "igual";
    tramos.push({ tramo: i, pistaAnterior, pistaSiguiente, diferencia, tipo });
  }
  return tramos;
}

function calcularMediana(arr) {
  const ordenado = [...arr].sort((a, b) => a - b);
  const n = ordenado.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];
}

function validarParticipantes(arr) {
  return Array.isArray(arr) && arr.length >= 2 && arr.every((v) => typeof v === "number" && Number.isFinite(v));
}

function calcularSecuenciaObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 valores numericos en participantes" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const tramos = construirTramos(participantes);
  const esConstante = tramos.every((t) => t.tipo === "igual");

  let proporcion_crecientes, variabilidad;
  if (esConstante) {
    proporcion_crecientes = 0;
    variabilidad = 0;
  } else {
    const crecientes = tramos.filter((t) => t.tipo === "sube").length;
    proporcion_crecientes = Math.round((crecientes / tramos.length) * 100) / 100;

    const diferencia_promedio = tramos.reduce((acc, t) => acc + t.diferencia, 0) / tramos.length;
    const sumaDesviaciones = tramos.reduce((acc, t) => acc + Math.abs(t.diferencia - diferencia_promedio), 0);
    variabilidad = Math.round((sumaDesviaciones / tramos.length) * 100) / 100;
  }

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleCreciente = proporcion_crecientes >= 0.6;
  const cumpleVariabilidad = variabilidad <= 2;

  let clasificacion;
  if (cumpleCreciente && cumpleVariabilidad) clasificacion = "competitivo";
  else if (cumpleCreciente || cumpleVariabilidad) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    tramos,
    proporcion_crecientes,
    variabilidad,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los tramos entre pistas consecutivas en objetos antes de calcular, y se combinaron la proporcion de tramos crecientes con la variabilidad de esos cambios."
  };
}

// prueba normal (ejemplo)
console.log(calcularSecuenciaObjetos([12, 18, 25, 30], 8, 3));

// prueba caso especial (secuencia decreciente e irregular)
console.log(calcularSecuenciaObjetos([40, 10, 35, 5], 0, 0));

// prueba caso borde (secuencia constante)
console.log(calcularSecuenciaObjetos([15, 15, 15], 5, 2));