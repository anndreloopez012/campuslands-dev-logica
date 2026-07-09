
def ordenar_taller(taller):
    """
    Ordena los vehículos del taller por prioridad: Alta > Media > Baja.
    """
    # Definimos el orden numérico para las prioridades
    pesos = {"alta": 1, "media": 2, "baja": 3}
    
    # Ordenamos la lista usando una función lambda como llave de ordenamiento
    # Esto asigna un peso a cada prioridad y ordena según ese peso.
    taller_ordenado = sorted(taller, key=lambda x: pesos.get(x["prioridad"], 4))
    
    return taller_ordenado

# --- Pruebas ---
inventario = [
    {"vehiculo": "Moto A", "prioridad": "baja"},
    {"vehiculo": "Carro B", "prioridad": "alta"},
    {"vehiculo": "Camioneta C", "prioridad": "media"},
    {"vehiculo": "Moto D", "prioridad": "alta"}
]

# Prueba normal
print("Orden de atención:", ordenar_taller(inventario))

# Caso borde: Lista vacía
print("Taller vacío:", ordenar_taller([]))