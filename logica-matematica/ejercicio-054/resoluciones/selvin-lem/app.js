function construirZonas(participantes) {
  const zonas = [];
  let zona = 0;
  for (let i = 0; i < participantes.length - 1; i += 2) {
    zona++;
    const base = participantes[i];
    const altura = participantes[i + 1] !== undefined ? participantes[i + 1] : 0;
    const area = base * altura;
    const perimetro = 2 * (base + altura);
    const eficiencia = perimetro === 0 ? 0 : Math.round((area / perimetro) * 100) / 100;
    zonas.push({ zona, base, altura, area, perimetro, eficiencia });
  }
  return zonas;
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

function calcularAreaPerimetroObjetos(participantes, bono, penalizacion) {
  if (!validarParticipantes(participantes)) {
    return { error: "se necesitan al menos 2 valores numericos y no negativos para formar zonas" };
  }
  const bonoValido = typeof bono === "number" && bono >= 0 ? bono : 0;
  const penalizacionValida = typeof penalizacion === "number" && penalizacion >= 0 ? penalizacion : 0;

  const zonas = construirZonas(participantes);
  const eficiencia_promedio =
    Math.round((zonas.reduce((acc, z) => acc + z.eficiencia, 0) / zonas.length) * 100) / 100;

  const mediana = calcularMediana(participantes);
  const puntajeCrudo = Math.round(mediana) + bonoValido - penalizacionValida;
  const puntaje_final = Math.max(puntajeCrudo, 0);

  const cumpleEficiencia = eficiencia_promedio >= 5;
  const cumplePuntaje = puntaje_final >= 25;

  let clasificacion;
  if (cumpleEficiencia && cumplePuntaje) clasificacion = "competitivo";
  else if (cumpleEficiencia || cumplePuntaje) clasificacion = "intermedio";
  else clasificacion = "principiante";

  return {
    zonas,
    eficiencia_promedio,
    puntaje_final,
    clasificacion,
    explicacion: "se organizaron las zonas de tatuaje en objetos con su area, perimetro y eficiencia individual antes de calcular, y se combino la eficiencia promedio con el puntaje final."
  };
}

console.log(calcularAreaPerimetroObjetos([12, 18, 25, 30], 8, 3));

console.log(calcularAreaPerimetroObjetos([2, 40], 0, 0));

console.log(calcularAreaPerimetroObjetos([10], 5, 5));
