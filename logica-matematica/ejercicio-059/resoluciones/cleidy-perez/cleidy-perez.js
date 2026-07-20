const formulas = [
    { nombre: "Agua", formula: "H2O", cantidad: 8 },
    { nombre: "Sal de mesa", formula: "NaCl", cantidad: 15 },
    { nombre: "Gas de refresco", formula: "CO2", cantidad: "cinco" }
];

function validarInventario(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        const c = lista[i].cantidad;

        if (typeof c !== "number" || c < 0) {
            console.log(lista[i].nombre + ": cantidad inválida");
            continue;
        }

        total += c;

        if (c === 0) {
            console.log(lista[i].nombre + ": agotado");
        } else if (c < 10) {
            console.log(lista[i].nombre + ": stock bajo");
        } else {
            console.log(lista[i].nombre + ": stock suficiente");
        }
    }

    console.log("Total de frascos:", total);
}

validarInventario(formulas);