const ordenesServicioTaller = [
    { placaVehiculo: "XYZ-123", costoEstimado: 350, presupuestoMaximoCliente: 400 },
    { placaVehiculo: "ABC-789", costoEstimado: 850, presupuestoMaximoCliente: 1000 },
    { placaVehiculo: "MNO-456", costoEstimado: 600, presupuestoMaximoCliente: 500 }
  ];
  
  function procesarOrdenesMantenimiento(listaOrdenes) {
    const umbralCostoPrioridadAlta = 500;
  
    return listaOrdenes.map(orden => {
      if (orden.costoEstimado > orden.presupuestoMaximoCliente) {
        return {
          identificadorVehiculo: orden.placaVehiculo,
          estadoAprobacion: "Presupuesto Excedido",
          nivelPrioridad: "Ninguna"
        };
      }
  
      const prioridadAsignada = orden.costoEstimado >= umbralCostoPrioridadAlta ? "Alta" : "Baja";
  
      return {
        identificadorVehiculo: orden.placaVehiculo,
        estadoAprobacion: "Aprobado",
        nivelPrioridad: prioridadAsignada
      };
    });
  }
  
  const reporteMantenimientos = procesarOrdenesMantenimiento(ordenesServicioTaller);
  console.log(JSON.stringify(reporteMantenimientos, null, 2));