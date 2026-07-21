
function evaluarTallerMecanico(tiemposReparacion, limiteMaximo, penalizacionExtra) {
    // 1. Validar datos vacíos o arreglos sin elementos
    if (!tiemposReparacion || tiemposReparacion.length === 0) {
        return {
            tiempo_total: 0,
            clasificacion: "error",
            explicacion: "No se ingresaron tiempos de reparación válidos."
        };
    }

    // 2. Sumar acumulando los tiempos de reparación (Ciclo / Acumulador)
    let sumaTiempos = tiemposReparacion.reduce((acumulador, valor) => acumulador + valor, 0);

    // 3. Aplicar reglas de mínimos y límites
    let tiempoFinal = sumaTiempos;
    let clasificacion = "";

    if (tiempoFinal > limiteMaximo) {
        tiempoFinal += penalizacionExtra;
        clasificacion = "fuera de límite";
    } else {
        clasificacion = "óptimo";
    }

    // 4. Retornar el resultado estructurado
    return {
        tiempo_total: tiempoFinal,
        clasificacion: clasificacion,
        explicacion: `El tiempo acumulado fue ${sumaTiempos}, el límite era ${limiteMaximo} y el resultado final es ${tiempoFinal} (${clasificacion}).`
    };
}

// --- CASOS DE PRUEBA ---

// Caso Normal (Ejemplo del enunciado / similar)
const pruebaNormal = evaluarTallerMecanico([12, 18, 25, 30], 75, 10);
console.log("Resultado Caso Normal:", pruebaNormal);

// Caso Borde (Valores mínimos o por debajo del límite)
const pruebaBorde = evaluarTallerMecanico([5, 10], 50, 5);
console.log("Resultado Caso Borde:", pruebaBorde);