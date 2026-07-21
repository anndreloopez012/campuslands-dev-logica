
/**
 * Lógica Matemática 059 - Validaciones Numéricas
 * Temática: Fórmulas Químicas
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [-5, 0, 15, 50], // Incluye valores negativos o fuera de rango común para validar
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con validaciones numéricas
function calcularQuimicaValidaciones(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de validaciones numéricas estrictas (filtrado de rangos válidos, ej: masa atómica >= 0)
    let participantesValidos = [];
    for (let i = 0; i < participantes.length; i++) {
        let val = participantes[i];
        if (typeof val === 'number' && !isNaN(val) && val >= 0) {
            participantesValidos.push(val);
        }
    }

    if (participantesValidos.length === 0) {
        participantesValidos = [0]; // Valor por defecto si todos se filtran
    }

    let sumaValida = participantesValidos.reduce((acc, curr) => acc + curr, 0);
    let promedioValido = Math.round(sumaValida / participantesValidos.length);

    // Operación matemática aplicando el promedio validado, bono y penalización
    let puntajeFinal = Math.round(promedioValido + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en fórmulas químicas
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "formula molecular estable";
    } else if (puntajeFinal >= 15) {
        clasificacion = "compuesto en balance";
    } else {
        clasificacion = "reaccion inestable";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Se validaron ${participantesValidos.length} de ${participantes.length} elementos (filtrando valores negativos o no numéricos), promedio válido: ${promedioValido}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularQuimicaValidaciones(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularQuimicaValidaciones(casoBorde));