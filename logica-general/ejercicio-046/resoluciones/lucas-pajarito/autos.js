const autos = [
    {
        marca: "Bugatti",
        modelo: "Chiron",
        velocidadMaxima: 420,
        disponible: true
    },
    {
        marca: "Koenigsegg",
        modelo: "Jesko",
        velocidadMaxima: 483,
        disponible: false
    },
    {
        marca: "Ferrari",
        modelo: "SF90 Stradale",
        velocidadMaxima: 340,
        disponible: true
    },
    {
        marca: "McLaren",
        modelo: "Speedtail",
        velocidadMaxima: 403,
        disponible: true
    },
    {
        marca: "Lamborghini",
        modelo: "Revuelto",
        velocidadMaxima: 350,
        disponible: false
    }
];

function buscarAuto(modeloBuscado) {

    let encontrado = false;

    autos.forEach(auto => {

        if (auto.modelo === modeloBuscado) {
            console.log("=== AUTO ENCONTRADO ===");
            console.log(`Marca: ${auto.marca}`);
            console.log(`Modelo: ${auto.modelo}`);
            console.log(`Velocidad Máxima: ${auto.velocidadMaxima} km/h`);
            console.log(`Disponible: ${auto.disponible ? "Sí" : "No"}`);

            encontrado = true;
        }

    });

    if (!encontrado) {
        console.log("No se encontró un auto con ese modelo.");
    }

}

buscarAuto("Jesko");