const procesarItinerario = (instrucciones) => {
    let ruta = [];
    
    instrucciones.forEach(paso => {
        if (paso.accion === "volar") {
            ruta.push(`Viaje a ${paso.destino} por aire.`);
        } else if (paso.accion === "tren") {
            ruta.push(`Viaje a ${paso.destino} por tierra.`);
        } else {
            ruta.push(`Actividad: ${paso.destino}.`);
        }
    });

    return {
        itinerario_final: ruta,
        total_paradas: ruta.length
    };
};

const miViaje = [
    { accion: "volar", destino: "Paris" },
    { accion: "tren", destino: "Berlin" },
    { accion: "turismo", destino: "Museo" }
];

console.log(procesarItinerario(miViaje));
console.log(procesarItinerario([]));