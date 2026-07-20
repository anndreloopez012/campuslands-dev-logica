tatuajes = [
    {
        "cliente": "Carlos",
        "ancho": 12,
        "alto": 8
    },
    {
        "cliente": "Laura",
        "ancho": 15,
        "alto": 10
    },
    {
        "cliente": "Miguel",
        "ancho": 9,
        "alto": 6
    },
    {
        "cliente": "Sofía",
        "ancho": 18,
        "alto": 12
    },
    {
        "cliente": "Andrés",
        "ancho": 14,
        "alto": 9
    }
]


def calcular_medidas(lista_tatuajes):

    print("=== ESTUDIO DE TATUAJES ===")

    for tatuaje in lista_tatuajes:

        cliente = tatuaje["cliente"]
        ancho = tatuaje["ancho"]
        alto = tatuaje["alto"]

        area = ancho * alto
        perimetro = 2 * (ancho + alto)

        print(f"Cliente: {cliente}")
        print(f"Dimensiones: {ancho} cm x {alto} cm")
        print(f"Área: {area} cm²")
        print(f"Perímetro: {perimetro} cm")
        print("---------------------------------")


calcular_medidas(tatuajes)