/**
 * Ejercicio 084: Lógica matemática - Rangos y máximos (Inventario de motos)
 * Alumna: Yaneh Arias
 */

function calcularRangoMaximoInventario(preciosMotos) {
    if (!preciosMotos || preciosMotos.length === 0) {
        return {
            minimo: 0,
            maximo: 0,
            rango: 0,
            explicacion: "La lista de precios del inventario de motos está vacía."
        };
    }

    let min = preciosMotos[0];
    let max = preciosMotos[0];

    for (let i = 0; i < preciosMotos.length; i++) {
        let precio = preciosMotos[i];
        if (precio < min) min = precio;
        if (precio > max) max = precio;
    }

    let rango = max - min;

    return {
        minimo: min,
        maximo: max,
        rango: rango,
        explicacion: "Se calcularon los valores extremos (mínimo y máximo) y el rango total de precios del inventario de motos."
    };
}

// Casos de prueba
const pruebaNormal = calcularRangoMaximoInventario([3500, 7200, 4800, 12500, 9100]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularRangoMaximoInventario([5000]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
