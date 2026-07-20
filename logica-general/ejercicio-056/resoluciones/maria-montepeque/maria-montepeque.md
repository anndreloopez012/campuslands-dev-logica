# Ejercicio 056 - Matrices simples

## Analisis

- Entrada: una lista de estados de items (por ejemplo `"aprobado"`, `"pendiente"`, `"bloqueado"`).
- Proceso: se identifica el estado de mayor prioridad presente en la lista, usando un mapa numerico de prioridades.
- Salida: un objeto con la accion a tomar y el motivo que la justifica.

## Reglas identificadas

1. Los estados bloqueados tienen la prioridad mas alta, porque representan un riesgo.
2. Si no hay bloqueados, se prioriza pendiente sobre aprobado.
3. Si la lista esta vacia o no contiene estados reconocidos, no hay accion que tomar.

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
{ accion: "sin accion", motivo: "no hay elementos para evaluar." }
```

## Explicacion final

Se uso un objeto de mapeo numerico (`PRIORIDAD_ESTADOS`) en lugar de condicionales encadenados para definir el orden de prioridad, ya que es mas claro y facil de mantener si se agregan nuevos estados. La funcion recorre la lista una sola vez con `reduce` y conserva el estado de mayor prioridad encontrado. Los casos borde (lista vacia, valor que no es arreglo, o estados no reconocidos) se manejan explicitamente para evitar resultados indefinidos.

## Como ejecutar

```bash
node maria-montepeque.js
```