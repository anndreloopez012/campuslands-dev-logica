function construirPeliculas(participantes) {
  return participantes.map((duracion, i) => {
    const divisible3 = duracion % 3 === 0;
    const divisible2 = duracion % 2 === 0;
    return {
      id: i + 1,
      duracion,
      divisible3,
      divisible2,
      numeroMaldito: divisible3 && divisible2
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

function calcularDivisibilidadObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const peliculas = construirPeliculas(participantes);

  const div3 = peliculas.filter((p) => p.divisible3).length;
  const numeroMaldito = peliculas.filter((p) => p.numeroMaldito).length;

  const proporcion_div3 = Math.round((div3 / n) * 100) / 100;
  const proporcion_div_ambos = Math.round((numeroMaldito / n) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleDiv3 = proporcion_div3 >= 0.5;
  const cumpleAmbos = proporcion_div_ambos <= 0.75;

  let clasificacion;
  if (cumpleDiv3 && cumpleAmbos) clasificacion = "competitivo";
  else if (cumpleDiv3 || cumpleAmbos) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    peliculas,
    proporcion_div3,
    proporcion_div_ambos,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron las duraciones en objetos con sus flags de divisibilidad antes de calcular, y se combino la proporcion de divisibles entre 3 con la de divisibles entre 3 y 2 a la vez."
  };
}

// prueba normal (ejemplo)
console.log(calcularDivisibilidadObjetos([12, 18, 25, 30], 8, 3));

// prueba caso especial (con valor 0, divisible entre todo)
console.log(calcularDivisibilidadObjetos([0, 9, 14], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularDivisibilidadObjetos([12, -3, 20], 5, 2));