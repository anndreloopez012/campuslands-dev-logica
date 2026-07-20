motos = [
    {
        "marca": "Yamaha",
        "modelo": "FZ25",
        "kilometros_recorridos": 18000,
        "vida_util_motor": 60000
    },
    {
        "marca": "Honda",
        "modelo": "CB190R",
        "kilometros_recorridos": 25000,
        "vida_util_motor": 60000
    },
    {
        "marca": "Suzuki",
        "modelo": "Gixxer 150",
        "kilometros_recorridos": 42000,
        "vida_util_motor": 60000
    },
    {
        "marca": "KTM",
        "modelo": "200 Duke",
        "kilometros_recorridos": 55000,
        "vida_util_motor": 60000
    },
    {
        "marca": "Bajaj",
        "modelo": "Pulsar NS200",
        "kilometros_recorridos": 30000,
        "vida_util_motor": 60000
    }
]


def calcular_desgaste(motos):

    print("=== DESGASTE DEL MOTOR ===")

    for moto in motos:

        porcentaje = (moto["kilometros_recorridos"] / moto["vida_util_motor"]) * 100
        kilometros_restantes = moto["vida_util_motor"] - moto["kilometros_recorridos"]

        print(f'Moto: {moto["marca"]} {moto["modelo"]}')
        print(f'Desgaste: {porcentaje:.2f}%')
        print(f'Kilómetros restantes: {kilometros_restantes} km')
        print("-------------------------------")


calcular_desgaste(motos)