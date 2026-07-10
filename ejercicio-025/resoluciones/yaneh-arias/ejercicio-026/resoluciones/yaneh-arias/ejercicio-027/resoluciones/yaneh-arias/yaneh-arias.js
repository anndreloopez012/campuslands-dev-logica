
/**
 * Ejercicio 027: Secuencias Numéricas - Playlist
 * Regla: Verifica si la duración de las canciones es ascendente 
 * y calcula el tiempo total de la lista.
 */

function analizarPlaylist(duraciones) {
    if (!duraciones || duraciones.length === 0) return "Playlist vacía";

    let esSecuencial = true;
    let tiempoTotal = 0;

    for (let i = 0; i < duraciones.length; i++) {
        tiempoTotal += duraciones[i];
        
        // Verificación de secuencia: si la canción actual es menor que la anterior
        if (i > 0 && duraciones[i] < duraciones[i - 1]) {
            esSecuencial = false;
        }
    }

    return {
        secuencia_valida: esSecuencial,
        duracion_total: tiempoTotal,
        mensaje: esSecuencial ? "Orden de reproducción fluido" : "Orden aleatorio detectado"
    };
}

// Pruebas
console.log("Playlist 1:", analizarPlaylist([3, 4, 5, 6])); // Caso normal (Secuencial)
console.log("Playlist 2:", analizarPlaylist([5, 3, 8]));    // Caso borde (No secuencial)