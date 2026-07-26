/**
 * Ejercicio 094: Lógica matemática - Áreas y perímetros (Tatuajes)
 * Alumna: Yaneh Arias
 */

function calcularGeometriaTatuaje(base, altura, forma) {
    if (base <= 0 || altura <= 0) {
        return {
            area: 0,
            perimetro: 0,
            explicacion: "Las dimensiones de base y altura deben ser mayores a cero."
        };
    }

    let area = 0;
    let perimetro = 0;

    if (forma === "rectangulo") {
        area = base * altura;
        perimetro = 2 * (base + altura);
    } else {
        // Por defecto usamos regla de triángulo o figura base equivalente
        area = (base * altura) / 2;
        perimetro = base + (2 * Math.sqrt((base/2)*(base/2) + (altura*altura)));
    }

    return {
        area: Number(area.toFixed(2)),
        perimetro: Number(perimetro.toFixed(2)),
        explicacion: "Se calcularon el área y el perímetro del diseño de tatuaje según las fórmulas geométricas de la figura seleccionada."
    };
}

// Casos de prueba
const pruebaNormal = calcularGeometriaTatuaje(10, 5, "rectangulo");
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = calcularGeometriaTatuaje(0, 5, "rectangulo");
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
