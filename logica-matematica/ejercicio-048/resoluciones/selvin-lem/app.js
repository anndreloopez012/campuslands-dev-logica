function construirPeliculas(participantes, promedio) {
  return participantes.map((puntuacion, i) => {
    let categoria;
    if (puntuacion > promedio) categoria = "pico";
    else if (puntuacion < promedio) categoria = "valle";
    else categoria = "neutro";
    return { id: i + 1, puntuacion, categoria };
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

function calcularPatronObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "participantes vacio, no numerico o con valores negativos" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const promedio = participantes.reduce((a, b) => a + b, 0) / n;
  const peliculas = construirPeliculas(participantes, promedio);

  const picos = peliculas.filter((p) => p.categoria === "pico").length;
  const valles = peliculas.filter((p) => p.categoria === "valle").length;

  const proporcion_picos = Math.round((picos / n) * 100) / 100;
  const proporcion_valles = Math.round((valles / n) * 100) / 100;
  const equilibrio_patron = Math.round((1 - Math.abs(proporcion_picos - proporcion_valles)) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePicos = proporcion_picos >= 0.5;
  const cumpleEquilibrio = equilibrio_patron >= 0.5;

  let clasificacion;
  if (cumplePicos && cumpleEquilibrio) clasificacion = "competitivo";
  else if (cumplePicos || cumpleEquilibrio) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    peliculas,
    proporcion_picos,
    equilibrio_patron,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron las puntuaciones en objetos clasificados respecto al promedio antes de calcular, y se combino la dominancia de picos con el equilibrio del patron."
  };
}

// prueba normal (ejemplo)
console.log(calcularPatronObjetos([12, 18, 25, 30], 8, 3));

// prueba caso especial (patron desequilibrado)
console.log(calcularPatronObjetos([10, 10, 90], 0, 0));

// prueba caso borde (valor negativo, rechazado)
console.log(calcularPatronObjetos([12, -5, 20], 5, 2));