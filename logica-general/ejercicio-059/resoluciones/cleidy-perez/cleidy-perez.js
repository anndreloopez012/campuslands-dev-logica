const formulas = [
    { nombre: "Agua", simbolo: "H2O", cantidad: 12 },
    { nombre: "Sal común", simbolo: "NaCl", cantidad: 5 },
    { nombre: "Dióxido de carbono", simbolo: "CO2", cantidad: 0 }
];

function revisarInventario(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        total += lista[i].cantidad;

        if (lista[i].cantidad === 0) {
            console.log(lista[i].nombre + ": Agotado");
        } else if (lista[i].cantidad < 10) {
            console.log(lista[i].nombre + ": Stock bajo");
        } else {
            console.log(lista[i].nombre + ": Stock suficiente");
        }
    }

    console.log("Total de frascos: " + total);
}

revisarInventario(formulas);