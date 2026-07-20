function calcularPuntaje(participantes, bono, penalizacion) {
  let suma = 0;
  for (let i = 0; i < participantes.length; i++) {
    suma = suma + participantes[i];
  }
  let puntajeFinal = suma + bono - penalizacion;
  let clasificacion = "normal";
  if (puntajeFinal >= 25) {
    clasificacion = "competitivo";
  }
  return "puntaje_final: " + puntajeFinal + ", clasificacion: " + clasificacion;
}