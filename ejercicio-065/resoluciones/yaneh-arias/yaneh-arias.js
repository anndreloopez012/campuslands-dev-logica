/**
 * Ejercicio 065: Lógica matemática - Filtrado y transformación de datos
 * Alumna: Yaneh Arias
 */

function procesarDatosMatematicos(valores, umbral) {
    if (!valores || valores.length === 0) {
        return {
            filtrados: [],
            suma_total: 0,
            estado: "vacio"
        };
    }

    let filtrados = valores.filter(num => num >= umbral);
    let sumaTotal = filtrados.reduce((acc, curr) => acc + curr, 0);

    return {
        filtrados: filtrados,
        suma_total: sumaTotal,
        estado: "procesado exitosamente",
        explicacion: "Se filtraron los elementos mayores o iguales al umbral y se calculó la sumatoria."
    };
}

// Casos de prueba
const pruebaNormal = procesarDatosMatematicos([5, 12, 18, 3, 22], 10);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = procesarDatosMatematicos([], 10);
console.log("Prueba Borde:", pruebaBorde);
