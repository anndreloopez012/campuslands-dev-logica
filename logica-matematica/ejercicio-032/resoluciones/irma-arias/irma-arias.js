
/**
 * Lógica Matemática 032 - Probabilidad Básica
 * Temática: Ping Pong
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 10, 15],
    bono: 4,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajePingPong(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y cálculo de probabilidad básica (casos favorables / totales)
    let sumaPuntajes = 0;
    let casosFavorables = 0;
    let totalCasos = participantes.length;

    for (let i = 0; i < totalCasos; i++) {
        let puntaje = participantes[i];
        sumaPuntajes += puntaje;

        // Regla de probabilidad: Contar elementos que superan un umbral (ej: mayores a 20)
        if (puntaje > 20) {
            casosFavorables++;
        }
    }

    // Cálculo de probabilidad en porcentaje
    let probabilidad = (casosFavorables / totalCasos) * 100;

    // Operación matemática con bono y penalización
    let puntajeFinal = Math.round(sumaPuntajes + bono - penalizacion + probabilidad);

    // 4. Reglas de clasificación condicional basadas en la temática de ping pong
    let clasificacion = "";
    if (probabilidad >= 50) {
        clasificacion = "pelotaris experto";
    } else if (probabilidad > 0) {
        clasificacion = "saque competitivo";
    } else {
        clasificacion = "novato de mesa";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, probabilidad de éxito: ${probabilidad.toFixed(1)}%, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajePingPong(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajePingPong(casoBorde));