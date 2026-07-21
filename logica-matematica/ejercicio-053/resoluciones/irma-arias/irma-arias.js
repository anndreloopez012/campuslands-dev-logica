
* Lógica Matemática 053 - Coordenadas y Distancia
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
    participantes: [3, 7, 15],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con coordenadas y distancia
function calcularParacaidismoDistancia(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de cálculo de distancia o desplazamiento vectorial entre puntos
    let sumaBase = 0;
    let factorDistancia = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaBase += valor;
        // Simular cálculo de distancia respecto a un punto de referencia central (ej: coordenada ideal 20)
        let coordenadaIdeal = 20;
        factorDistancia += Math.abs(valor - coordenadaIdeal);
    }

    let promedioBase = Math.round(sumaBase / participantes.length);
    let desviacionPromedio = Math.round(factorDistancia / participantes.length);

    // Operación matemática integrando la distancia, promedio, bono y penalización
    let puntajeFinal = Math.round(promedioBase - (desviacionPromedio / 2) + bono - penalizacion);

    // Asegurar que el puntaje no sea negativo por control de límites
    if (puntajeFinal < 0) {
        puntajeFinal = 0;
    }

    // 4. Reglas de clasificación condicional basadas en paracaidismo
    let clasificacion = "";
    if (puntajeFinal > 25) {
        clasificacion = "aterrizaje en diana";
    } else if (puntajeFinal >= 12) {
        clasificacion = "zona de seguridad";
    } else {
        clasificacion = "fuera de zona";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedioBase}, desviación de distancia evaluada: ${desviacionPromedio}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularParacaidismoDistancia(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularParacaidismoDistancia(casoBorde));