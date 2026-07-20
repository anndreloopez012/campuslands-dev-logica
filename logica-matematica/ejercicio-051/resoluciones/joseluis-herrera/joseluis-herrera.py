peleadores = [
    {"nombre": "Carlos"},
    {"nombre": "Ana"},
    {"nombre": "Luis"},
    {"nombre": "Sofia"}
]

contador = 0

print("Lista de combates programados:")

for i in range(len(peleadores)):
    for j in range(i + 1, len(peleadores)):
        print(f"{peleadores[i]['nombre']} vs {peleadores[j]['nombre']}")
        contador = contador + 1

print("-" * 30)
print(f"Total de combates posibles: {contador}")