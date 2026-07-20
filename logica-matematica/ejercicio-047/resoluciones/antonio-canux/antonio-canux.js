// Ejercicio 047 - Secuencias numéricas (Playlist Musical)

function generarTiemposPlaylist(duracionesSegundos) {
    if (!Array.isArray(duracionesSegundos) || duracionesSegundos.length === 0) {
        return { error: "La playlist debe contener al menos una pista." };
    }

    const secuenciaTiempos = [];
    let tiempoAcumulado = 0;

    for (let i = 0; i < duracionesSegundos.length; i++) {
        const duracion = duracionesSegundos[i];

        const minutos = Math.floor(tiempoAcumulado / 60);
        const segundos = tiempoAcumulado % 60;
        
        const formatoTiempo = `${minutos}:${segundos.toString().padStart(2, '0')}`;

        secuenciaTiempos.push({
            pista: i + 1,
            inicio_segundos: tiempoAcumulado,
            inicio_formato: formatoTiempo
        });

        tiempoAcumulado += duracion;
    }

    const minutosTotales = Math.floor(tiempoAcumulado / 60);
    const segundosTotales = tiempoAcumulado % 60;

    return {
        total_pistas: duracionesSegundos.length,
        secuencia_reproduccion: secuenciaTiempos,
        duracion_total_playlist: `${minutosTotales}:${segundosTotales.toString().padStart(2, '0')}`
    };
}

// Pruebas

console.log("--- Caso Normal (Playlist variada) ---");
console.log(generarTiemposPlaylist([200, 180, 240, 210]));

console.log("\n--- Caso Borde (Playlist de un solo track / Single) ---");
console.log(generarTiemposPlaylist([215]));