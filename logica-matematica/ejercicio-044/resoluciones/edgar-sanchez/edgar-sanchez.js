const existenciasMotocicletas = [
    { modelo: "Scooter 125cc", cilindradaCC: 125, precioDolares: 2500 },
    { modelo: "Naked 300cc", cilindradaCC: 300, precioDolares: 5200 },
    { modelo: "Adventure 1200cc", cilindradaCC: 1200, precioDolares: 18500 },
    { modelo: "Sport 600cc", cilindradaCC: 600, precioDolares: 11000 }
  ];
  
  function analizarInventarioMotos(listaMotos) {
    if (listaMotos.length === 0) {
      return { motocicletasClasificadas: [], motoMasCostosa: null };
    }
  
    const motoMasCostosa = listaMotos.reduce((maxima, actual) => 
      actual.precioDolares > maxima.precioDolares ? actual : maxima
    );
  
    const motocicletasClasificadas = listaMotos.map(moto => {
      let rangoCilindrada = "Alta";
      
      if (moto.cilindradaCC < 250) {
        rangoCilindrada = "Baja";
      } else if (moto.cilindradaCC <= 600) {
        rangoCilindrada = "Media";
      }
  
      return {
        modeloVehiculo: moto.modelo,
        categoriaCilindrada: rangoCilindrada,
        precio: moto.precioDolares
      };
    });
  
    return {
      motocicletasClasificadas,
      motoMasCostosa: { modelo: motoMasCostosa.modelo, precioMaximo: motoMasCostosa.precioDolares }
    };
  }
  
  const reporteInventario = analizarInventarioMotos(existenciasMotocicletas);
  console.log(JSON.stringify(reporteInventario, null, 2));