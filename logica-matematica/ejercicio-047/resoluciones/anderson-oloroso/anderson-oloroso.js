function generarPlaylist(idInicial, cantidadCanciones) {
    const playlist = [];
    let suma = 0;

    for (let i = 0; i < cantidadCanciones; i++) {
        const idCancion = idInicial + (i * 3);
        playlist.push(idCancion);
        suma += idCancion;
    }

    const promedio = suma / cantidadCanciones;

    console.log("Playlist:", playlist);
    console.log("Suma de IDs:", suma);
    console.log("Promedio:", promedio.toFixed(2));
}

// Ejemplo
generarPlaylist(100, 6);