partidos = [
    {
        "jugador": "Carlos",
        "victorias": 18,
        "partidos": 20
    },
    {
        "jugador": "Laura",
        "victorias": 15,
        "partidos": 20
    },
    {
        "jugador": "Miguel",
        "victorias": 12,
        "partidos": 18
    },
    {
        "jugador": "Sofía",
        "victorias": 9,
        "partidos": 15
    },
    {
        "jugador": "Andrés",
        "victorias": 7,
        "partidos": 10
    }
]


def calcular_probabilidad(lista_partidos):

    print("=== TORNEO DE PINGPONG ===")

    for partido in lista_partidos:

        jugador = partido["jugador"]
        victorias = partido["victorias"]
        total_partidos = partido["partidos"]

        if total_partidos == 0:
            probabilidad = 0
        else:
            probabilidad = victorias / total_partidos

        print(f"Jugador: {jugador}")
        print(f"Victorias: {victorias}")
        print(f"Partidos jugados: {total_partidos}")
        print(f"Probabilidad de ganar: {probabilidad:.2f}")
        print("---------------------------------")


calcular_probabilidad(partidos)