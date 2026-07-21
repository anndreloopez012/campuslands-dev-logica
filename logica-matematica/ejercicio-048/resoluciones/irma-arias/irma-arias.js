
/**
 * Lógica Matemática 048 - Patrones de Puntuación
 * Temática: Películas de Ciencia Ficción
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 20, 35, 50],
    bono: 6,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas del reto con patrones de puntuación
function calcularPuntuacionCienciaFiccion(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Análisis de patrones de puntuación (ej: evaluar el comportamiento en pares/impares o pesos según posición)
    let sumaPuntajes = 0;
    let factorPatron = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        // Aplicar un patrón diferente dependiendo si la posición es par o impar
        if (i % 2 === 0) {
            factorPatron += Math.round(valor * 1.1); // Incremento por patrón cíclico
        } else {
            factorPatron += Math.round(valor * 0.9);
        }
    }

    let promedioPatron = Math.round(factorPatron / participantes.length);
    // Operación matemática integrando el patrón calculado, bono y penalización
    let puntajeFinal = promedioPatron + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de películas de ciencia ficción
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion = "universo cyberpunk";
    } else if (puntajeFinal >= 20) {
        clasificacion = "opera espacial";
    } else {
        clasificacion = "distopia basica";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, factor de patrón evaluado: ${promedioPatron}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntuacionCienciaFiccion(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntuacionCienciaFiccion(casoBorde));