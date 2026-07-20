// Ejercicio 047 - Secuencias numéricas
// Tema: Playlist musical

function generarPlaylist(inicio, cantidad) {

    if (cantidad <= 0) {
        return "Cantidad inválida.";
    }

    let playlist = [];

    for (let i = 0; i < cantidad; i++) {
        playlist.push(inicio + i);
    }

    return {
        canciones: playlist,
        total: playlist.length,
        explicacion: "Se generó una secuencia numérica consecutiva para la playlist."
    };
}

// Prueba normal
console.log(generarPlaylist(1, 10));

// Caso borde
console.log(generarPlaylist(5, 0));