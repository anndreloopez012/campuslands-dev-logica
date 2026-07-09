
def filtrar_motos(inventario):
    """
    Filtra el inventario de motos según disponibilidad y kilometraje.
    """
    motos_aptas = []
    
    for moto in inventario:
        # Aplicamos los filtros
        if moto["estado"] == "disponible" and moto["kilometraje"] < 5000:
            motos_aptas.append(moto)
            
    return motos_aptas

# --- Pruebas ---
inventario_ejemplo = [
    {"modelo": "Yamaha MT-07", "estado": "disponible", "kilometraje": 2000},
    {"modelo": "Honda CB500", "estado": "vendida", "kilometraje": 100},
    {"modelo": "Kawasaki Z400", "estado": "disponible", "kilometraje": 7000},
    {"modelo": "Suzuki SV650", "estado": "disponible", "kilometraje": 4500}
]

# Prueba normal
print("Motos disponibles para venta:", filtrar_motos(inventario_ejemplo))

# Caso borde: Inventario vacío
print("Inventario vacío:", filtrar_motos([]))