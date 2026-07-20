const tallerMecanico = [
    { placa: "P123ABC", cliente: "Juan", costo: 1200 },
    { placa: "P456DEF", cliente: "María", costo: 1800 },
    { placa: "P789GHI", cliente: "Carlos", costo: 950 },
    { placa: "P321JKL", cliente: "Ana", costo: 2100 },
    { placa: "P654MNO", cliente: "Luis", costo: 1450 }
];

function minimoYLimites(vehiculos) {

    if (!vehiculos || vehiculos.length === 0) {
        console.log("No hay vehículos registrados.");
        return;
    }

    let costoMinimo = vehiculos[0].costo;
    let costoMaximo = vehiculos[0].costo;
    let reparacionesMayores = 0;

    for (let i = 0; i < vehiculos.length; i++) {

        if (vehiculos[i].costo < costoMinimo) {
            costoMinimo = vehiculos[i].costo;
        }

        if (vehiculos[i].costo > costoMaximo) {
            costoMaximo = vehiculos[i].costo;
        }

        if (vehiculos[i].costo > 1500) {
            reparacionesMayores++;
        }
    }

    console.log("Costo mínimo: Q" + costoMinimo);
    console.log("Costo máximo: Q" + costoMaximo);
    console.log("Reparaciones mayores a Q1500: " + reparacionesMayores);
}

minimoYLimites(tallerMecanico);