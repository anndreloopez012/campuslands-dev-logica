const proyectos = [
    { nombre: "Casa", puntos: 80 },
    { nombre: "Edificio", puntos: 95 },
    { nombre: "Parque", puntos: 70 }
];

function mostrarRanking(lista) {

    let total = 0;

    for (let i = 0; i < lista.length; i++) {

        total += lista[i].puntos;

        if (lista[i].puntos >= 90) {
            console.log(lista[i].nombre + ": Excelente");
        } else if (lista[i].puntos >= 75) {
            console.log(lista[i].nombre + ": Bueno");
        } else {
            console.log(lista[i].nombre + ": Regular");
        }

    }

    let promedio = total / lista.length;

    console.log("Total de puntos: " + total);
    console.log("Promedio: " + promedio);
}

mostrarRanking(proyectos);