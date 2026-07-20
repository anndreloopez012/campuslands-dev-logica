const catalogoPeliculasCienciaFicion = [
    { tituloOriginal: "Interstellar", puntuacionCritica: 74, puntuacionAudiencia: 86 },
    { tituloOriginal: "Blade Runner 2049", puntuacionCritica: 88, puntuacionAudiencia: 81 },
    { tituloOriginal: "Star Wars: The Last Jedi", puntuacionCritica: 91, puntuacionAudiencia: 42 },
    { tituloOriginal: "Dune: Part Two", puntuacionCritica: 92, puntuacionAudiencia: 95 }
  ];
  
  function analizarPatronesPuntuacion(peliculas) {
    const umbralBrechaPolarizacion = 15;
  
    return peliculas.map(pelicula => {
      const notaCritica = pelicula.puntuacionCritica;
      const notaAudiencia = pelicula.puntuacionAudiencia;
  
      if (notaCritica === undefined || notaAudiencia === undefined || notaCritica < 0 || notaAudiencia < 0) {
        return {
          pelicula: pelicula.tituloOriginal,
          brechaCalculada: 0,
          patronRecepcion: "Datos Insuficientes"
        };
      }
  
      const diferencialAbsoluto = Math.abs(notaCritica - notaAudiencia);
      const clasificacionPatron = diferencialAbsoluto <= umbralBrechaPolarizacion ? "Consensuada" : "Polarizada";
  
      return {
        pelicula: pelicula.tituloOriginal,
        brechaCalculada: diferencialAbsoluto,
        patronRecepcion: clasificacionPatron
      };
    });
  }
  
  const reportePatrones = analizarPatronesPuntuacion(catalogoPeliculasCienciaFicion);
  console.log(JSON.stringify(reportePatrones, null, 2));