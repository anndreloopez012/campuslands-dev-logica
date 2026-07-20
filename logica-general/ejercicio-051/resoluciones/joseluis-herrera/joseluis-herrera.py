peleadores = [
    {"nombre": "Carlos", "peso": 65, "victorias": 10},
    {"nombre": "Ana", "peso": 55, "victorias": 15},
    {"nombre": "Luis", "peso": 75, "victorias": 8},
    {"nombre": "Sofia", "peso": 50, "victorias": 12}
]

for i in range(len(peleadores)):
    for j in range(i + 1, len(peleadores)):
        if peleadores[i]["victorias"] > peleadores[j]["victorias"]:
            temporal = peleadores[i]
            peleadores[i] = peleadores[j]
            peleadores[j] = temporal

print("Peleadores ordenados por victorias:")
for peleador in peleadores:
    print(peleador["nombre"], "-", peleador["victorias"], "victorias")