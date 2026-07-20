const organizarCola = (taller) => {
    const pesoUrgencia = { "alta": 1, "media": 2, "baja": 3 };

    return [...taller].sort((a, b) => {
        if (pesoUrgencia[a.urgencia] !== pesoUrgencia[b.urgencia]) {
            return pesoUrgencia[a.urgencia] - pesoUrgencia[b.urgencia];
        }
        return a.tiempoHoras - b.tiempoHoras;
    });
};

const trabajos = [
    { vehiculo: "Moto", urgencia: "media", tiempoHoras: 2 },
    { vehiculo: "Camioneta", urgencia: "alta", tiempoHoras: 5 },
    { vehiculo: "Auto", urgencia: "alta", tiempoHoras: 1 }
];

console.log(organizarCola(trabajos));