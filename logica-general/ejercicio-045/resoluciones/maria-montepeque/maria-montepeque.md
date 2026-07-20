# Solucion - Ejercicio 045

## Analisis

- Entrada: una lista de items de un taller mecanico, cada uno con un estado (`bloqueado`, `pendiente` o `aprobado`).
- Proceso: se identifica el estado con mayor urgencia presente en la lista, siguiendo un orden de prioridad fijo.
- Salida: un objeto con la accion a tomar y el motivo que la justifica.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo.
2. `pendiente` tiene prioridad media, ya que no bloquea pero requiere seguimiento.
3. `aprobado` tiene la prioridad mas baja porque no requiere atencion inmediata.
4. Si la lista esta vacia, no hay accion que tomar.
5. Si un item tiene un estado no reconocido, se ignora sin detener el analisis.

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
{ accion: "sin accion", motivo: "no se recibieron items para evaluar." }
```

### Caso borde adicional

Entrada:

```text
["en_revision", "aprobado"]
```

Resultado esperado:

```text
{ accion: "revisar aprobado", motivo: "no requiere atencion inmediata." }
```

Se agrego este caso para verificar que un estado no reconocido no interrumpe el analisis ni se toma como el mas urgente.

## Explicacion final

La solucion usa un objeto de mapeo numerico (`PRIORIDAD_ESTADOS`) en lugar de condicionales encadenados para representar el orden de urgencia entre estados. Con `reduce` se recorre la lista una sola vez, comparando la prioridad numerica de cada item contra el mas urgente encontrado hasta el momento. Esto hace que agregar o reordenar estados en el futuro solo requiera modificar el mapeo, sin tocar la logica de comparacion. Los casos borde (lista vacia y estados desconocidos) se manejan de forma explicita para que la funcion nunca falle de forma inesperada.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.