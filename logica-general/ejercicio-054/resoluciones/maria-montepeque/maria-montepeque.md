# Ejercicio 055 - Reglas de negocio: dibujo digital

## Analisis

- Entrada: una lista de estados de capas de un dibujo digital (`bloqueada`, `pendiente`, `aprobada`).
- Proceso: se identifica el estado con mayor prioridad presente en la lista.
- Salida: un objeto con la accion a tomar, el motivo y las capas afectadas por esa accion.

## Reglas identificadas

1. Si existe al menos una capa `bloqueada`, la accion es `revisar bloqueada`, porque representa un riesgo y debe atenderse primero.
2. Si no hay bloqueadas pero existe al menos una `pendiente`, la accion es `revisar pendiente`.
3. Si todas las capas estan `aprobada`, la accion es `continuar diseno`.
4. Si la lista esta vacia, la accion es `sin capas`.
5. Si ningun estado de la lista es valido, la accion es `estado desconocido`.

La prioridad se maneja con un objeto de mapeo numerico (`bloqueada: 1, pendiente: 2, aprobada: 3`) en lugar de condicionales encadenados, lo que hace la logica mas clara y facil de extender.

## Pruebas

### Caso normal

Entrada:

```text
['aprobada', 'pendiente', 'bloqueada']
```

Resultado esperado:

```text
{ accion: 'revisar bloqueada', motivo: 'la regla prioriza riesgos antes de tareas normales.', capasAfectadas: ['bloqueada'] }
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: 'sin capas', motivo: 'no hay capas para evaluar, no es posible tomar una decision.', capasAfectadas: [] }
```

## Explicacion final

La solucion recorre la lista de capas y determina cual es el estado de mayor prioridad usando un mapeo numerico. Esto evita condicionales anidados y permite agregar nuevos estados sin reescribir la logica principal. Ademas se valida que la lista no este vacia y que los estados sean validos, cubriendo los casos borde antes de calcular la accion final.

## Como ejecutar

```bash
node maria-montepeque.js
```