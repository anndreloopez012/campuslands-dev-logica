
/**
 * Lógica Matemática 043 - Promedios y Medianas
 * Temática: Torneo de Esports
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 40, 70],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con promedios y medianas
function calcularEstadisticasEsports(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador, cálculo de promedio y cálculo de mediana
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }
    let promedio = sumaPuntajes / participantes.length;

    // Ordenar los elementos para calcular la mediana
    let ordenados = [...participantes].sort((a, b) => a - b);
    let mediana = 0;
    let mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
        mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
        mediana = ordenados[mitad];
    }

    // Operación matemática combinando la mediana, bono y penalización
    let puntajeFinal = Math.round(mediana + (promedio * 0.2) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en la temática de esports
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion = "equipo profesional tier 1";
    } else if (puntajeFinal >= 20) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "fase clasificatoria";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio: ${promedio.toFixed(2)}, mediana: ${mediana}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularEstadisticasEsports(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularEstadisticasEsports(casoBorde));