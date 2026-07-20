function calcularPuntaje(participantes, bono, penalizacion) {
  let total = 0;
  for (let i = 0; i < participantes.length; i++) {
    total = total + participantes[i];
  }
  
  let sumaPorcentajes = 0;
  if (total > 0) {
    for (let i = 0; i < participantes.length; i++) {
      let porcentaje = (participantes[i] / total) * 100;
      sumaPorcentajes = sumaPorcentajes + porcentaje;
    }
  }
  
  let puntajeFinal = sumaPorcentajes + bono - penalizacion;
  let clasificacion = "normal";
  if (puntajeFinal >= 50) {
    clasificacion = "competitivo";
  }
  
  return "puntaje_final: " + puntajeFinal + ", clasificacion: " + clasificacion;
}function calcularPuntaje(participantes, bono, penalizacion) {
  if (participantes.length === 0) return "puntaje_final: 0, clasificacion: normal";
  let suma = 0;
  for (let i = 0; i < participantes.length; i++) suma += participantes[i];
  let promedio = suma / participantes.length;
  let ordenados = [...participantes].sort((a, b) => a - b);
  let mitad = Math.floor(ordenados.length / 2);
  let mediana = ordenados.length % 2 === 0 ? (ordenados[mitad - 1] + ordenados[mitad]) / 2 : ordenados[mitad];
  let puntajeFinal = promedio + mediana + bono - penalizacion;
  let clasificacion = puntajeFinal >= 30 ? "competitivo" : "normal";
  return "puntaje_final: " + puntajeFinal + ", clasificacion: " + clasificacion;
}
