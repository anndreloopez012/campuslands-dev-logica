const playlistMusical = [
    { titulo: "Intro Sinfonico", duracionSegundos: 120, ordenSecuencia: 1 },
    { titulo: "Ritmo Creciente", duracionSegundos: 210, ordenSecuencia: 2 },
    { titulo: "Melodia Central", duracionSegundos: 240, ordenSecuencia: 3 },
    { titulo: "Climax Instrumental", duracionSegundos: 320, ordenSecuencia: 4 }
  ];
  
  function analizarSecuenciaPlaylist(canciones) {
    if (canciones.length === 0) {
      return { duracionTotalSegundos: 0, esSecuenciaAscendente: false };
    }
  
    const cancionesOrdenadas = [...canciones].sort((primerElemento, segundoElemento) => 
      primerElemento.ordenSecuencia - segundoElemento.ordenSecuencia
    );
  
    const duracionTotal = cancionesOrdenadas.reduce((acumulado, cancion) => 
      acumulado + (cancion.duracionSegundos || 0), 0
    );
  
    let esSecuenciaAscendente = true;
    for (let indice = 1; indice < cancionesOrdenadas.length; indice++) {
      if (cancionesOrdenadas[indice].duracionSegundos <= cancionesOrdenadas[indice - 1].duracionSegundos) {
        esSecuenciaAscendente = false;
        break;
      }
    }
  
    return {
      duracionTotalSegundos: duracionTotal,
      esSecuenciaAscendente: esSecuenciaAscendente
    };
  }
  
  const reporteSecuencia = analizarSecuenciaPlaylist(playlistMusical);
  console.log(JSON.stringify(reporteSecuencia, null, 2));