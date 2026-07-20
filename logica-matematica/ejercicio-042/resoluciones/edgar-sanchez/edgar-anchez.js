const historialPartidasJugador = [
    { asesinatos: 15, asistencias: 7, muertes: 0, victoria: true },
    { asesinatos: 2, asistencias: 4, muertes: 9, victoria: false },
    { asesinatos: 8, asistencias: 12, muertes: 4, victoria: true },
    { asesinatos: 0, asistencias: 1, muertes: 5, victoria: false }
  ];
  
  function calcularMetricasDesempeno(partidas) {
    return partidas.map(partida => {
      const divisorMuertesSeguro = partida.muertes === 0 ? 1 : partida.muertes;
      const relacionKillsAsistencias = (partida.asesinatos + partida.asistencias) / divisorMuertesSeguro;
      const bonificadorResultado = partida.victoria ? 1.2 : 0.9;
      const calculoRendimientoFinal = Math.max(0, relacionKillsAsistencias * bonificadorResultado);
      
      return {
        rendimientoFinal: Number(calculoRendimientoFinal.toFixed(2))
      };
    });
  }
  
  const resultadoEvaluacion = calcularMetricasDesempeno(historialPartidasJugador);
  console.log(resultadoEvaluacion);