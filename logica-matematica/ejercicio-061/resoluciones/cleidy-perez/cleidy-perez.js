const videojuegosCompetitivos = [
  {
    id: 1,
    nombre: "League of Legends",
    genero: "MOBA",
    jugadores: 5,
    edadMinima: 12,
    tieneRanked: true,
    reseña: -23
  },
  {
    id: 2,
    nombre: "Counter-Strike 2",
    genero: "FPS",
    jugadores: 5,
    edadMinima: 17,
    tieneRanked: true,
    reseña: 10
  },
  {
    id: 3,
    nombre: "Valorant",
    genero: "FPS",
    jugadores: 5,
    edadMinima: 16,
    tieneRanked: true,
    reseña: -5
  },
  {
    id: 4,
    nombre: "Rocket League",
    genero: "Deportes",
    jugadores: 3,
    edadMinima: 3,
    tieneRanked: true,
    reseña: 4
  },
  {
    id: 5,
    nombre: "Dota 2",
    genero: "MOBA",
    jugadores: 5,
    edadMinima: 12,
    tieneRanked: true,
    reseña: -2
  }
];

function resenaTotal(videosjuegos){
    if(!videosjuegos || videosjuegos.length === 0) return [];
    
    let reseñaSuma=0;

    let reseñaGlobal =0;

    for (let i =0; i< videosjuegos.length; i++){
         reseñaSuma += videosjuegos [i].reseña
    }
    let reseñaGlobal = reseñaSuma / videosjuegos.length;

    console.log("Reseña global de los videosjuegos competitivos: ", reseñaGlobal)


}

resenaTotal(videojuegosCompetitivos);