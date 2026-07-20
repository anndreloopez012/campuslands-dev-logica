function simularEstadoPelicula(escenas) {
    let estado = "Tranquilo";
    const historial = [];

    for (let i = 0; i < escenas.length; i++) {
        const escena = escenas[i];

        if (escena.nivelTerror >= 8) {
            estado = "Terror extremo";
        } else if (escena.nivelTerror >= 5) {
            estado = "Tensión";
        } else {
            estado = "Tranquilo";
        }

        historial.push({
            escena: escena.nombre,
            estado: estado
        });
    }

    return historial;
}

// Ejemplo
const escenasPelicula = [
    { nombre: "Inicio misterioso", nivelTerror: 3 },
    { nombre: "Aparición del fantasma", nivelTerror: 7 },
    { nombre: "Persecución final", nivelTerror: 10 }
];

console.log(simularEstadoPelicula(escenasPelicula));