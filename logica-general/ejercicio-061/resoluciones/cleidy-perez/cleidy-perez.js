const videojuegosCompetitivos = [
  {
    id: 1,
    nombre: "League of Legends",
    genero: "MOBA",
    jugadores: 5,
    edadMinima: 12,
    tieneRanked: true
  },
  {
    id: 2,
    nombre: "Counter-Strike 2",
    genero: "FPS",
    jugadores: 5,
    edadMinima: 17,
    tieneRanked: true
  },
  {
    id: 3,
    nombre: "Valorant",
    genero: "FPS",
    jugadores: 5,
    edadMinima: 16,
    tieneRanked: true
  },
  {
    id: 4,
    nombre: "Rocket League",
    genero: "Deportes",
    jugadores: 3,
    edadMinima: 3,
    tieneRanked: true
  },
  {
    id: 5,
    nombre: "Dota 2",
    genero: "MOBA",
    jugadores: 5,
    edadMinima: 12,
    tieneRanked: true
  }
];

function clasificaciónPorReglas(videosJuegos){
    if (!videosJuegos || videosJuegos.length === 0){
        return[];
    }

    let cantidad = 0;
    for ( let juegos of videosJuegos){
        if (juegos.edadMinima >= 16){
            cantidad ++;
        }
    }

    const mayoresDeEdad = videosJuegos.filter(
        juego => juego.edadMinima >= 16
    );


    const equipDeCinco = videosJuegos.filter(
        juego=> juego.jugadores >= 5
    );

    const conRanked = videosJuegos.filter(
        juego => juego.tieneRanked
    );
    
    console.log("-----La Clasificación de reglas------")
    console.log("\nMayores de 16 años: ", mayoresDeEdad);
    console.log("\n Catidad de jugadores de 16 años en adelante; " , cantidad)
    console.log("\nEquipo de 5: ", equipDeCinco);
    console.log("\nModo competitivo: ", conRanked)

};

clasificaciónPorReglas(videojuegosCompetitivos);