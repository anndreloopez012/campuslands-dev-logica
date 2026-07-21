
/**
 * Lógica Matemática 033 - Coordenadas y Distancia
 * Temática: Paracaidismo
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
    bono: 6,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeParacaidismo(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y simulación de cálculo de coordenadas o distancia a zona de aterrizaje
    let sumaPuntajes = 0;
    let distanciaTotal = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        
        // Simulando cálculo geométrico de distancia absoluta o diferencial respecto a un punto base
        distanciaTotal += Math.abs(valor - 20);
    }

    // Operación matemática combinando la distancia, bono y penalización
    let puntajeFinal = sumaPuntajes - Math.round(distanciaTotal / participantes.length) + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de paracaidismo
    let clasificacion = "";
    if (puntajeFinal > 40) {
        clasificacion = "paracaidista experto";
    } else if (puntajeFinal >= 20) {
        clasificacion = "salto preciso";
    } else {
        clasificacion = "zona de riesgo";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, distancia promedio calculada, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeParacaidismo(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeParacaidismo(casoBorde));