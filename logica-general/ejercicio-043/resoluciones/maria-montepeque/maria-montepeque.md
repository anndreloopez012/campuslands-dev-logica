# Solucion - Ejercicio 043

## Analisis

- Entrada: una lista de estados de items del torneo (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se asigna un nivel de prioridad numerico a cada estado y se identifica el estado con mayor prioridad (menor numero) dentro de la lista.
- Salida: un objeto con la accion a tomar y el motivo que la justifica.

## Reglas identificadas

1. Los items `bloqueado` se revisan primero porque representan un riesgo.
2. Si no hay bloqueados, se revisan los `pendiente` antes de cerrar el ciclo.
3. Si todos estan `aprobado`, se revisan para el cierre final.
4. Una lista vacia no genera una accion valida, se debe manejar como caso borde.

## Pruebas

### Caso normal

Entrada:

```js
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```js
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```js
[]
```

Resultado esperado:

```js
{ accion: "sin acciones", motivo: "no hay elementos para evaluar." }
```

## Explicacion final

Se uso un objeto de mapeo numerico (`PRIORIDAD`) en lugar de condicionales encadenados para ordenar los estados por importancia. Esto hace que agregar un nuevo estado en el futuro solo requiera una linea en el mapeo, sin tocar la logica de decision. El caso borde de lista vacia se valida al inicio para evitar errores al intentar ordenar o leer un arreglo sin elementos.