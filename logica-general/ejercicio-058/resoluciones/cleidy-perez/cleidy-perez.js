const trabajadores = [
    { nombre: "Juan", turno: "Mañana", horas: 8 },
    { nombre: "Ana", turno: "Noche", horas: 10 },
    { nombre: "Luis", turno: "Tarde", horas: 8 }
];

function revisarTurnos(lista) {

    let totalHoras = 0;

    for (let i = 0; i < lista.length; i++) {

        totalHoras += lista[i].horas;

        if (lista[i].horas > 8) {
            console.log(lista[i].nombre + ": Tiene horas extra.");
        } else {
            console.log(lista[i].nombre + ": Turno normal.");
        }

    }

    let promedio = totalHoras / lista.length;

    console.log("Total de horas: " + totalHoras);
    console.log("Promedio de horas: " + promedio);
}

revisarTurnos(trabajadores);