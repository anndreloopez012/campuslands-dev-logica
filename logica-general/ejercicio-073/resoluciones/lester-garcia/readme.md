# Plantilla de solucion

## Analisis

- Entrada:
  - altura: 3500
  - paracaidasAbierto: true
  - clima: "despejado"

- Proceso:
  - Verificar si el paracaídas está abierto.
  - Revisar las condiciones climáticas.
  - Determinar la acción más segura según las reglas.

- Salida:
  - resultado: continuar descenso
  - motivo: El paracaídas está abierto y las condiciones son favorables.

## Reglas identificadas

1. Si el paracaídas no está abierto, el salto debe cancelarse.
2. Si el clima no está despejado, se debe esperar antes de continuar.
3. Si el paracaídas está abierto y el clima es despejado, se puede continuar el descenso.

## Pruebas

### Caso normal

Entrada:

altura: 3500
paracaidasAbierto: true
clima: "despejado"

Resultado esperado:

resultado: continuar descenso
motivo: El paracaídas está abierto y las condiciones son favorables.

### Caso borde

Entrada:

altura: 3500
paracaidasAbierto: false
clima: "despejado"

Resultado esperado:

resultado: salto cancelado
motivo: El paracaídas no está abierto y no es seguro continuar.

## Explicacion final

La solución funciona porque analiza el estado del paracaídas y las condiciones climáticas antes de tomar una decisión. Las reglas se evalúan en orden de prioridad, garantizando que siempre se elija la acción más segura según la información proporcionada.