const itinerarios = [
    { destino: "París", presupuesto: 1200, pasajeros: 2 },
    { destino: "", presupuesto: 800, pasajeros: 1 },
    { destino: "Tokio", presupuesto: 400, pasajeros: 3 },
    { destino: "Roma", presupuesto: 1500, pasajeros: 0 },
    { destino: "Londres", presupuesto: 2000, pasajeros: 4 }
];

function validarItinerarios(lista) {
    console.log("--- Reporte de Validación de Itinerarios ---");

    lista.forEach((viaje) => {
        if (viaje.destino !== "" && viaje.presupuesto > 500 && viaje.pasajeros > 0) {
            console.log(`Destino: ${viaje.destino} | Estado: Confirmado`);
        } else {
            console.log(`Destino: ${viaje.destino || "Sin definir"} | Estado: Revisión necesaria`);
        }
    });
}

validarItinerarios(itinerarios);