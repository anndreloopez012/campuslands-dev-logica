const inventarioMotos = [
    { marca: "Honda", modelo: "CB300R", cilindraje: 300 },
    { marca: "Yamaha", modelo: "FZ 150", cilindraje: 150 },
    { marca: "Suzuki", modelo: "Gixxer 250", cilindraje: 250 },
    { marca: "KTM", modelo: "200 Duke", cilindraje: 200 },
    { marca: "Bajaj", modelo: "Dominar 400", cilindraje: 400 }
];

function rangoYMaximo(inventario) {

    if (!inventario || inventario.length === 0) {
        console.log("No hay motos registradas.");
        return;
    }

    const motosEnRango = inventario.filter(
        moto => moto.cilindraje >= 200 && moto.cilindraje <= 400
    );

    let motoMayor = inventario[0];

    for (let i = 1; i < inventario.length; i++) {
        if (inventario[i].cilindraje > motoMayor.cilindraje) {
            motoMayor = inventario[i];
        }
    }

    console.log("Motos entre 200 cc y 400 cc:");
    console.log(motosEnRango);

    console.log("Moto con mayor cilindraje:");
    console.log(motoMayor);
}

rangoYMaximo(inventarioMotos);