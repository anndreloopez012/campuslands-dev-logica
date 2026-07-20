// Ejercicio 048 - Patrones de puntuación

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

  const promedio = suma / participantes.length;
  const puntajeFinal = promedio + bono - penalizacion;

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
    explicacion: "Se calculó el promedio, se agregó el bono y se restó la penalización."
  };
}

// Caso de prueba normal
console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));

// Caso borde
console.log(calcularPuntaje([], 8, 3));