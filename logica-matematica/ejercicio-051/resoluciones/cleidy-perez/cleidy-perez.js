const jugadoresDeKickboxing=[
    {id: 1, juagador: "Juan", punteo: [23, 54, 67, 89], estado: "activo"},
    {id: 2, jugador: "María", punteo: [43,65, 89, 29], estado: "Desactivo"},
    {id: 3, jugador: "Marío", punteo: [54, 67, 12, 43], estado: "activo"},
    {id: 4, jugador: "Jennifer", punteo: [54,76,89,10], estado: "activo"}
];

function conteoCombinatorio(jugadores){
    if(!jugadores || jugadores.length === 0) {
        console.log("No hay jugadores para realizar la ejecución")
        return;
    }

    let sumaPunteos =0;
    let cantidadPunteos=0;
    let jugadoresActivos=0;

    for(let i=0; i< jugadores.length; i++){
        if(jugadores[i].estado.toLowerCase()=== "activo"){
            jugadores++;

            for(let j =0; j< jugadores[i].punteo.length; j++){
                sumaPunteos += jugadores[i].punteo[j];
                cantidadPunteos++;
            }
        }
    }

    let promedio= sumaPunteos/cantidadPunteos;

    let combinaciones=(jugadoresActivos* (jugadoresActivos-1))/2;

    console.log("Jugadores activos:", jugadoresActivos);
    console.log("Promedio de puntos:", promedio.toFixed(2));
    console.log("Posibles parejas:", combinaciones);
}