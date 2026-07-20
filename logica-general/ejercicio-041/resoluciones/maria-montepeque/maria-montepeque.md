# Solucion - Ejercicio 041

## Analisis

- Entrada: una lista de estados de items (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se determina el estado de mayor prioridad presente en la lista.
- Salida: un objeto con la accion a tomar y el motivo de esa decision.

## Reglas identificadas

1. Los items `bloqueado` tienen prioridad maxima, ya que representan un riesgo.
2. Si no hay bloqueados, se atiende primero lo `pendiente`.
3. Si todos los items estan `aprobado`, no se requiere ninguna accion.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: 'revisar bloqueado', motivo: 'la regla prioriza riesgos antes de tareas normales.' }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: 'sin accion', motivo: 'no hay items para evaluar.' }
```

## Explicacion final

Se uso un objeto de mapeo numerico (`PRIORIDAD`) para representar el orden de importancia de cada estado, en lugar de encadenar condicionales. Esto permite comparar los items con `reduce` y quedarse con el de menor valor numerico (mayor prioridad) en una sola pasada. El caso de lista vacia se valida explicitamente al inicio para evitar errores con `reduce` sobre un arreglo sin elementos.