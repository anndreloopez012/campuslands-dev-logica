const playlist = [
    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        duracion: 200
    },
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        duracion: 233
    },
    {
        titulo: "Bad Habits",
        artista: "Ed Sheeran",
        duracion: 0
    },
    {
        titulo: "Levitating",
        artista: "Dua Lipa",
        duracion: 203
    },
    {
        titulo: "As It Was",
        artista: "Harry Styles",
        duracion: -180
    }
];

function revisarPlaylist(playlist) {

    playlist.forEach(cancion => {

        if (cancion.duracion <= 0) {
            console.log(`${cancion.titulo}: Duración inválida. Revisar la información de la canción.`);
        } else {
            console.log(`${cancion.titulo}: Información correcta.`);
        }

    });

}

revisarPlaylist(playlist);