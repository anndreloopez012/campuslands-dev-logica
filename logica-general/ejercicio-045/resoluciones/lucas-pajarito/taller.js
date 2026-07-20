const vehiculos = [
    {
        propietario: "Carlos Pérez",
        vehiculo: "Toyota Corolla",
        problema: "Cambio de aceite",
        prioridad: "Baja"
    },
    {
        propietario: "Ana López",
        vehiculo: "Honda Civic",
        problema: "Frenos desgastados",
        prioridad: "Alta"
    },
    {
        propietario: "Luis Gómez",
        vehiculo: "Mazda 3",
        problema: "Revisión del motor",
        prioridad: "Media"
    },
    {
        propietario: "María Ruiz",
        vehiculo: "Nissan Sentra",
        problema: "Cambio de llantas",
        prioridad: "Baja"
    },
    {
        propietario: "José Ramírez",
        vehiculo: "Kia Sportage",
        problema: "Falla en la dirección",
        prioridad: "Alta"
    }
];

function ordenarPrioridades(vehiculos) {

    vehiculos.forEach(vehiculo => {

        if (vehiculo.prioridad === "Alta") {
            console.log(`${vehiculo.vehiculo}: Atención inmediata.`);
        } else if (vehiculo.prioridad === "Media") {
            console.log(`${vehiculo.vehiculo}: Atender después de las prioridades altas.`);
        } else {
            console.log(`${vehiculo.vehiculo}: Puede esperar su turno.`);
        }

    });

}

ordenarPrioridades(vehiculos);