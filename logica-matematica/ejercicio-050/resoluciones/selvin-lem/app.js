function construirCostos(participantes) {
  return participantes.map((costo, i) => {
    const redondeado = Math.round(costo);
    const error = Math.round(Math.abs(costo - redondeado) * 100) / 100;
    return { id: i + 1, costo, redondeado, error };
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

function calcularRedondeoObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const costos = construirCostos(participantes);

  const error_redondeo_promedio =
    Math.round((costos.reduce((acc, c) => acc + c.error, 0) / costos.length) * 100) / 100;
  const error_redondeo_maximo = Math.round(Math.max(...costos.map((c) => c.error)) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePromedio = error_redondeo_promedio <= 0.25;
  const cumpleMaximo = error_redondeo_maximo <= 0.4;

  let clasificacion;
  if (cumplePromedio && cumpleMaximo) clasificacion = "competitivo";
  else if (cumplePromedio || cumpleMaximo) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    costos,
    error_redondeo_promedio,
    error_redondeo_maximo,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron los costos en objetos con su error de redondeo individual antes de calcular, y se combino el error promedio del grupo con el peor caso individual."
  };
}

// prueba normal (ejemplo, valores enteros -> error 0)
console.log(calcularRedondeoObjetos([12, 18, 25, 30], 8, 3));

// prueba caso especial (decimales cercanos a 0.5)
console.log(calcularRedondeoObjetos([10.5, 20.4, 15.5], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularRedondeoObjetos([12, -5, 20], 5, 2));