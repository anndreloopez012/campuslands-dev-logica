const puestos = [
    { nombre: "Tacos Don Luis", precio: 25, espera: 10 },
    { nombre: "Hamburguesas Ana", precio: 40, espera: 5 },
    { nombre: "Hot Dogs Plaza", precio: 20, espera: 15 }
];

function elegirPuesto(lista, presupuestoMax) {
    let elegidos = 0;

    for (let i = 0; i < lista.length; i++) {
        if (typeof lista[i].precio !== "number" || lista[i].precio < 0) {
            console.log(lista[i].nombre + ": precio inválido");
            continue;
        }

        if (lista[i].precio <= presupuestoMax && lista[i].espera <= 10) {
            console.log(lista[i].nombre + ": recomendado");
            elegidos++;
        } else {
            console.log(lista[i].nombre + ": no recomendado");
        }
    }

    console.log("Opciones recomendadas:", elegidos);
}

elegirPuesto(puestos, 30);