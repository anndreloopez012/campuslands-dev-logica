const paquetesTuristicosGrupales = [
    { destino: "Machu Picchu", costoTotalDolares: 1500.55, cantidadViajeros: 3 },
    { destino: "Galapagos", costoTotalDolares: 2800.00, cantidadViajeros: 6 },
    { destino: "Roma Historica", costoTotalDolares: 950.40, cantidadViajeros: 4 }
  ];
  
  function calcularDistribucionCostosViaje(listaPaquetes) {
    return listaPaquetes.map(paquete => {
      const personas = paquete.cantidadViajeros;
  
      if (!personas || personas <= 0) {
        return { destino: paquete.destino, costoIndividualRedondeado: 0, excedenteColectado: 0 };
      }
  
      const fraccionExacta = paquete.costoTotalDolares / personas;
      const costoIndividualRedondeado = Math.ceil(fraccionExacta * 100) / 100;
      const totalColectado = costoIndividualRedondeado * personas;
      const excedenteColectado = Number((totalColectado - paquete.costoTotalDolares).toFixed(2));
  
      return {
        destino: paquete.destino,
        costoIndividualRedondeado,
        excedenteColectado
      };
    });
  }
  
  const reporteCostosViaje = calcularDistribucionCostosViaje(paquetesTuristicosGrupales);
  console.log(JSON.stringify(reporteCostosViaje, null, 2));