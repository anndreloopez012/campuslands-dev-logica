const peliculas = [
    {
        titulo: "El Conjuro",
        estado: "Pendiente"
    },
    {
        titulo: "It",
        estado: "Reproduciendo"
    },
    {
        titulo: "La Monja",
        estado: "Pausada"
    },
    {
        titulo: "Insidious",
        estado: "Finalizada"
    },
    {
        titulo: "Scream",
        estado: "Pendiente"
    }
];

function mostrarEstadoPeliculas(peliculas) {

    peliculas.forEach(pelicula => {

        if (pelicula.estado === "Pendiente") {
            console.log(`${pelicula.titulo}: La película aún no ha comenzado.`);
        } else if (pelicula.estado === "Reproduciendo") {
            console.log(`${pelicula.titulo}: La película se está reproduciendo.`);
        } else if (pelicula.estado === "Pausada") {
            console.log(`${pelicula.titulo}: La reproducción está en pausa.`);
        } else {
            console.log(`${pelicula.titulo}: La película ya finalizó.`);
        }

    });

}

mostrarEstadoPeliculas(peliculas);