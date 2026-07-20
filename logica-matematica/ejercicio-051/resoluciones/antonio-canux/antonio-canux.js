// Ejercicio 051: Conteo Combinatorio Simple - Kickboxing

function calcularPuntajeKickboxing(participantes, bono, penalizacion) {
    const n = participantes.length;

    const combinacionesPeleas = (n * (n - 1)) / 2;

    const puntajeBase = (combinacionesPeleas * 3) + n;

    const puntajeFinal = puntajeBase + bono - penalizacion;

    const clasificacion = puntajeFinal >= 25 ? "competitivo" : "amateur";

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se calcularon ${combinacionesPeleas} combinaciones de peleas posibles. Se sumo el bono y se resto la penalizacion segun las reglas establecidas.`
    };
}

// Pruebas

console.log("=== Caso Normal (Ejemplo) ===");
const resultadoNormal = calcularPuntajeKickboxing([12, 18, 25, 30], 8, 3);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularPuntajeKickboxing([22, 28], 0, 5);
console.log(resultadoBorde);