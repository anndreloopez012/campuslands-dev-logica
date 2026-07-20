# Ejercicio 064 - Filtros por condiciones en inventario de motos

## Analisis

- Entrada: arreglo de estados (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se identifica el estado de mayor prioridad usando una tabla numerica y `reduce`.
- Salida: objeto `{ accion, motivo }` con el estado a revisar y la razon.

## Reglas identificadas

1. `bloqueado` tiene la maxima prioridad (1), seguido de `pendiente` (2) y `aprobado` (3).
2. La regla prioriza riesgos (bloqueados) antes que tareas normales (pendientes o aprobadas).
3. Un arreglo vacio retorna `sin_accion`; un estado no reconocido se reporta como `desconocido` solo si no hay ningun estado valido en la lista.

## Pruebas

### Caso normal

Entrada: `["aprobado", "pendiente", "bloqueado"]`

Resultado esperado: `{ accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }`

### Caso borde

Entrada: `[]`

Resultado esperado: `{ accion: 'sin_accion', motivo: 'no hay elementos para revisar.' }`

Casos adicionales verificados:

| Entrada | Resultado |
|---|---|
| `["aprobado", "pendiente"]` | `{ accion: 'revisar pendiente', motivo: 'no hay elementos bloqueados, pero aun quedan pendientes por resolver.' }` |
| `["aprobado", "aprobado"]` | `{ accion: 'revisar aprobado', motivo: 'todos los elementos de la lista ya estan aprobados.' }` |
| `["xyz"]` | `{ accion: 'revisar desconocido', motivo: 'se encontro un estado no reconocido en la lista.' }` |

## Explicacion final

La solucion usa una tabla de prioridades numericas en lugar de condicionales encadenados, lo que permite encontrar el estado mas urgente en un solo recorrido con `reduce`. Los estados no reconocidos reciben una prioridad infinita para que nunca superen a un estado valido, y solo se reportan como `desconocido` cuando son los unicos presentes en el arreglo. El caso de arreglo vacio se maneja por separado antes de ejecutar la logica principal. El resultado del ejemplo del README (bloqueado, pendiente, aprobado) coincide exactamente con la salida esperada.