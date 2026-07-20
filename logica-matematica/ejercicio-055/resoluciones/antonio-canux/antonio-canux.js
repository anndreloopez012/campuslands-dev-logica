// Ejercicio 055: Velocidad, Tiempo, Distancia - Dibujo Digital

function calcularTiempoRenderizado(distanciaPixeles, velocidadPixelesPorSegundo) {
    if (velocidadPixelesPorSegundo <= 0) {
        return {
            tiempo_segundos: 0,
            clasificacion: "error de hardware",
            explicacion: "La velocidad del stylus debe ser mayor a 0 px/s."
        };
    }

    const tiempo = distanciaPixeles / velocidadPixelesPorSegundo;
    const tiempoRedondeado = Math.round(tiempo * 100) / 100;

    let clasificacion = "";
    if (tiempoRedondeado < 0.5) {
        clasificacion = "trazo rapido (boceto)";
    } else if (tiempoRedondeado <= 2.0) {
        clasificacion = "trazo normal (entintado)";
    } else {
        clasificacion = "trazo lento (detalle)";
    }

    return {
        tiempo_segundos: tiempoRedondeado,
        clasificacion: clasificacion,
        explicacion: `Para procesar un trazo de ${distanciaPixeles} pixeles a ${velocidadPixelesPorSegundo} px/s, el motor tardara ${tiempoRedondeado} segundos.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = calcularTiempoRenderizado(1200, 800);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularTiempoRenderizado(500, 0);
console.log(resultadoBorde);