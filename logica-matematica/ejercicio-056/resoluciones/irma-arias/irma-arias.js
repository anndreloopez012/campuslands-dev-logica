
/**
 * Lógica Matemática 056 - Presupuestos y Descuentos
 * Temática: Animación 3D
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [50, 60, 70],
    bono: 10,
    penalizacion: 5
};

// 2. Función principal para procesar las reglas con presupuestos y descuentos
function calcularAnimacionPresupuesto(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de cálculo de presupuesto, costos y aplicación de descuentos por volumen o montos
    let sumaPresupuesto = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPresupuesto += participantes[i];
    }

    let promedioBase = Math.round(sumaPresupuesto / participantes.length);

    // Aplicar regla de descuento si el promedio supera cierto umbral (ej. 20)
    let factorDescuento = (promedioBase > 20) ? 5 : 2;

    // Operación matemática integrando el presupuesto base, descuento aplicado, bono y penalización
    let puntajeFinal = Math.round(promedioBase - factorDescuento + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en animación 3D
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion: clasificacion = "produccion cinematografica 3D";
    } else if (puntajeFinal >= 20) {
        clasificacion = "proyecto animado estandar";
    } else {
        clasificacion = "modelado basico";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Presupuesto promedio base: ${promedioBase}, descuento aplicado: ${factorDescuento}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularAnimacionPresupuesto(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularAnimacionPresupuesto(casoBorde));