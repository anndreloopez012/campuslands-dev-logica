const estadisticasEquiposTorneo = [
    { nombreEquipo: "Alpha Strikers", puntuacionesRondas: [85, 92, 78, 95, 88] },
    { nombreEquipo: "Beta Knights", puntuacionesRondas: [60, 85, 70, 90] },
    { nombreEquipo: "Delta Legends", puntuacionesRondas: [] }
  ];
  
  function calcularMetricasTorneo(listaEquipos) {
    return listaEquipos.map(equipo => {
      const puntajes = equipo.puntuacionesRondas;
      const cantidadRondas = puntajes.length;
  
      if (cantidadRondas === 0) {
        return { equipo: equipo.nombreEquipo, promedio: 0, mediana: 0 };
      }
  
      const sumaTotalPuntajes = puntajes.reduce((acumulador, actual) => acumulador + actual, 0);
      const promedioPuntuacion = sumaTotalPuntajes / cantidadRondas;
  
      const puntajesOrdenados = [...puntajes].sort((a, b) => a - b);
      const indiceCentral = Math.floor(cantidadRondas / 2);
      
      const medianaPuntuacion = cantidadRondas % 2 !== 0
        ? puntajesOrdenados[indiceCentral]
        : (puntajesOrdenados[indiceCentral - 1] + puntajesOrdenados[indiceCentral]) / 2;
  
      return {
        equipo: equipo.nombreEquipo,
        promedio: Number(promedioPuntuacion.toFixed(2)),
        mediana: Number(medianaPuntuacion.toFixed(2))
      };
    });
  }
  
  const reporteFinalTorneo = calcularMetricasTorneo(estadisticasEquiposTorneo);
  console.log(reporteFinalTorneo);