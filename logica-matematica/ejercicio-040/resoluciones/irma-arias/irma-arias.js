
/**
 * Lógica Matemática 040 - Simulaciones con Fórmulas
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
    participantes: [5, 10],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con simulación de fórmula
function calcularSimulacionComidaUrbana(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y simulación de fórmula de producción culinaria
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Aplicación de fórmula de simulación (ej: promedio ponderado con un factor de escala de comida urbana)
    let factorSimulacion = Math.round((sumaPuntajes / participantes.length) * 1.2);

    // Operación matemática combinando la simulación, bono y penalización
    let puntajeFinal = factorSimulacion + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de comida urbana
    let clasificacion = "";
    if (puntajeFinal > 40) {
        clasificacion = "food truck gourmet";
    } else if (puntajeFinal >= 20) {
        clasificacion = "estación de sabor tradicional";
    } else {
        clasificacion = "receta en pruebas";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, factor de simulación aplicado: ${factorSimulacion}, bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularSimulacionComidaUrbana(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularSimulacionComidaUrbana(casoBorde));