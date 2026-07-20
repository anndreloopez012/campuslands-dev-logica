const equipos = [
    {
        nombre: "Dragons",
        victorias: 5,
        derrotas: 1,
        puntos: 15
    },
    {
        nombre: "Titans",
        victorias: 4,
        derrotas: 2,
        puntos: 12
    },
    {
        nombre: "Phantoms",
        victorias: 2,
        derrotas: 4,
        puntos: 6
    },
    {
        nombre: "Warriors",
        victorias: 3,
        derrotas: 3,
        puntos: 9
    },
    {
        nombre: "Storm",
        victorias: 1,
        derrotas: 5,
        puntos: 3
    }
];

equipos.forEach(equipo => {

    if (equipo.puntos >= 12 && equipo.victorias >= 4) {
        console.log(`${equipo.nombre} clasifica a la siguiente ronda.`);
    } else {
        console.log(`${equipo.nombre} queda eliminado.`);
    }

});