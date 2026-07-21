
/**
 * Lógica Matemática 036 - Presupuestos y Descuentos
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
    participantes: [10, 15],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPresupuestoAnimacion(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador y cálculo de presupuesto con aplicación de descuento
    let sumaPresupuesto = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaPresupuesto += participantes[i];
    }

    // Regla de descuento porcentual (ej: si el presupuesto base supera 50, se aplica un descuento del 10%)
    let descuento = 0;
    if (sumaPresupuesto > 50) {
        descuento = sumaPresupuesto * 0.10;
    }

    // Operación matemática con presupuesto neto, descuento, bono y penalización
    let puntajeFinal = Math.round((sumaPresupuesto - descuento) + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en la temática de animación 3D
    let clasificacion = "";
    if (puntajeFinal > 70) {
        clasificacion = "estudio 3D avanzado";
    } else if (puntajeFinal >= 30) {
        clasificacion = "render en proceso";
    } else {
        clasificacion = "proyecto low-poly";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Presupuesto base: ${sumaPresupuesto}, descuento aplicado: ${descuento.toFixed(2)}, bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPresupuestoAnimacion(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPresupuestoAnimacion(casoBorde));