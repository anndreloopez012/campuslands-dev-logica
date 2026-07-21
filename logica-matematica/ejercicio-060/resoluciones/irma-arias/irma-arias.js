
/**
 * Lógica Matemática 060 - Simulaciones con Fórmulas
 * Temática: Comida Urbana
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [2, 4, 6],
    bono: 5,
    penalizacion: 1
};

// 2. Función principal para procesar las reglas con simulaciones de fórmulas
function calcularComidaUrbanaSimulacion(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de fórmulas matemáticas aplicadas a costos o tiempos de preparación de comida urbana
    let sumaBase = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaBase += participantes[i];
    }

    let promedioBase = Math.round(sumaBase / participantes.length);

    // Aplicar fórmula de simulación de eficiencia (ej: multiplicar por un factor de optimización de entrega)
    let factorSimulacion = Math.round(promedioBase * 0.8);

    // Operación matemática integrando la simulación, bono y penalización
    let puntajeFinal = Math.round(factorSimulacion + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en comida urbana
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion: clasificacion = "food truck gourmet express";
    } else if (puntajeFinal >= 15) {
        clasificacion = "puesto callejero tradicional";
    } else {
        clasificacion = "preparacion en pausa";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base simulado: ${promedioBase}, factor de simulación aplicado: ${factorSimulacion}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularComidaUrbanaSimulacion(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularComidaUrbanaSimulacion(casoBorde));