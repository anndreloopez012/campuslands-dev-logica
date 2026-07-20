saltos = [
    {
        "paracaidista": "Carlos",
        "x": 12,
        "y": 8
    },
    {
        "paracaidista": "Laura",
        "x": 5,
        "y": 15
    },
    {
        "paracaidista": "Miguel",
        "x": 18,
        "y": 10
    },
    {
        "paracaidista": "Sofía",
        "x": 9,
        "y": 4
    },
    {
        "paracaidista": "Andrés",
        "x": 14,
        "y": 13
    }
]


def calcular_distancias(lista_saltos):

    print("=== PARACAIDISMO ===")

    for salto in lista_saltos:

        nombre = salto["paracaidista"]
        x = salto["x"]
        y = salto["y"]

        distancia = (x ** 2 + y ** 2) ** 0.5

        print(f"Paracaidista: {nombre}")
        print(f"Coordenadas: ({x}, {y})")
        print(f"Distancia al punto de aterrizaje: {distancia:.2f} metros")
        print("---------------------------------")


calcular_distancias(saltos)