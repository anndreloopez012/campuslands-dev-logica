# Plantilla de solucion

## Analisis

- Entrada:
  - matriz:
    - ["Modelado", "Completado", 100]
    - ["Rigging", "Completado", 100]
    - ["Animación", "En progreso", 75]
    - ["Render", "Pendiente", 0]

- Proceso:
  - Recorrer la matriz fila por fila.
  - Revisar el estado y el porcentaje de avance de cada etapa.
  - Seleccionar la primera etapa que no esté completada y cuyo avance sea menor al 100%.

- Salida:
  - etapa: Animación
  - motivo: Es la primera etapa que aún requiere trabajo.

## Reglas identificadas

1. Cada fila representa una etapa de la animación, su estado y su porcentaje de avance.
2. Una etapa completada debe tener un avance del 100%.
3. Se selecciona la primera etapa que no esté completada.
4. Si todas las etapas están completadas, el proyecto se considera finalizado.

## Pruebas

### Caso normal

Entrada:

matriz:
- ["Modelado", "Completado", 100]
- ["Rigging", "Completado", 100]
- ["Animación", "En progreso", 75]
- ["Render", "Pendiente", 0]

Resultado esperado:

etapa: Animación
motivo: Es la primera etapa que aún requiere trabajo.

### Caso borde

Entrada:

matriz:
- ["Modelado", "Completado", 100]
- ["Rigging", "Completado", 100]
- ["Animación", "Completado", 100]
- ["Render", "Completado", 100]

Resultado esperado:

etapa: Proyecto finalizado
motivo: Todas las etapas están completadas.

## Explicacion final

La solución funciona porque utiliza una matriz simple donde cada fila almacena el nombre de una etapa, su estado y su porcentaje de avance. El algoritmo recorre la matriz en orden hasta encontrar la primera etapa que aún no está completada. Si todas las etapas tienen un estado de "Completado" y un avance del 100 %, informa que el proyecto ha finalizado, obteniendo un resultado claro y verificable.