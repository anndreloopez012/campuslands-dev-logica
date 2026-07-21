
// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [10, 20, 15],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto
function calcularPuntajeMiedo(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Acumulador usando ciclos y validación de divisibilidad (módulos)
    let sumaPuntajes = 0;
    let contadorPares = 0;

    for (let i = 0; i < participantes.length; i++) {
        let valor = participantes[i];
        sumaPuntajes += valor;
        
        // Aplicando regla de módulo y divisibilidad (% 2)
        if (valor % 2 === 0) {
            contadorPares++;
        }
    }

    // Operación matemática con bono y penalización
    let puntajeFinal = sumaPuntajes + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en la temática de miedo
    let clasificacion = "";
    if (contadorPares >= 3) {
        clasificacion = "superviviente experto";
    } else if (puntajeFinal > 40) {
        clasificacion = "en peligro";
    } else {
        clasificacion = "fantasma atrapado";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Suma base: ${sumaPuntajes}, elementos pares encontrados: ${contadorPares}, aplicando bono (${bono}) y penalización (${penalizacion}).`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularPuntajeMiedo(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularPuntajeMiedo(casoBorde));