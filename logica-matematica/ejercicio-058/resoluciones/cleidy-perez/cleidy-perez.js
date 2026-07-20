const trabajadores = [
    { nombre: "Juan", puntaje: 60 },
    { nombre: "Ana", puntaje: 90 },
    { nombre: "Luis", puntaje: 75 }
];

function normalizarPuntajes(lista) {

    let total = 0;

    for (let i = 0; i < lista.length; i++) {

        let puntajeNormal = (lista[i].puntaje / 100) * 10;

        total += puntajeNormal;

        if (puntajeNormal >= 8) {
            console.log(lista[i].nombre + ": Excelente (" + puntajeNormal + ")");
        } else if (puntajeNormal >= 6) {
            console.log(lista[i].nombre + ": Aprobado (" + puntajeNormal + ")");
        } else {
            console.log(lista[i].nombre + ": Debe mejorar (" + puntajeNormal + ")");
        }

    }

    let promedio = total / lista.length;

    console.log("Promedio normalizado: " + promedio);
}

normalizarPuntajes(trabajadores);