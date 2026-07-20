equipos = [
    {
        "nombre": "Rangers",
        "ganados": 8,
        "empatados": 2,
        "perdidos": 2
    },
    {
        "nombre": "Flashes",
        "ganados": 6,
        "empatados": 3,
        "perdidos": 3
    },
    {
        "nombre": "Tigres",
        "ganados": 9,
        "empatados": 1,
        "perdidos": 2
    },
    {
        "nombre": "Leones",
        "ganados": 5,
        "empatados": 4,
        "perdidos": 3
    },
    {
        "nombre": "Panteras",
        "ganados": 4,
        "empatados": 2,
        "perdidos": 6
    }
]


def calcular_puntos(equipos):

    print("=== RANKING DE FÚTBOL SALA ===")

    for equipo in equipos:

        puntos = (equipo["ganados"] * 3) + equipo["empatados"]

        print(f'Equipo: {equipo["nombre"]}')
        print(f'Partidos ganados: {equipo["ganados"]}')
        print(f'Partidos empatados: {equipo["empatados"]}')
        print(f'Partidos perdidos: {equipo["perdidos"]}')
        print(f'Puntos obtenidos: {puntos}')
        print("------------------------------")


calcular_puntos(equipos)