def asignar_turno_soldadura(tecnicos):
    turnos = []
    horas_disponibles = [8, 12, 16]
    
    contador = 0
    while contador < len(tecnicos):
        if contador < len(horas_disponibles):
            registro = f"Tecnico: {tecnicos[contador]} | Hora: {horas_disponibles[contador]}:00"
            turnos.append(registro)
        else:
            turnos.append(f"Tecnico: {tecnicos[contador]} | Estado: Pendiente de cupo")
        contador += 1
    return turnos

equipo = ["Carlos", "Ana", "Luis", "Maria"]
asignaciones = asignar_turno_soldadura(equipo)

for turno in asignaciones:
    print(turno)