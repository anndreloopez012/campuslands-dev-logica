muestras = [
    {
        "compuesto": "Agua (H2O)",
        "ph": 7,
        "temperatura": 25
    },
    {
        "compuesto": "Ácido Clorhídrico",
        "ph": 2,
        "temperatura": 22
    },
    {
        "compuesto": "Hidróxido de Sodio",
        "ph": 13,
        "temperatura": 27
    },
    {
        "compuesto": "Vinagre",
        "ph": 3,
        "temperatura": 24
    },
    {
        "compuesto": "Amoníaco",
        "ph": 11,
        "temperatura": 26
    }
]


def validar_muestras(lista_muestras):

    print("=== VALIDACIÓN DE FÓRMULAS QUÍMICAS ===")

    for muestra in lista_muestras:

        compuesto = muestra["compuesto"]
        ph = muestra["ph"]
        temperatura = muestra["temperatura"]

        print(f"Compuesto: {compuesto}")
        print(f"pH: {ph}")
        print(f"Temperatura: {temperatura} °C")

        if 0 <= ph <= 14:
            print("Validación de pH: Correcta")
        else:
            print("Validación de pH: Incorrecta")

        if temperatura >= 0:
            print("Temperatura válida")
        else:
            print("Temperatura inválida")

        print("---------------------------------")


validar_muestras(muestras)