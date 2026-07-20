proyectos = [
    {
        "proyecto": "Edificio Inteligente",
        "puntaje": 92
    },
    {
        "proyecto": "Centro Comercial",
        "puntaje": 85
    },
    {
        "proyecto": "Puente Moderno",
        "puntaje": 97
    },
    {
        "proyecto": "Museo Virtual",
        "puntaje": 89
    },
    {
        "proyecto": "Aeropuerto Internacional",
        "puntaje": 94
    }
]


def generar_ranking(lista_proyectos):

    print("=== RANKING DE ARQUITECTURA 3D ===")

    proyectos_ordenados = sorted(
        lista_proyectos,
        key=lambda proyecto: proyecto["puntaje"],
        reverse=True
    )

    posicion = 1

    for proyecto in proyectos_ordenados:

        print(f"Posición: {posicion}")
        print(f'Proyecto: {proyecto["proyecto"]}')
        print(f'Puntaje: {proyecto["puntaje"]}')
        print("---------------------------------")

        posicion += 1


generar_ranking(proyectos)