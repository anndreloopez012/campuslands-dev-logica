/**
 * Ejercicio 067: Lógica matemática - Secuencias numéricas (Lista de reproducción musical)
 * Alumna: Yaneh Arias
 */

function analizarSecuenciaMusical(duraciones) {
    if (!duraciones || duraciones.length === 0) {
        return {
            total_canciones: 0,
            secuencia_valida: false,
            explicacion: "La lista de reproducción está vacía."
        };
    }

    let esCreciente = true;
    for (let i = 0; i < duraciones.length - 1; i++) {
        if (duraciones[i] >= duraciones[i + 1]) {
            esCreciente = false;
            break;
        }
    }

    return {
        total_canciones: duraciones.length,
        secuencia_valida: esCreciente,
        explicacion: esCreciente ? "La secuencia de duraciones es estrictamente ascendente." : "La secuencia de duraciones no cumple el orden ascendente."
    };
}

// Casos de prueba
const pruebaNormal = analizarSecuenciaMusical([3.5, 4.0, 4.2, 5.1]);
console.log("Prueba Normal:", pruebaNormal);

const pruebaBorde = analizarSecuenciaMusical([4.0, 3.8, 5.0]);
console.log("Prueba Borde:", pruebaBorde);
