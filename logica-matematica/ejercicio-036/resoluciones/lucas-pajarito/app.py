proyectos = [
    {
        "cliente": "Carlos",
        "presupuesto": 2500,
        "descuento": 10
    },
    {
        "cliente": "Laura",
        "presupuesto": 3200,
        "descuento": 15
    },
    {
        "cliente": "Miguel",
        "presupuesto": 1800,
        "descuento": 5
    },
    {
        "cliente": "Sofía",
        "presupuesto": 4100,
        "descuento": 20
    },
    {
        "cliente": "Andrés",
        "presupuesto": 2750,
        "descuento": 12
    }
]


def calcular_presupuestos(lista_proyectos):

    print("=== ESTUDIO DE ANIMACIÓN 3D ===")

    for proyecto in lista_proyectos:

        cliente = proyecto["cliente"]
        presupuesto = proyecto["presupuesto"]
        descuento = proyecto["descuento"]

        monto_descuento = presupuesto * (descuento / 100)
        total = presupuesto - monto_descuento

        print(f"Cliente: {cliente}")
        print(f"Presupuesto inicial: Q{presupuesto:.2f}")
        print(f"Descuento: {descuento}%")
        print(f"Monto del descuento: Q{monto_descuento:.2f}")
        print(f"Total a pagar: Q{total:.2f}")
        print("---------------------------------")


calcular_presupuestos(proyectos)