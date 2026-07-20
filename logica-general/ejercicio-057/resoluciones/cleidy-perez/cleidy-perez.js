const proyectos = [
    {nombre: "Casa", pisos: 1},
    {nombre: "Edificio", pisos: 8},
    {nombre: "Puente", pisos: 0}
];

function revisarProyecto(lista) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].pisos == 0) {
            console.log(lista[i].nombre + ": No necesita elevador.");
        } else if (lista[i].pisos <= 5) {
            console.log(lista[i].nombre + ": Elevador opcional.");
        } else {
            console.log(lista[i].nombre + ": Necesita elevador.");
        }

    }

}

revisarProyecto(proyectos);