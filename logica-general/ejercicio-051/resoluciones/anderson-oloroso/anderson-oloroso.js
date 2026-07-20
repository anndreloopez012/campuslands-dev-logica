function organizarCompetidores(competidores) {
    const principiantes = [];
    const intermedios = [];
    const avanzados = [];

    for (let i = 0; i < competidores.length; i++) {
        const competidor = competidores[i];

        if (competidor.nivel === "Principiante") {
            principiantes.push(competidor.nombre);
        } else if (competidor.nivel === "Intermedio") {
            intermedios.push(competidor.nombre);
        } else if (competidor.nivel === "Avanzado") {
            avanzados.push(competidor.nombre);
        }
    }

    console.log("Principiantes:", principiantes);
    console.log("Intermedios:", intermedios);
    console.log("Avanzados:", avanzados);
}

// Ejemplo
const competidores = [
    { nombre: "Luis", nivel: "Principiante" },
    { nombre: "Ana", nivel: "Avanzado" },
    { nombre: "Carlos", nivel: "Intermedio" },
    { nombre: "María", nivel: "Principiante" },
    { nombre: "Sofía", nivel: "Avanzado" }
];

organizarCompetidores(competidores);