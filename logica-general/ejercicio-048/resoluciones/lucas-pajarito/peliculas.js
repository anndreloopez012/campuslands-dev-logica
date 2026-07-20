const peliculas = [
    {
        titulo: "Interstellar",
        disponible: true,
        edadMinima: 13
    },
    {
        titulo: "Avatar",
        disponible: false,
        edadMinima: 13
    },
    {
        titulo: "The Matrix",
        disponible: true,
        edadMinima: 16
    },
    {
        titulo: "Dune",
        disponible: true,
        edadMinima: 13
    },
    {
        titulo: "Ready Player One",
        disponible: true,
        edadMinima: 12
    }
];

function reproducirPelicula(tituloBuscado, edadUsuario) {

    peliculas.forEach(pelicula => {

        if (pelicula.titulo === tituloBuscado) {

            console.log(`Película seleccionada: ${pelicula.titulo}`);

            if (!pelicula.disponible) {
                console.log("Paso 1: Verificar disponibilidad.");
                console.log("Resultado: La película no está disponible.");
            } else if (edadUsuario < pelicula.edadMinima) {
                console.log("Paso 1: Verificar disponibilidad.");
                console.log("Paso 2: Verificar edad.");
                console.log("Resultado: El usuario no cumple con la edad mínima.");
            } else {
                console.log("Paso 1: Verificar disponibilidad.");
                console.log("Paso 2: Verificar edad.");
                console.log("Paso 3: Iniciar reproducción.");
                console.log("Resultado: Disfruta la película.");
            }

        }

    });

}

reproducirPelicula("Interstellar", 18);