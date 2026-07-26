/**
 * Ejercicio 080: Lógica matemática - Simulaciones con fórmulas (Comida urbana)
 * Alumna: Yaneh Arias
 */

function simularVentasComidaUrbana(pedidosBase, factorCrecimiento, ciclosSimulacion) {
    if (!pedidosBase || pedidosBase.length === 0 || ciclosSimulacion < 0) {
        return {
            resultados_simulacion: [],
            explicacion: "Los datos de entrada no son válidos para la simulación."
        };
    }

    let simulacionesTotales = [];

    for (let c = 1; c <= ciclosSimulacion; c++) {
        let totalCiclo = 0;
        for (let i = 0; i < pedidosBase.length; i++) {
            // Aplicamos fórmula de simulación: valor base incrementado por el factor según el ciclo
            let proyeccion = pedidosBase[i] * Math.pow(1 + factorCrecimiento, c);
            totalCiclo += proyeccion;
        }
        simulacionesTotales.push({
            ciclo: c,
            total_proyectado: Number(totalCiclo.toFixed(2))
        });
    }

    return {
        resultados_simulacion: simulacionesTotales,
        explicacion: "Se ejecutó la simulación de demanda para los puestos de comida urbana aplicando fórmulas de crecimiento exponencial por ciclo."
    };
}

// Casos de prueba
const pruebaNormal = simularVentasComidaUrbana([50, 80, 120], 0.05, 3);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = simularVentasComidaUrbana([], 0.1, 2);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
