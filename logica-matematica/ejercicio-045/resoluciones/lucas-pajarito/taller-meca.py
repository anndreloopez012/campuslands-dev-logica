reparaciones = [
    {
        "vehiculo": "Toyota Corolla",
        "mano_obra": 350,
        "repuestos": 1200
    },
    {
        "vehiculo": "Honda Civic",
        "mano_obra": 450,
        "repuestos": 1800
    },
    {
        "vehiculo": "Mazda 3",
        "mano_obra": 300,
        "repuestos": 950
    },
    {
        "vehiculo": "Nissan Sentra",
        "mano_obra": 400,
        "repuestos": 1500
    },
    {
        "vehiculo": "Kia Sportage",
        "mano_obra": 500,
        "repuestos": 2200
    }
]


def calcular_costo_reparacion(reparaciones):

    print("=== COSTO DE LAS REPARACIONES ===")

    for reparacion in reparaciones:

        subtotal = reparacion["mano_obra"] + reparacion["repuestos"]
        iva = subtotal * 0.12
        total = subtotal + iva

        print(f'Vehículo: {reparacion["vehiculo"]}')
        print(f'Subtotal: Q{subtotal:.2f}')
        print(f'IVA (12%): Q{iva:.2f}')
        print(f'Total a pagar: Q{total:.2f}')
        print("--------------------------------")


calcular_costo_reparacion(reparaciones)