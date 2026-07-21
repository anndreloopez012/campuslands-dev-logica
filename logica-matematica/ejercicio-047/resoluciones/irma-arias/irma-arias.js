
/**
 * Lógica Matemática 047 - Secuencias Numéricas
 * Temática: Lista de Reproducción Musical
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 10, 15, 20],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con secuencias numéricas
function calcularListaReproduccion(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Análisis de secuencia numérica (ej: verificar diferencias o progresión entre pistas y acumular valores)
    let sumaPuntajes = 0;
    let factorSecuencia = 0;

    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
        if (i > 0) {
            // Calcular la diferencia secuencial entre pistas consecutivas
            factorSecuencia += Math.abs(participantes[i] - participantes[i - 1]);
        }
    }

    let promedioBase = Math.round(sumaPuntajes / participantes.length);
    // Operación matemática combinando el factor de secuencia, promedio, bono y penalización
    let puntajeFinal = Math.round(promedioBase + (factorSecuencia / participantes.length) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en la temática de lista de reproducción
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "playlist dinamica";
    } else if (puntajeFinal >= 18) {
        clasificacion = "ritmo constante";
    } else {
        clasificacion = "secuencia basica";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedioBase}, factor de secuencia: ${factorSecuencia}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularListaReproduccion(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularListaReproduccion(casoBorde));