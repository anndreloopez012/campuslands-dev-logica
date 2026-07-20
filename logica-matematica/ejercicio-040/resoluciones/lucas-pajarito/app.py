pedidos = [
    {
        "cliente": "Carlos",
        "hamburguesas": 2,
        "papas": 1,
        "bebidas": 2
    },
    {
        "cliente": "Laura",
        "hamburguesas": 1,
        "papas": 2,
        "bebidas": 1
    },
    {
        "cliente": "Miguel",
        "hamburguesas": 3,
        "papas": 2,
        "bebidas": 3
    },
    {
        "cliente": "Sofía",
        "hamburguesas": 2,
        "papas": 2,
        "bebidas": 2
    },
    {
        "cliente": "Andrés",
        "hamburguesas": 1,
        "papas": 1,
        "bebidas": 1
    }
]

PRECIO_HAMBURGUESA = 35
PRECIO_PAPAS = 15
PRECIO_BEBIDA = 10
IMPUESTO = 0.12


def calcular_pedidos(lista_pedidos):

    print("=== COMIDA URBANA ===")

    for pedido in lista_pedidos:

        cliente = pedido["cliente"]
        hamburguesas = pedido["hamburguesas"]
        papas = pedido["papas"]
        bebidas = pedido["bebidas"]

        subtotal = (
            hamburguesas * PRECIO_HAMBURGUESA +
            papas * PRECIO_PAPAS +
            bebidas * PRECIO_BEBIDA
        )

        impuesto = subtotal * IMPUESTO
        total = subtotal + impuesto

        print(f"Cliente: {cliente}")
        print(f"Subtotal: Q{subtotal:.2f}")
        print(f"Impuesto (12%): Q{impuesto:.2f}")
        print(f"Total a pagar: Q{total:.2f}")
        print("---------------------------------")


calcular_pedidos(pedidos)