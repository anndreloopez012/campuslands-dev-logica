def evaluar_salto(altitud, viento, experiencia):
    if altitud < 3000:
        return "Salto cancelado: Altitud insuficiente"
    if viento > 25:
        return "Salto cancelado: Viento demasiado fuerte"
    if experiencia == "novato" and altitud < 4000:
        return "Salto cancelado: Requiere mayor altitud para novatos"
    return "Salto autorizado"

salto1 = evaluar_salto(3500, 15, "experto")
salto2 = evaluar_salto(2500, 10, "experto")
salto3 = evaluar_salto(3500, 30, "novato")

print(salto1)
print(salto2)
print(salto3)