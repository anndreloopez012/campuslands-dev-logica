
/**
 * Lógica Matemática 058 - Normalización de Puntajes
 * Temática: Soldadura
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 20, 30, 40],
    bono: 6,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con normalización de puntajes
function calcularSoldaduraNormalizacion(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de normalización de puntajes (escala relativa basada en el valor mínimo y máximo)
    let min = Math.min(...participantes);
    let max = Math.max(...participantes);

    // Calcular un puntaje normalizado promedio del conjunto en escala de 0 a 100
    let sumaNormalizada = 0;
    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        let normalizado = (max === min) ? 100 : ((valor - min) / (max - min)) * 100;
        sumaNormalizada += normalizado;
    }

    let promedioNormalizado = Math.round(sumaNormalizada / participantes.length);

    // Operación matemática integrando el promedio normalizado, bono y penalización
    let puntajeFinal = Math.round((promedioNormalizado / 5) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en soldadura
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "soldadura estructural certificada";
    } else if (puntajeFinal >= 15) {
        clasificacion = "cordon de soldadura estandar";
    } else {
        clasificacion = "revision de soldadura requerida";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio normalizado calculado: ${promedioNormalizado}%, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularSoldaduraNormalizacion(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularSoldaduraNormalizacion(casoBorde));