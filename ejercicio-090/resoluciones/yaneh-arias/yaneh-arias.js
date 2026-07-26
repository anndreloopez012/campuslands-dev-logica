/**
 * Ejercicio 090: Lógica matemática - Redondeo y precisión (Viajes y turismo)
 * Alumna: Yaneh Arias
 */

function calcularPresupuestoTuristico(costosServicios, decimalesPrecision) {
    if (!costosServicios || costosServicios.length === 0 || decimalesPrecision < 0) {
        return {
            costo_total: 0,
            costo_promedio: 0,
            explicacion: "Los datos de entrada del presupuesto turístico no son válidos."
        };
    }

    let sumaTotal = 0;
    for (let i = 0; i < costosServicios.length; i++) {
        sumaTotal += costosServicios[i];
    }

    let promedio = sumaTotal / costosServicios.length;

    let factor = Math.pow(10, decimalesPrecision);
    let costoTotalRedondeado = Math.round(sumaTotal * factor) / factor;
    let costoPromedioRedondeado = Math.round(promedio * factor) / factor;

    return {
        costo_total: costoTotalRedondeado,
        costo_promedio: costoPromedioRedondeado,
        explicacion: "Se calculó el costo total y promedio de los servicios del paquete turístico aplicando reglas de redondeo y control de precisión decimal."
    };
}

// Casos de prueba
const pruebaNormal = calcularPresupuestoTuristico([450.556, 1200.123, 350.89], 2);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularPresupuestoTuristico([], 2);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
