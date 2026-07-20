const inventarioMotos = [
    { marca: "Honda", modelo: "CB300R", cilindraje: 300, disponible: true },
    { marca: "Yamaha", modelo: "FZ 150", cilindraje: 150, disponible: true },
    { marca: "Suzuki", modelo: "Gixxer 250", cilindraje: 250, disponible: false },
    { marca: "KTM", modelo: "200 Duke", cilindraje: 200, disponible: true },
    { marca: "Bajaj", modelo: "Dominar 400", cilindraje: 400, disponible: true }
];

function filtrarMotos(inventario) {

    if (!inventario || inventario.length === 0) {
        console.log("No hay motos registradas.");
        return;
    }

    const motosFiltradas = inventario.filter(
        moto => moto.cilindraje > 200
    );

    console.log("Motos con más de 200 cc:");
    console.log(motosFiltradas);
}

filtrarMotos(inventarioMotos);