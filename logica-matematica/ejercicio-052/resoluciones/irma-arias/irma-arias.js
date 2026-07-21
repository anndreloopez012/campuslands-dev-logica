
/**
 * Lógica Matemática 052 - Probabilidad Básica
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
    bono: 6,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas con probabilidad básica
function calcularPingPongProbabilidad(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de cálculo de probabilidad básica (ej. casos favorables vs posibles)
    let sumaBase = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaBase += participantes[i];
    }

    let promedio = sumaBase / participantes.length;

    // Cálculo de probabilidad simulada (porcentaje de éxito basado en elementos mayores al promedio)
    let favorables = participantes.filter(p => p > promedio).length;
    let totalCasos = participantes.length;
    let probabilidadPorcentaje = Math.round((favorables / totalCasos) * 100);

    let puntajeFinal = Math.round(promedio + (probabilidadPorcentaje / 10) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en ping pong
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "maestro de raqueta";
    } else if (puntajeFinal >= 18) {
        clasificacion = "jugador avanzado";
    } else {
        clasificacion = "jugador recreativo";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedio}, probabilidad calculada: ${probabilidadPorcentaje}%, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPingPongProbabilidad(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPingPongProbabilidad(casoBorde));