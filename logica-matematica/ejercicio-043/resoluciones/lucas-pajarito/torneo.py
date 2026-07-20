equipos = [
    {
        "nombre": "Dragons",
        "partidos_jugados": 12,
        "victorias": 9,
        "derrotas": 3
    },
    {
        "nombre": "Titans",
        "partidos_jugados": 12,
        "victorias": 7,
        "derrotas": 5
    },
    {
        "nombre": "Phoenix",
        "partidos_jugados": 12,
        "victorias": 10,
        "derrotas": 2
    },
    {
        "nombre": "Warriors",
        "partidos_jugados": 12,
        "victorias": 5,
        "derrotas": 7
    },
    {
        "nombre": "Legends",
        "partidos_jugados": 12,
        "victorias": 11,
        "derrotas": 1
    }
]


def calcular_porcentaje_victorias(equipos):

    print("=== RENDIMIENTO DE LOS EQUIPOS ===")

    for equipo in equipos:

        porcentaje = (equipo["victorias"] / equipo["partidos_jugados"]) * 100

        print(f'Equipo: {equipo["nombre"]}')
        print(f'Partidos jugados: {equipo["partidos_jugados"]}')
        print(f'Victorias: {equipo["victorias"]}')
        print(f'Porcentaje de victorias: {porcentaje:.2f}%')
        print("-------------------------------")


calcular_porcentaje_victorias(equipos)