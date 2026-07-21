
/**
 * Lógica Matemática 039 - Validaciones Numéricas
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
    participantes: [-5, 10, 105], // Contiene valores fuera de rango químico válido (0 a 100)
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con validación estricta
function calcularValidacionQuimica(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador con validaciones numéricas estrictas de rango (0 a 100)
    let sumaPuntajes = 0;
    let elementosValidos = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        
        // Validación numérica: verificar que el valor sea un número dentro del rango permitido [0, 100]
        if (typeof valor === 'number' && !isNaN(valor) && valor >= 0 && valor <= 100) {
            sumaPuntajes += valor;
            elementosValidos++;
        }
    }

    // Si ningún elemento pasó la validación
    if (elementosValidos === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "error de validacion",
            explicacion: "Ninguno de los valores cumple con el rango numérico válido."
        };
    }

    // Operación matemática con bono y penalización
    let puntajeFinal = sumaPuntajes + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de fórmulas químicas
    let clasificacion = "";
    if (puntajeFinal > 60) {
        clasificacion = "formula estable";
    } else if (puntajeFinal >= 25) {
        clasificacion = "reaccion moderada";
    } else {
        clasificacion = "compuesto volatil";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma validada de elementos (${elementosValidos}): ${sumaPuntajes}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularValidacionQuimica(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularValidacionQuimica(casoBorde));