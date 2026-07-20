categorias = [
    {
        "categoria": "Peso Ligero",
        "peleadores": 8
    },
    {
        "categoria": "Peso Medio",
        "peleadores": 6
    },
    {
        "categoria": "Peso Pesado",
        "peleadores": 10
    },
    {
        "categoria": "Peso Pluma",
        "peleadores": 5
    },
    {
        "categoria": "Peso Gallo",
        "peleadores": 7
    }
]


def calcular_combates(categorias):

    print("=== TORNEO DE KICKBOXING ===")

    for categoria in categorias:

        peleadores = categoria["peleadores"]

        if peleadores < 2:
            enfrentamientos = 0
        else:
            enfrentamientos = (peleadores * (peleadores - 1)) // 2

        print(f'Categoría: {categoria["categoria"]}')
        print(f'Peleadores inscritos: {peleadores}')
        print(f'Posibles enfrentamientos: {enfrentamientos}')
        print("---------------------------------")


calcular_combates(categorias)