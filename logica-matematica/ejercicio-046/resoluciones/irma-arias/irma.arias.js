
* Lógica Matemática 046 - Conversión de Unidades
 * Temática: Autos Hiperdeportivos
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [100, 250, 400],
    bono: 10,
    penalizacion: 5
};

// 2. Función principal para procesar las reglas del reto con conversión de unidades
function calcularAutosHiperdeportivos(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y simulación de conversión de unidades (ej: convertir velocidad de km/h a mph multiplicando por un factor de 0.621371)
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    let promedioBase = sumaPuntajes / participantes.length;
    // Conversión de unidades aplicada como regla numérica (ej: factor de conversión a otra métrica de rendimiento)
    let unidadConvertida = Math.round(promedioBase * 0.621371);

    // Operación matemática integrando la unidad convertida, bono y penalización
    let puntajeFinal = unidadConvertida + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de autos hiperdeportivos
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion: "hiperdeportivo clase a";
    } else if (puntajeFinal >= 20) {
        clasificacion = "rendimiento aerodinamico";
    } else {
        clasificacion = "prototipo en pista";
    }

    // Corrección de asignación de clasificación
    if (puntajeFinal > 50) {
        clasificacion = "hiperdeportivo clase a";
    } else if (puntajeFinal >= 20) {
        clasificacion = "rendimiento aerodinamico";
    } else {
        clasificacion = "prototipo en pista";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedioBase.toFixed(2)}, unidad convertida (a factor métrico): ${unidadConvertida}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularAutosHiperdeportivos(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularAutosHiperdeportivos(casoBorde));