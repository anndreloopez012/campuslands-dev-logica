// Ejercicio 053: Coordenadas y Distancia - Paracaidismo

function evaluarAterrizaje(xParacaidista, yParacaidista, xObjetivo, yObjetivo) {
    const diferenciaX = xObjetivo - xParacaidista;
    const diferenciaY = yObjetivo - yParacaidista;

    // Math.pow eleva un número a la potencia indicada, Math.sqrt saca la raíz cuadrada
    const distancia = Math.sqrt(Math.pow(diferenciaX, 2) + Math.pow(diferenciaY, 2));

    // Redondeamos a dos decimales
    const distanciaRedondeada = Math.round(distancia * 100) / 100;

    let clasificacion = "";
    if (distanciaRedondeada === 0) {
        clasificacion = "diana perfecta";
    } else if (distanciaRedondeada <= 10) {
        clasificacion = "aterrizaje aceptable";
    } else {
        clasificacion = "fuera de zona";
    }

    return {
        distancia_metros: distanciaRedondeada,
        clasificacion: clasificacion,
        explicacion: `El paracaidista aterrizo a ${distanciaRedondeada} metros del objetivo, lo que resulta en una clasificacion de '${clasificacion}'.`
    };
}

// Pruebas

console.log("=== Caso Normal ===");
const resultadoNormal = evaluarAterrizaje(6, 8, 0, 0);
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = evaluarAterrizaje(-15, 20, -15, 20);
console.log(resultadoBorde);