
/**
 * Lógica Matemática 030 - Redondeo y Precisión
 * Temática: Viajes y Turismo
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12.5, 18.2, 25.7, 30.1],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10.4, 20.3],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeTurismo(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador usando ciclos y cálculo con decimales
    let sumaPuntajes = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Operación matemática con bono y penalización
    let calculoTotal = sumaPuntajes + bono - penalizacion;
    
    // Aplicando regla de redondeo y precisión (dos decimales o entero según convenga)
    let puntajeFinal = Math.round(calculoTotal);

    // 4. Reglas de clasificación condicional basadas en la temática de turismo
    let clasificacion = "";
    if (puntajeFinal > 50) {
        clasificacion = "viajero elite";
    } else if (puntajeFinal >= 25) {
        clasificacion = "turista frecuente";
    } else {
        clasificacion = "explorador novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma precisa: ${sumaPuntajes.toFixed(2)}, con redondeo final, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeTurismo(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeTurismo(casoBorde));