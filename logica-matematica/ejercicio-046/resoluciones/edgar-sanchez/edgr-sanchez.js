const inventarioHiperdeportivos = [
    { modelo: "Bugatti Chiron Super Sport", velocidadMillasPorHora: 273 },
    { modelo: "Koenigsegg Jesko Absolut", velocidadMillasPorHora: 310 },
    { modelo: "Pagani Huayra Roadster", velocidadMillasPorHora: 238 }
  ];
  
  function normalizarTelemetriaHiperdeportivos(listaAutomoviles) {
    const factorConversionMillasAKilometros = 1.60934;
    const umbralVelocidadMegacarKilometros = 400;
  
    return listaAutomoviles.map(auto => {
      const velocidadMillas = auto.velocidadMillasPorHora;
      
      if (!velocidadMillas || velocidadMillas < 0) {
        return { auto: auto.modelo, velocidadKilometrosPorHora: 0, categoria: "Invalido" };
      }
  
      const velocidadKilometros = velocidadMillas * factorConversionMillasAKilometros;
      const categoriaAsignada = velocidadKilometros >= umbralVelocidadMegacarKilometros ? "Megacar" : "Hiperdeportivo Estandar";
  
      return {
        auto: auto.modelo,
        velocidadKilometrosPorHora: Number(velocidadKilometros.toFixed(2)),
        categoria: categoriaAsignada
      };
    });
  }
  
  const reporteNormalizado = normalizarTelemetriaHiperdeportivos(inventarioHiperdeportivos);
  console.log(JSON.stringify(reporteNormalizado, null, 2));