function clasificarPeliculas(idPeliculas) {
    const divisiblesPorDos = [];
    const divisiblesPorTres = [];
    const otrosIds = [];

    for (let i = 0; i < idPeliculas.length; i++) {
        const id = idPeliculas[i];

        if (id % 2 === 0) {
            divisiblesPorDos.push(id);
        } else if (id % 3 === 0) {
            divisiblesPorTres.push(id);
        } else {
            otrosIds.push(id);
        }
    }

    console.log("Películas con ID divisible por 2:", divisiblesPorDos);
    console.log("Películas con ID divisible por 3:", divisiblesPorTres);
    console.log("Otros IDs:", otrosIds);
}

// Ejemplo
clasificarPeliculas([10, 15, 7, 8, 9, 14, 21]);