const catalogoPeliculasMiedo = [
    { titulo: "El Conjuro", duracionMinutos: 120 },
    { titulo: "Siniestro", duracionMinutos: 110 },
    { titulo: "Psicosis", duracionMinutos: 109 },
    { titulo: "Cortometraje Terror", duracionMinutos: 0 }
  ];
  
  function evaluarBloquesTransmision(peliculas) {
    const tamañoBloqueMinutos = 30;
  
    return peliculas.map(pelicula => {
      const tiempoTotal = pelicula.duracionMinutos;
  
      if (!tiempoTotal || tiempoTotal <= 0) {
        return {
          pelicula: pelicula.titulo,
          ajusteBloque: "Invalido",
          minutosFaltantesParaBloque: 0
        };
      }
  
      const residuoMinutos = tiempoTotal % tamañoBloqueMinutos;
      const esDivisibleExacto = residuoMinutos === 0;
      const minutosFaltantes = esDivisibleExacto ? 0 : tamañoBloqueMinutos - residuoMinutos;
  
      return {
        pelicula: pelicula.titulo,
        ajusteBloque: esDivisibleExacto ? "Perfecto" : "Fraccionado",
        minutosFaltantesParaBloque: minutosFaltantes
      };
    });
  }
  
  const reporteBloquesHorarios = evaluarBloquesTransmision(catalogoPeliculasMiedo);
  console.log(JSON.stringify(reporteBloquesHorarios, null, 2));