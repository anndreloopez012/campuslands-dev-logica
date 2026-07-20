// Ejercicio 050 - Redondeo y precisión

function calcularPuntaje(participantes, bono, penalizacion) {
  if (!participantes || participantes.length === 0) {
    return {
      puntaje_final: 0,
      clasificacion: "sin datos",
      explicacion: "No se ingresaron participantes."
    };
  }

  let suma = 0;

  for (let i = 0; i < participantes.length; i++) {
    suma += participantes[i];
  }

  let promedio = suma / participantes.length;
  let puntajeFinal = Math.round((promedio + bono - penalizacion) * 100) / 100;

  let clasificacion = "";

  if (puntajeFinal >= 30) {
    clasificacion = "elite";
  } else if (puntajeFinal >= 20) {
    clasificacion = "competitivo";
  } else {
    clasificacion = "basico";
  }

  return {
    puntaje_final: puntajeFinal,
    clasificacion,
    explicacion: "Se calculó el promedio y se redondeó el resultado a dos decimales."
  };
}

// Caso normal
console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));

// Caso borde
console.log(calcularPuntaje([], 8, 3));