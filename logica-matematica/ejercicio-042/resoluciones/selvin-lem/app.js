function calcularPorcentajeAnalisis(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  for (const valor of participantes) {
    if (typeof valor !== "number" || !Number.isFinite(valor) || valor < 0) {
      return { error: "participantes contiene valores invalidos (no numericos o negativos)" };
    }
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const maximo = Math.max(...participantes);
  const cantidad_lideres = participantes.filter((p) => p === maximo).length;
  const porcentaje_participacion_top = Math.round((cantidad_lideres / n) * 10000) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const porcentaje_liderazgo = maximo === 0
    ? 0
    : Math.round((puntaje_final / maximo) * 10000) / 100;

  const cumpleLiderazgo = porcentaje_liderazgo >= 80;
  const cumpleParticipacion = porcentaje_participacion_top <= 50;

  let clasificacion;
  if (cumpleLiderazgo && cumpleParticipacion) clasificacion = "competitivo";
  else if (cumpleLiderazgo || cumpleParticipacion) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    porcentaje_liderazgo,
    porcentaje_participacion_top,
    clasificacion,
    explicacion: "se calculo el porcentaje de liderazgo del puntaje final frente al maximo, y el porcentaje de equipos empatados en el maximo; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularPorcentajeAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (empate en el maximo)
console.log(calcularPorcentajeAnalisis([30, 30, 30, 10], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularPorcentajeAnalisis([12, -5, 20], 5, 2));

