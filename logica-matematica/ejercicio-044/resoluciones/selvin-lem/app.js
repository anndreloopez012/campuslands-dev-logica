function calcularRangoMaximoAnalisis(participantes, bono, penalizacion) {
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
  const minimo = Math.min(...participantes);
  const rango = maximo - minimo;

  const cantidadEnMinimo = participantes.filter((p) => p === minimo).length;
  const cantidadEnMaximo = participantes.filter((p) => p === maximo).length;
  const concentracion_extremos = Math.round((cantidadEnMinimo + cantidadEnMaximo) / n * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cobertura_rango = rango === 0
    ? 1
    : Math.round(((puntaje_final - minimo) / rango) * 100) / 100;

  const cumpleCobertura = cobertura_rango >= 0.5;
  const cumpleConcentracion = concentracion_extremos <= 0.5;

  let clasificacion;
  if (cumpleCobertura && cumpleConcentracion) clasificacion = "competitivo";
  else if (cumpleCobertura || cumpleConcentracion) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    cobertura_rango,
    concentracion_extremos,
    clasificacion,
    explicacion: "se calculo donde cae el puntaje final dentro del rango de precios, y que tan concentrados estan los precios en los extremos; la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularRangoMaximoAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (inventario polarizado)
console.log(calcularRangoMaximoAnalisis([10, 10, 10, 50, 50], 0, 0));

// prueba caso borde (rango 0)
console.log(calcularRangoMaximoAnalisis([20, 20, 20], 0, 0));
