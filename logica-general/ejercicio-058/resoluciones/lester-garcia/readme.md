# Plantilla de solucion

## Analisis

- Entrada:
  - turnos:
    - { soldador: "Ana", turno: "Mañana", disponible: false, certificado: true }
    - { soldador: "Luis", turno: "Tarde", disponible: true, certificado: false }
    - { soldador: "Carlos", turno: "Noche", disponible: true, certificado: true }

- Proceso:
  - Recorrer la lista de turnos.
  - Verificar que el soldador esté disponible.
  - Comprobar que tenga certificación vigente.
  - Asignar el primer turno que cumpla ambas condiciones.

- Salida:
  - asignacion: Carlos - Noche
  - motivo: Es el primer soldador disponible y con certificación vigente.

## Reglas identificadas

1. El soldador debe estar disponible para recibir un turno.
2. El soldador debe contar con certificación vigente.
3. Se asigna el primer turno que cumpla ambas condiciones.
4. Si ningún soldador cumple las condiciones, no se realiza ninguna asignación.

## Pruebas

### Caso normal

Entrada:

turnos:
- { soldador: "Ana", turno: "Mañana", disponible: false, certificado: true }
- { soldador: "Luis", turno: "Tarde", disponible: true, certificado: false }
- { soldador: "Carlos", turno: "Noche", disponible: true, certificado: true }

Resultado esperado:

asignacion: Carlos - Noche
motivo: Es el primer soldador disponible y con certificación vigente.

### Caso borde

Entrada:

turnos:
- { soldador: "Ana", turno: "Mañana", disponible: false, certificado: true }
- { soldador: "Luis", turno: "Tarde", disponible: false, certificado: false }
- { soldador: "Carlos", turno: "Noche", disponible: true, certificado: false }

Resultado esperado:

asignacion: Sin asignación
motivo: No existe un soldador que cumpla todas las condiciones.

## Explicacion final

La solución funciona porque recorre la lista de turnos y evalúa dos condiciones para cada soldador: que esté disponible y que tenga una certificación vigente. El primer registro que cumple ambas reglas es seleccionado para el turno. Si ningún soldador satisface los requisitos, el programa informa que no es posible realizar una asignación.