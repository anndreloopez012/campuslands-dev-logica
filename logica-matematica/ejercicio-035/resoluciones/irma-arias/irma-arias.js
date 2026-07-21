
/**
 * Lógica Matemática 035 - Velocidad, Tiempo y Distancia
 * Temática: Dibujo Digital
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [6, 10],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeDibujoDigital(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y simulación de velocidad, tiempo y distancia de trazo
    let sumaPuntajes = 0;
    let factorVelocidadTotal = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        
        // Simulando cálculo físico: Distancia / Tiempo (asumiendo valor como distancia y un tiempo constante de 2)
        let velocidadTrazo = valor / 2;
        factorVelocidadTotal += velocidadTrazo;
    }

    // Operación matemática combinando la velocidad promedio, bono y penalización
    let promedioVelocidad = Math.round(factorVelocidadTotal / participantes.length);
    let puntajeFinal = sumaPuntajes + promedioVelocidad + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de dibujo digital
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "ilustrador experto";
    } else if (puntajeFinal >= 25) {
        clasificacion = "diseñador fluido";
    } else {
        clasificacion = "trazo lento";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, velocidad promedio de trazo: ${promedioVelocidad}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeDibujoDigital(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeDibujoDigital(casoBorde));