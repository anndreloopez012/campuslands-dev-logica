
/**
 * Ejercicio 012: Comparación de opciones - Ping Pong
 * Autor: Irma Yaneht Arias García
 */

const raqueta1 = { nombre: "Ofensiva", velocidad: 9, control: 5 };
const raqueta2 = { nombre: "Defensiva", velocidad: 6, control: 9 };

function compararRaquetas(r1, r2) {
    const totalR1 = r1.velocidad + r1.control;
    const totalR2 = r2.velocidad + r2.control;

    if (totalR1 > totalR2) return `La mejor opción es: ${r1.nombre}`;
    if (totalR2 > totalR1) return `La mejor opción es: ${r2.nombre}`;
    return "Ambas raquetas tienen el mismo rendimiento.";
}

console.log(compararRaquetas(raqueta1, raqueta2));