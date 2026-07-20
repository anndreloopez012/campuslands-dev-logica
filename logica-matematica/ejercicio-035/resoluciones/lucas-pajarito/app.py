proyectos = [
    {
        "artista": "Carlos",
        "velocidad": 12,
        "tiempo": 4
    },
    {
        "artista": "Laura",
        "velocidad": 15,
        "tiempo": 3
    },
    {
        "artista": "Miguel",
        "velocidad": 10,
        "tiempo": 5
    },
    {
        "artista": "Sofía",
        "velocidad": 18,
        "tiempo": 2
    },
    {
        "artista": "Andrés",
        "velocidad": 14,
        "tiempo": 6
    }
]


def calcular_distancias(lista_proyectos):

    print("=== DIBUJO DIGITAL ===")

    for proyecto in lista_proyectos:

        artista = proyecto["artista"]
        velocidad = proyecto["velocidad"]
        tiempo = proyecto["tiempo"]

        distancia = velocidad * tiempo

        print(f"Artista: {artista}")
        print(f"Velocidad de dibujo: {velocidad} cm/min")
        print(f"Tiempo de trabajo: {tiempo} min")
        print(f"Distancia recorrida por el lápiz: {distancia} cm")
        print("---------------------------------")


calcular_distancias(proyectos)