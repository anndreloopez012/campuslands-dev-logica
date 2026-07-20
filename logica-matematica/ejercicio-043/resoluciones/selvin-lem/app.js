function calcularPromedioMedianaAnalisis(participantes, bono, penalizacion) {
  if (!Array.isArray(participantes) || participantes.length === 0) {
    return { error: "participantes vacio o invalido" };
  }
  for (const valor of participantes) {
    if (typeof valor !== "number" || !Number.isFinite(valor)) {
      return { error: "participantes contiene valores no numericos" };
    }
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const n = participantes.length;
  const promedio = participantes.reduce((a, b) => a + b, 0) / n;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  let sesgo, estabilidad;
  if (n === 1) {
    sesgo = 0;
    estabilidad = 1;
  } else {
    sesgo = Math.round((promedio - mediana) * 100) / 100;
    estabilidad = promedio === 0
      ? 0
      : Math.round((1 - Math.abs(sesgo) / promedio) * 100) / 100;
  }

  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePuntaje = puntaje_final >= promedio;
  const cumpleEstabilidad = estabilidad >= 0.9;

  let clasificacion;
  if (cumplePuntaje && cumpleEstabilidad) clasificacion = "competitivo";
  else if (cumplePuntaje || cumpleEstabilidad) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    sesgo,
    estabilidad,
    clasificacion,
    explicacion: "se comparo el promedio contra la mediana para medir el sesgo y la estabilidad del grupo; la clasificacion combina el puntaje final frente al promedio y la estabilidad."
  };
}

// prueba normal (ejemplo)
console.log(calcularPromedioMedianaAnalisis([12, 18, 25, 30], 8, 3));

// prueba caso especial (partida atipica)
console.log(calcularPromedioMedianaAnalisis([5, 6, 7, 100], 0, 0));

// prueba caso borde (un solo elemento)
console.log(calcularPromedioMedianaAnalisis([15], 5, 2));
