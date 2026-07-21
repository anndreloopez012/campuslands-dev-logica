
/**
 * Lógica Matemática 049 - Módulos y Divisibilidad
 * Temática: Películas de Miedo
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [7, 14, 21, 28],
    bono: 6,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con módulos y divisibilidad
function calcularPeliculasMiedo(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Análisis de módulos y divisibilidad (ej: contar elementos divisibles por un número clave como 3 o verificar residuo)
    let sumaPuntajes = 0;
    let contadorDivisibles = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        // Evaluar divisibilidad por 3 (operador módulo %)
        if (valor % 3 === 0) {
            contadorDivisibles++;
        }
    }

    let promedioBase = Math.round(sumaPuntajes / participantes.length);
    // Operación matemática combinando el promedio, un factor basado en los módulos divisibles, bono y penalización
    let puntajeFinal = promedioBase + (contadorDivisibles * 2) + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de películas de miedo
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion = "nivel terror psicologico";
    } else if (puntajeFinal >= 20) {
        clasificacion = "suspenso moderado";
    } else {
        clasificacion = "susto leve";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedioBase}, elementos divisibles por 3 encontrados: ${contadorDivisibles}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPeliculasMiedo(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPeliculasMiedo(casoBorde));