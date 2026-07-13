// entradas

const autos = [
    {
        modelo: "Bugatti Chiron",
        velocidadMaxima: 420
    },
    {
        modelo: "Koenigsegg Jesko",
        velocidadMaxima: 483
    },
    {
        modelo: "Pagani Huayra",
        velocidadMaxima: 383
    }
];

const modeloBuscado = "Koenigsegg Jesko";

// funcion para buscar un auto

function buscarAuto(listaAutos, modelo) {

    if (!Array.isArray(listaAutos) || listaAutos.length === 0) {
        return "No hay autos registrados.";
    }

    for (const auto of listaAutos) {
        if (auto.modelo === modelo) {
            return auto;
        }
    }

    return "Auto no encontrado.";
}

console.log(buscarAuto(autos, modeloBuscado));

// pruebas

console.log("\nCaso normal");

console.log(
    buscarAuto(autos, "Pagani Huayra")
);

console.log("\nCaso borde");

console.log(
    buscarAuto([], "Ferrari SF90")
);