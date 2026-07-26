/**
 * Ejercicio 085: Lógica matemática - Mínimos y límites (Taller mecánico)
 * Alumna: Yaneh Arias
 */

function evaluarMinimosYLimites(inventarioPiezas, limiteMinimo) {
    if (!inventarioPiezas || inventarioPiezas.length === 0 || limiteMinimo === undefined) {
        return {
            piezas_criticas: [],
            cantidad_criticas: 0,
            alerta: false,
            explicacion: "No se proporcionaron datos de inventario o un límite válido."
        };
    }

    let piezasCriticas = [];

    for (let i = 0; i < inventarioPiezas.length; i++) {
        let item = inventarioPiezas[i];
        if (item.cantidad <= limiteMinimo) {
            piezasCriticas.push({
                nombre: item.nombre,
                stock_actual: item.cantidad
            });
        }
    }

    let requiereAlerta = piezasCriticas.length > 0;

    return {
        piezas_criticas: piezasCriticas,
        cantidad_criticas: piezasCriticas.length,
        alerta: requiereAlerta,
        explicacion: requiereAlerta 
            ? "Se encontraron repuestos con un nivel de stock por debajo o igual al límite mínimo reabastecible." 
            : "Todos los repuestos superan el límite mínimo establecido."
    };
}

// Casos de prueba
const inventarioTaller = [
    { nombre: "Filtros de aceite", cantidad: 3 },
    { nombre: "Pastillas de freno", cantidad: 12 },
    { nombre: "Bujías", cantidad: 5 },
    { nombre: "Correas de distribución", cantidad: 1 }
];

const pruebaNormal = evaluarMinimosYLimites(inventarioTaller, 4);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = evaluarMinimosYLimites([], 5);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
