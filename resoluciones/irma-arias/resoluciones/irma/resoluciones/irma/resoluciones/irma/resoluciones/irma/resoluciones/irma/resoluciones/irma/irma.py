
def buscar_hiperdeportivo(catalogo, criterio):
    """
    Busca un auto en el catálogo comparando por nombre (insensible a mayúsculas).
    """
    criterio = criterio.lower()
    
    for auto in catalogo:
        if auto["modelo"].lower() == criterio:
            return auto
            
    return {"error": "Auto no encontrado en el catálogo."}

# --- Pruebas ---
catalogo_hiper = [
    {"modelo": "Bugatti Chiron", "potencia": 1500, "precio": "3M"},
    {"modelo": "Koenigsegg Jesko", "potencia": 1600, "precio": "4M"},
    {"modelo": "Rimac Nevera", "potencia": 1900, "precio": "2.5M"}
]

# Prueba normal: Búsqueda exitosa
print("Resultado:", buscar_hiperdeportivo(catalogo_hiper, "koenigsegg jesko"))

# Caso borde: Auto no existente
print("Resultado:", buscar_hiperdeportivo(catalogo_hiper, "Ferrari F40"))