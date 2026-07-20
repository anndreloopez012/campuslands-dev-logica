// Ejercicio 049 - Módulos y divisibilidad

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
    if (participantes[i] % 2 === 0) {
      suma += participantes[i] + bono;
    } else {
      suma += participantes[i] - penalizacion;
    }
  }

  let clasificacion = "";

  if (suma >= 100) {
    clasificacion = "elite";
  } else if (suma >= 50) {
    clasificacion = "competitivo";
  } else {
    clasificacion = "basico";
  }

  return {
    puntaje_final: suma,
    clasificacion,
    explicacion: "Se aplicó bono a números pares y penalización a números impares."
  };
}

// Caso normal
console.log(calcularPuntaje([12, 18, 25, 30], 8, 3));

// Caso borde
console.log(calcularPuntaje([], 8, 3));