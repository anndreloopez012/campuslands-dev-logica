jugadores = [
    {"nombre": "Alex", "victorias": 18, "derrotas": 2},
    {"nombre": "Beto", "victorias": 10, "derrotas": 10}
]

def obtener_probabilidad(j):
    return (j["victorias"] / (j["victorias"] + j["derrotas"])) * 100

prob_alex = obtener_probabilidad(jugadores[0])
prob_beto = obtener_probabilidad(jugadores[1])

print(f"{jugadores[0]['nombre']} tiene {prob_alex:.1f}% de probabilidad.")
print(f"{jugadores[1]['nombre']} tiene {prob_beto:.1f}% de probabilidad.")

print("-" * 30)

if prob_alex > prob_beto:
    print(f"El favorito para ganar es: {jugadores[0]['nombre']}")
elif prob_beto > prob_alex:
    print(f"El favorito para ganar es: {jugadores[1]['nombre']}")
else:
    print("Ambos jugadores tienen la misma probabilidad.")