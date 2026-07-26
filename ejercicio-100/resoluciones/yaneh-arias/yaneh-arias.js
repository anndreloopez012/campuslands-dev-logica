/**
 * Ejercicio 100: Lógica matemática - Simulaciones con fórmulas (Comida urbana)
 * Alumna: Yaneh Arias
 */

function simularPreparacionComida(pedidos, tiempoBaseMinutos, factorDemanda) {
    if (!pedidos || pedidos.length === 0 || tiempoBaseMinutos < 0 || factorDemanda <= 0) {
        return {
            tiempo_total_simulado: 0,
            promedio_por_pedido: 0,
            explicacion: "Los datos de entrada para la simulación del puesto de comida urbana no son válidos."
        };
    }

    let tiempoTotal = 0;
    for (let i = 0; i < pedidos.length; i++) {
        // Fórmula de simulación: tiempo por pedido = (unidades * tiempoBase) * factorDemanda
        let tiempoPedido = (pedidos[i] * tiempoBaseMinutos) * factorDemanda;
        tiempoTotal += tiempoPedido;
    }

    let promedioPedido = tiempoTotal / pedidos.length;

    return {
        tiempo_total_simulado: Number(tiempoTotal.toFixed(2)),
        promedio_por_pedido: Number(promedioPedido.toFixed(2)),
        explicacion: "Se ejecutó la simulación matemática de tiempos aplicando fórmulas basadas en unidades de pedidos, tiempo base y factor de alta demanda urbana."
    };
}

// Casos de prueba
const pruebaNormal = simularPreparacionComida([3, 5, 2, 4], 4, 1.2);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = simularPreparacionComida([1], 5, 1.0);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
