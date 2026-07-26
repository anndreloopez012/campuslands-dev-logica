/**
 * Ejercicio 074: Lógica matemática - Áreas y perímetros (Tatuajes)
 * Alumna: Yaneh Arias
 */

function calcularGeometriaTatuaje(figura, dimensiones) {
    if (!dimensiones || dimensiones.length === 0) {
        return {
            area: 0,
            perimetro: 0,
            explicacion: "No se proporcionaron dimensiones válidas."
        };
    }

    let area = 0;
    let perimetro = 0;

    if (figura === "rectangulo" && dimensiones.length >= 2) {
        let largo = dimensiones[0];
        let ancho = dimensiones[1];
        area = largo * ancho;
        perimetro = 2 * (largo + ancho);
    } else if (figura === "circulo" && dimensiones.length >= 1) {
        let radio = dimensiones[0];
        area = Math.PI * (radio * radio);
        perimetro = 2 * Math.PI * radio;
    } else {
        return {
            area: 0,
            perimetro: 0,
            explicacion: "Figura no soportada o dimensiones insuficientes."
        };
    }

    return {
        area: Number(area.toFixed(2)),
        perimetro: Number(perimetro.toFixed(2)),
        explicacion: "Se calculó el área y el perímetro del diseño de tatuaje según la geometría seleccionada."
    };
}

// Casos de prueba
const pruebaNormal = calcularGeometriaTatuaje("rectangulo", [10, 5]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularGeometriaTatuaje("circulo", [0]);
console.log("Prueba Borde:", pruebaBorde);
