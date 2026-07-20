const equipos = [
    {
        nombre: "Tigres FS",
        partidosJugados: 8,
        victorias: 6,
        empates: 1,
        derrotas: 1,
        puntos: 19
    },
    {
        nombre: "Leones FS",
        partidosJugados: 8,
        victorias: 5,
        empates: 2,
        derrotas: 1,
        puntos: 17
    },
    {
        nombre: "Águilas FS",
        partidosJugados: 8,
        victorias: 4,
        empates: 1,
        derrotas: 3,
        puntos: 13
    },
    {
        nombre: "Panteras FS",
        partidosJugados: 8,
        victorias: 3,
        empates: 2,
        derrotas: 3,
        puntos: 11
    },
    {
        nombre: "Lobos FS",
        partidosJugados: 8,
        victorias: 2,
        empates: 1,
        derrotas: 5,
        puntos: 7
    }
];

function mostaeRanking(equipos){
    equipos.sort((a, b) => b.puntos - a.puntos);
    console.log("=== RANKING DE FÚTBOL SALA ===");
    for (let i = 0; i < equipos.length; i++) {
        console.log(`Top ${i + 1}: ${equipos[i].nombre} - ${equipos[i].puntos} puntos`);
    }
}
mostrarRanking(equipos);