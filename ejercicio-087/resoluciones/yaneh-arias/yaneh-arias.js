/**
 * Ejercicio 087: Lógica matemática - Secuencias numéricas (Lista de reproducción musical)
 * Alumna: Yaneh Arias
 */

function evaluarSecuenciaMusical(duracionesCanciones) {
    if (!duracionesCanciones || duracionesCanciones.length <= 1) {
        return {
            es_secuencia_creciente: true,
            explicacion: "La lista tiene muy pocos elementos para evaluar una secuencia."
        };
    }

    let esCreciente = true;
    for (let i = 0; i < duracionesCanciones.length - 1; i++) {
        if (duracionesCanciones[i] > duracionesCanciones[i + 1]) {
            esCreciente = false;
            break;
        }
    }

    return {
        es_secuencia_creciente: esCreciente,
        explicacion: esCreciente 
            ? "La lista de reproducción musical mantiene una secuencia estrictamente creciente en la duración de las canciones." 
            : "La lista de reproducción musical no mantiene una secuencia ordenada de manera creciente."
    };
}

// Casos de prueba
const pruebaNormal = evaluarSecuenciaMusical([120, 150, 180, 210]);
console.log("Prueba Normal:", JSON.stringify(pruebaNormal, null, 2));

const pruebaBorde = evaluarSecuenciaMusical([200, 150, 220]);
console.log("Prueba Borde:", JSON.stringify(pruebaBorde, null, 2));
