// irma-arias.js - Ejercicio 054: Tatuajes (Áreas y perímetros)

// Función 1: Validar que las dimensiones geométricas sean válidas y mayores a cero
function validarDimensionesTatuaje(figura) {
    if (!figura || typeof figura.tipo !== 'string') return false;

    if (figura.tipo === 'rectangulo') {
        return typeof figura.ancho === 'number' && typeof figura.alto === 'number' && figura.ancho > 0 && figura.alto > 0;
    } else if (figura.tipo === 'circulo') {
        return typeof figura.radio === 'number' && figura.radio > 0;
    }
    return false;
}

// Función 2: Calcular el área y el perímetro según la forma geométrica del tatuaje
function calcularGeometriaTatuaje(figura) {
    if (!validarDimensionesTatuaje(figura)) {
        return {
            estado: "Error",
            mensaje: "Dimensiones inválidas. Verifica que los valores numéricos sean mayores a cero y el tipo de figura sea correcto."
        };
    }

    let area = 0;
    let perimetro = 0;

    if (figura.tipo === 'rectangulo') {
        area = figura.ancho * figura.alto;
        perimetro = 2 * (figura.ancho + figura.alto);
    } else if (figura.tipo === 'circulo') {
        area = Math.PI * (figura.radio ** 2);
        perimetro = 2 * Math.PI * figura.radio;
    }

    return {
        estado: "Exitoso",
        tipoFigura: figura.tipo,
        detallesEntrada: figura,
        areaCm2: Number(area.toFixed(2)),
        perimetroCm: Number(perimetro.toFixed(2)),
        explicacion: `Se aplicaron fórmulas geométricas de áreas y perímetros para estimar el espacio de piel y el contorno del diseño de tatuaje.`
    };
}

// --- Casos de prueba ---
// Caso Normal: Un tatuaje rectangular de 10 cm de ancho por 15 cm de alto
const pruebaNormal = calcularGeometriaTatuaje({ tipo: 'rectangulo', ancho: 10, alto: 15 });

// Caso Borde: Dimensiones negativas o nulas para verificar manejo de errores
const pruebaBorde = calcularGeometriaTatuaje({ tipo: 'rectangulo', ancho: -5, alto: 10 });

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(pruebaNormal, null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(pruebaBorde, null, 2));