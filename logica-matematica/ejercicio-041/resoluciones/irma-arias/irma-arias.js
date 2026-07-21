
/**
 * Lógica Matemática 041 - Operaciones Aritméticas Controladas
 * Temática: Videojuegos Competitivos
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 10],
    bono: 4,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con operaciones controladas
function calcularPuntajeVideojuego(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y operaciones aritméticas controladas (ej: promedios ponderados y validación de límites)
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Operación aritmética controlada (división entera y control de desbordamiento)
    let promedioBase = Math.round(sumaPuntajes / participantes.length);
    let puntajeFinal = promedioBase + bono - penalizacion;

    // Control estricto de límites por si el puntaje cae por debajo de 0
    if (puntajeFinal < 0) {
        puntajeFinal = 0;
    }

    // 4. Reglas de clasificación condicional basadas en la temática de videojuegos competitivos
    let clasificacion = "";
    if (puntajeFinal > 25) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 15) {
        clasificacion = "rango platino";
    } else {
        clasificacion = "rango plata";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, promedio base: ${promedioBase}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeVideojuego(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeVideojuego(casoBorde));