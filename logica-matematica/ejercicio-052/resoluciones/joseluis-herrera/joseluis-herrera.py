jugadores = [
    {"nombre": "Alex", "victorias": 18, "derrotas": 2},
    {"nombre": "Beto", "victorias": 10, "derrotas": 10}
]

for jugador in jugadores:
    total_partidos = jugador["victorias"] + jugador["derrotas"]
    probabilidad = (jugador["victorias"] / total_partidos) * 100
    
    print(f"Jugador: {jugador['nombre']}")
    print(f"Probabilidad de ganar el siguiente partido: {probabilidad}%")
    print("-" * 30)