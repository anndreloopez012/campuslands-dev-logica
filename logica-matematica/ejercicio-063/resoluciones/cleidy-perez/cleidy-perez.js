const torneoDeportivo = [
    { nombre: "Los Tigres", puntos: 12 },
    { nombre: "Los Leones", puntos: 8 },
    { nombre: "Real Mixco", puntos: 5 },
    { nombre: "Atléticos", puntos: 10 }
];

function tomaDeDecisiones(equipos) {

    if (!equipos || equipos.length === 0) {
        console.log("No hay equipos registrados.");
        return;
    }

    for (let i = 0; i < equipos.length; i++) {

        if (equipos[i].puntos >= 10) {
            console.log(equipos[i].nombre + " clasifica directamente.");
        } else if (equipos[i].puntos >= 7) {
            console.log(equipos[i].nombre + " va al repechaje.");
        } else {
            console.log(equipos[i].nombre + " queda eliminado.");
        }

    }

}

tomaDeDecisiones(torneoDeportivo);