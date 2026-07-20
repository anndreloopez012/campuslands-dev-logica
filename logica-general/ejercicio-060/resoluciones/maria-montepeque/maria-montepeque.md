# Solucion - Ejercicio 060

## Analisis

- Entrada: una lista de items con estado (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se filtran los items validos y se selecciona el de mayor prioridad segun el riesgo que representa.
- Salida: un objeto con la accion a tomar y el motivo de la decision.

## Reglas identificadas

1. Los items `bloqueado` deben revisarse antes que los `pendiente`, y estos antes que los `aprobado`.
2. Si la lista esta vacia, no hay accion posible.
3. Si ningun item tiene un estado reconocido, tampoco hay accion posible.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: null, motivo: "No hay items para evaluar." }
```

## Explicacion final

La solucion usa un objeto de mapeo numerico (`PRIORIDAD`) en lugar de condicionales encadenados para representar el orden de riesgo entre estados. Esto hace que agregar o cambiar prioridades sea directo, sin tocar la logica de seleccion. Se filtran primero los items validos para evitar que un estado desconocido rompa la comparacion, y luego se usa `reduce` para quedarse con el de mayor prioridad (menor numero). Los casos borde de lista vacia y valores invalidos se manejan de forma explicita antes de intentar seleccionar un item.

## Como ejecutar

```bash
node maria-montepeque.js
```