const comidas = [
    { nombre: "Tacos", precio: 20, ventas: 5 },
    { nombre: "Hamburguesa", precio: 35, ventas: 3 },
    { nombre: "Hot dog", precio: 15, ventas: 8 }
];

function simularVentas(lista) {
    let ingresoTotal = 0;

    for (let i = 0; i < lista.length; i++) {
        if (
            typeof lista[i].precio !== "number" ||
            typeof lista[i].ventas !== "number" ||
            lista[i].precio < 0 ||
            lista[i].ventas < 0
        ) {
            console.log(lista[i].nombre + ": datos inválidos");
            continue;
        }

        const ingreso = lista[i].precio * lista[i].ventas;
        ingresoTotal += ingreso;

        if (ingreso >= 100) {
            console.log(lista[i].nombre + ": venta alta");
        } else {
            console.log(lista[i].nombre + ": venta baja");
        }
    }

    console.log("Ingreso total: Q" + ingresoTotal);
}

simularVentas(comidas);