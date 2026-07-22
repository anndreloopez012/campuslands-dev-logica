// Ejercicio 049 - Logica general 049 - simulacion de estados
// Autor: Stefani Sánchez

/**
 * Simula la transición de estados emocionales/situacionales en una escena de película de terror.
 * @param {Array<string>} eventos - Lista de sucesos en la escena.
 * @param {string} estadoInicial - Estado inicial del personaje.
 * @returns {Object} Estado final, nivel de estrés alcanzado e historial de estados.
 */
const simularEstadosTerror = (eventos, estadoInicial = "tranquilo") => {
  if (!Array.isArray(eventos)) {
    return {
      estadoFinal: estadoInicial,
      nivelEstres: 0,
      historial: [estadoInicial],
      mensaje: "Entrada de eventos invalida."
    };
  }

  let estadoActual = estadoInicial;
  let nivelEstres = 0;
  const historial = [estadoActual];

  for (const evento of eventos) {
    switch (evento) {
      case "ruido_extranio":
        estadoActual = "alerta";
        nivelEstres += 25;
        break;
      case "apagon":
        estadoActual = "asustado";
        nivelEstres += 35;
        break;
      case "aparicion":
        estadoActual = "panico";
        nivelEstres += 40;
        break;
      case "huida_exitosa":
        estadoActual = "a_salvo";
        nivelEstres = Math.max(0, nivelEstres - 50);
        break;
      default:
        break;
    }
    historial.push(estadoActual);
  }

  return {
    estadoFinal: estadoActual,
    nivelEstres: Math.min(100, nivelEstres),
    historial,
    mensaje: `Simulacion completada con estado final: ${estadoActual}.`
  };
};

// Casos de prueba
console.log("Caso Normal:");
console.log(simularEstadosTerror(["ruido_extranio", "apagon", "aparicion"]));

console.log("\nCaso Borde:");
console.log(simularEstadosTerror([], "alerta"));
