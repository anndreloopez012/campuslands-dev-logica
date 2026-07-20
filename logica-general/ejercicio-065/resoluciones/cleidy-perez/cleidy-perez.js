const tallerMecanico = [
    { placa: "P123ABC", cliente: "Juan", prioridad: 2 },
    { placa: "P456DEF", cliente: "María", prioridad: 5 },
    { placa: "P789GHI", cliente: "Carlos", prioridad: 3 },
    { placa: "P321JKL", cliente: "Ana", prioridad: 1 },
    { placa: "P654MNO", cliente: "Luis", prioridad: 4 }
];

function ordenarPrioridades(vehiculos) {

    if (!vehiculos || vehiculos.length === 0) {
        console.log("No hay vehículos registrados.");
        return;
    }

    vehiculos.sort((a, b) => b.prioridad - a.prioridad);

    console.log("Orden de atención del taller:");

    for (let i = 0; i < vehiculos.length; i++) {
        console.log(
            (i + 1) + ". " +
            vehiculos[i].cliente +
            " - Placa: " + vehiculos[i].placa +
            " - Prioridad: " + vehiculos[i].prioridad
        );
    }
}

ordenarPrioridades(tallerMecanico);