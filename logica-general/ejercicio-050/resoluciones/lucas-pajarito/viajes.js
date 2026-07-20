const itinerario = [
    {
        paso: 1,
        instruccion: "Presentar el pasaporte en el mostrador de la aerolínea."
    },
    {
        paso: 2,
        instruccion: "Registrar el equipaje."
    },
    {
        paso: 3,
        instruccion: "Pasar por el control de seguridad."
    },
    {
        paso: 4,
        instruccion: "Esperar en la sala de abordaje."
    },
    {
        paso: 5,
        instruccion: "Abordar el avión cuando se anuncie el vuelo."
    }
];

function mostrarItinerario(itinerario) {

    console.log("=== INSTRUCCIONES DEL VIAJE ===");

    itinerario.forEach(paso => {
        console.log(`Paso ${paso.paso}: ${paso.instruccion}`);
    });

}

mostrarItinerario(itinerario);