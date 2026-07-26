
/**
 * Lógica Matemática 044 - Rangos y Máximos
 * Temática: Inventario de Motos
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 45, 90],
    bono: 6,
    penalizacion: 4
};

// 2. Función principal para procesar las reglas del reto con rangos y máximos
function calcularInventarioMotos(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador, búsqueda del valor máximo y validación de rangos
    let sumaPuntajes = 0;
    let maxValor = participantes[0];

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        if (valor > maxValor) {
            maxValor = valor;
        }
    }

    // Cálculo basado en la relación entre el máximo y el promedio del rango
    let promedioBase = Math.round(sumaPuntajes / participantes.length);
    let puntajeFinal = maxValor - Math.round(promedioBase / 2) + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de inventario de motos
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion = "inventario alto rendimiento";
    } else if (puntajeFinal >= 20) {
        clasificacion = "stock estable";
    } else {
        clasificacion = "reabastecimiento requerido";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Valor máximo detectado: ${maxValor}, promedio base: ${promedioBase}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularInventarioMotos(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularInventarioMotos(casoBorde));git push -u origin alumno/yaneht/ejercicio-044