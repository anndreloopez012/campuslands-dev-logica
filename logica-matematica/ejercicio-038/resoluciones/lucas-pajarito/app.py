soldadores = [
    {
        "nombre": "Carlos",
        "puntaje": 82
    },
    {
        "nombre": "Laura",
        "puntaje": 95
    },
    {
        "nombre": "Miguel",
        "puntaje": 76
    },
    {
        "nombre": "Sofía",
        "puntaje": 88
    },
    {
        "nombre": "Andrés",
        "puntaje": 91
    }
]


def normalizar_puntajes(lista_soldadores):

    print("=== EVALUACIÓN DE SOLDADURA ===")

    puntajes = [soldador["puntaje"] for soldador in lista_soldadores]

    puntaje_minimo = min(puntajes)
    puntaje_maximo = max(puntajes)

    for soldador in lista_soldadores:

        nombre = soldador["nombre"]
        puntaje = soldador["puntaje"]

        if puntaje_maximo == puntaje_minimo:
            puntaje_normalizado = 100
        else:
            puntaje_normalizado = (
                (puntaje - puntaje_minimo)
                / (puntaje_maximo - puntaje_minimo)
            ) * 100

        print(f"Soldador: {nombre}")
        print(f"Puntaje original: {puntaje}")
        print(f"Puntaje normalizado: {puntaje_normalizado:.2f}")
        print("---------------------------------")


normalizar_puntajes(soldadores)