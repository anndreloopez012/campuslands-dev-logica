// ejercicio logica - flujos paso a paso - Ejercicio 068

const procesarPelicula = (pelicula) => {
    let flujo = [];

    if (pelicula.esCine) {
        flujo.push("Entrada al cine");
    } else {
        flujo.push("Selección en plataforma");
    }

    if (pelicula.duracion > 120) {
        flujo.push("Preparación de snacks extra");
    }

    if (pelicula.tematica === "viajes en el tiempo") {
        flujo.push("Activación modo análisis lógico");
    } else {
        flujo.push("Activación modo inmersión");
    }

    flujo.push("Inicio de reproducción");

    return {
        pelicula: pelicula.titulo,
        pasos: flujo
    };
};

const sciFi1 = { titulo: "Interstellar", esCine: true, duracion: 169, tematica: "viajes en el tiempo" };
const sciFi2 = { titulo: "Arrival", esCine: false, duracion: 116, tematica: "primer contacto" };

console.log(procesarPelicula(sciFi1));
console.log(procesarPelicula(sciFi2));