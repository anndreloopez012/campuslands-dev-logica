
/**
 * Lógica Matemática 045 - Mínimos y Límites
 * Temática: Taller Mecánico
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [2, 8, 15],
    bono: 5,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas del reto con mínimos y límites
function calcularTallerMecanico(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador, búsqueda del valor mínimo y validación de límites
    let sumaPuntajes = 0;
    let minValor = participantes[0];

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        if (valor < minValor) {
            minValor = valor;
        }
    }

    // Cálculo basado en la relación entre el mínimo, los límites y el acumulado
    let promedioBase = Math.round(sumaPuntajes / participantes.length);
    let puntajeFinal = minValor + promedioBase + bono - penalizacion;

    // Validación estricta de límites (por ejemplo, asegurar un umbral mínimo de seguridad de 10)
    if (puntajeFinal < 10) {
        puntajeFinal = 10;
    }

    // 4. Reglas de clasificación condicional basadas en la temática de taller mecánico
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "mantenimiento optimo";
    } else if (puntajeFinal >= 18) {
        clasificacion = "revision estandar";
    } else {
        clasificacion = "alerta en taller";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Valor mínimo detectado: ${minValor}, promedio base: ${promedioBase}, se aplicaron límites, bono (${bono}) y penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularTallerMecanico(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularTallerMecanico(casoBorde));