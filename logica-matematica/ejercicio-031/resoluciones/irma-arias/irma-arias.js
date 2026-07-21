
* Lógica Matemática 031 - Conteo Combinatorio Simple
 * Temática: Kickboxing
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
    bono: 4,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeKickboxing(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Conteo combinatorio y acumulador usando ciclos
    let sumaPuntajes = 0;
    let combinacionesPosibles = 0;

    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
        
        // Simulando conteo combinatorio simple relacionando elementos
        for (let j = i + 1; j < participantes.length; j++) {
            combinacionesPosibles++;
        }
    }

    // Operación matemática con bono y penalización
    let puntajeFinal = sumaPuntajes + bono - penalizacion + combinacionesPosibles;

    // 4. Reglas de clasificación condicional basadas en la temática de kickboxing
    let clasificacion = "";
    if (puntajeFinal > 60) {
        clasificacion: "luchador elite";
        clasificacion = "luchador elite";
    } else if (puntajeFinal >= 30) {
        clasificacion = "competidor avanzado";
    } else {
        clasificacion = "aspirante de ring";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, parejas combinatorias analizadas: ${combinacionesPosibles}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeKickboxing(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeKickboxing(casoBorde));