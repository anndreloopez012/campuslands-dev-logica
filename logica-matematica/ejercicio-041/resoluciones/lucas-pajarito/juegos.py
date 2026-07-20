videojuegos = [
    {
        "nombre": "Valorant",
        "partidas_ganadas": 18,
        "partidas_perdidas": 7
    },
    {
        "nombre": "League of Legends",
        "partidas_ganadas": 22,
        "partidas_perdidas": 8
    },
    {
        "nombre": "Counter-Strike 2",
        "partidas_ganadas": 15,
        "partidas_perdidas": 10
    },
    {
        "nombre": "Rocket League",
        "partidas_ganadas": 20,
        "partidas_perdidas": 5
    },
    {
        "nombre": "Rainbow Six Siege",
        "partidas_ganadas": 12,
        "partidas_perdidas": 13
    }
]


def calcular_porcentaje_victorias(videojuegos):

    print("=== CLASIFICACIÓN DE VIDEOJUEGOS COMPETITIVOS ===")

    for juego in videojuegos:

        total_partidas = juego["partidas_ganadas"] + juego["partidas_perdidas"]

        porcentaje = (juego["partidas_ganadas"] / total_partidas) * 100

        print(f'Juego: {juego["nombre"]}')
        print(f'Total de partidas: {total_partidas}')
        print(f'Porcentaje de victorias: {porcentaje:.2f}%')
        print("-------------------------------")


calcular_porcentaje_victorias(videojuegos)