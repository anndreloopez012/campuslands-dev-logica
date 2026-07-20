// Ejercicio 054: Áreas y Perímetros - Tatuajes

function cotizarTatuaje(anchoCm, altoCm, precioPorCm2) {
    if (anchoCm <= 0 || altoCm <= 0) {
        return {
            area_cm2: 0,
            costo_total: 0,
            clasificacion: "invalido",
            explicacion: "Las dimensiones del tatuaje deben ser mayores a cero."
        };
    }

    const area = anchoCm * altoCm;
    const perimetro = 2 * (anchoCm + altoCm);
    const tiempoEstimadoMinutos = perimetro * 3;
    const costoTotal = area * precioPorCm2;

    let clasificacion = "";
    if (area >= 100) {
        clasificacion = "tatuaje grande";
    } else if (area >= 25) {
        clasificacion = "tatuaje mediano";
    } else {
        clasificacion = "tatuaje pequeno";
    }

    return {
        area_cm2: area,
        perimetro_cm: perimetro,
        costo_total: costoTotal,
        tiempo_estimado_minutos: tiempoEstimadoMinutos,
        clasificacion: clasificacion,
        explicacion: `El tatuaje tiene un area de ${area} cm2 y un perimetro de ${perimetro} cm. El costo sera de $${costoTotal} y tomara aprox. ${tiempoEstimadoMinutos} minutos.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = cotizarTatuaje(5, 10, 15);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = cotizarTatuaje(8, 0, 20);
console.log(resultadoBorde);