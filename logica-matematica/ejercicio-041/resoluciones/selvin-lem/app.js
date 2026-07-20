function calcularOperacionAnalisis(participantes, bono, penalizacion) {
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

  let sumaCuadrados = 0;
  for (let i = 0; i < n; i++) sumaCuadrados += Math.pow(participantes[i] - promedio, 2);
  const desviacion_estandar = Math.sqrt(sumaCuadrados / n);

  const consistencia = promedio === 0
    ? 0
    : Math.round((1 - desviacion_estandar / promedio) * 100) / 100;

  const ordenado = [...participantes].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const mediana = n % 2 === 0 ? (ordenado[mid - 1] + ordenado[mid]) / 2 : ordenado[mid];

  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumplePuntaje = puntaje_final >= 25;
  const cumpleConsistencia = consistencia >= 0.5;

  let clasificacion;
  if (cumplePuntaje && cumpleConsistencia) clasificacion = "competitivo";
  else if (cumplePuntaje || cumpleConsistencia) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    puntaje_final,
    consistencia,
    clasificacion,
    explicacion: "se calculo el puntaje final (mediana + bono - penalizacion, sin bajar de cero) y la consistencia del grupo (1 - desviacion/promedio); la clasificacion combina ambas condiciones."
  };
}

// prueba normal (ejemplo)
console.log(calcularOperacionAnalisis([12, 18, 25, 30], 8, 3));

console.log(calcularOperacionAnalisis([5, 6, 7], 0, 50));

console.log(calcularOperacionAnalisis([], 5, 5));
