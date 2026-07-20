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
}