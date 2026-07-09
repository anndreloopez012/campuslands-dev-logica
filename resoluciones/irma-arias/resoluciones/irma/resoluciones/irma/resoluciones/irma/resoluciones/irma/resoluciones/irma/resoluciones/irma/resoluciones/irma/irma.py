
def limpiar_playlist(playlist):
    """
    Detecta inconsistencias y devuelve solo las canciones válidas.
    """
    ids_vistos = set()
    playlist_limpia = []
    inconsistencias = []

    for cancion in playlist:
        # Regla 1: ID existente
        if "id" not in cancion or cancion["id"] is None:
            inconsistencias.append(f"Canción sin ID encontrada.")
            continue
        
        # Regla 2: Duplicados
        if cancion["id"] in ids_vistos:
            inconsistencias.append(f"ID duplicado: {cancion['id']}")
            continue
        
        # Regla 3: Duración válida
        if cancion.get("duracion", 0) <= 0:
            inconsistencias.append(f"Duración inválida en ID: {cancion['id']}")
            continue
            
        # Si pasa todas las reglas
        ids_vistos.add(cancion["id"])
        playlist_limpia.append(cancion)
            
    return {"limpia": playlist_limpia, "errores": inconsistencias}

# --- Pruebas ---
data = [
    {"id": 1, "titulo": "Song A", "duracion": 200},
    {"id": 1, "titulo": "Song A Duplicada", "duracion": 200}, # Inconsistencia
    {"id": 2, "titulo": "Song B", "duracion": 0},            # Inconsistencia
    {"id": 3, "titulo": "Song C", "duracion": 150}
]

resultado = limpiar_playlist(data)
print("Lista Limpia:", resultado["limpia"])
print("Inconsistencias:", resultado["errores"])