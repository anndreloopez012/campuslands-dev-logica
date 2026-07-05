let pelicula = "El Conjuro";
let estado = "Prestada";

console.log("Película:", pelicula);

switch (estado) {
    case "Disponible":
        console.log("Estado: Disponible para préstamo.");
        break;

    case "Prestada":
        console.log("Estado: Actualmente está prestada.");
        break;

    case "En mantenimiento":
        console.log("Estado: No está disponible por mantenimiento.");
        break;

    default:
        console.log("Estado no válido.");
}