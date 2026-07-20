# Ejercicio 063 - toma de decisiones en torneo de esports

## Analisis

- Entrada: un arreglo de strings con el estado de cada item del torneo (`bloqueado`, `pendiente`, `aprobado`).
- Proceso: se determina cual estado tiene mayor prioridad segun el nivel de riesgo, usando un mapeo numerico y una sola pasada con `reduce`.
- Salida: un objeto con `accion` (que estado revisar) y `motivo` (por que se eligio ese estado).

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa el mayor riesgo.
2. Si no hay `bloqueado`, se prioriza `pendiente`.
3. Si todos los items estan `aprobado`, no se requiere una accion urgente.
4. Un arreglo vacio no genera ninguna accion.
5. Un estado no reconocido se trata con la prioridad mas baja, pero se advierte en el motivo.

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
{ accion: "sin acciones", motivo: "no hay items para evaluar." }
```

### Casos adicionales

- `["aprobado", "pendiente"]` → prioriza `pendiente` porque no hay `bloqueado`.
- `["aprobado", "aprobado"]` → prioriza `aprobado` porque no hay riesgos pendientes.
- `["aprobado", "descalificado"]` → prioriza `aprobado`, ya que `descalificado` no es un estado reconocido y recibe la prioridad mas baja.

## Explicacion final

La solucion evita condicionales encadenados usando un objeto `PRIORIDADES` que asigna un numero a cada estado (entre menor el numero, mayor la urgencia). Con `reduce` se recorre el arreglo una sola vez comparando la prioridad numerica de cada estado contra la del estado elegido hasta el momento, quedandonos siempre con el de mayor urgencia. Los estados no reconocidos reciben una prioridad muy baja para que nunca desplacen a un estado valido, y el caso de arreglo vacio se maneja antes de intentar procesar cualquier dato.