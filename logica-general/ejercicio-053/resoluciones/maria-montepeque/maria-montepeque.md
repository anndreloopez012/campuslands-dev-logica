# Ejercicio 053 - Logica general - Resolucion de casos (paracaidismo)

## Analisis

- Entrada: una lista de estados de paracaidistas (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se determina cual es el estado de mayor riesgo presente en la lista.
- Salida: un objeto con la `accion` a tomar y el `motivo` que la justifica.

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta: siempre debe revisarse primero.
2. Si no hay bloqueados pero existe `pendiente`, ese es el siguiente en prioridad.
3. Si todos los estados son `aprobado`, se puede continuar el salto sin revision adicional.
4. Si la lista esta vacia, no hay nada que evaluar y se responde sin accion.

## Como pensé el problema

En paracaidismo, un estado `bloqueado` representa un riesgo directo, por lo que debe atenderse antes que cualquier tarea pendiente o aprobada. En lugar de encadenar condicionales (`if/else if`), use un objeto de mapeo numerico (`PRIORIDADES`) donde el numero mas bajo representa mayor urgencia. Esto hace que agregar un nuevo estado en el futuro solo requiera anadir una entrada al objeto, sin tocar la logica de comparacion.

La lista se recorre con `reduce`, comparando la prioridad de cada estado contra el mas urgente encontrado hasta el momento, y quedandose con el de menor numero (mayor riesgo).

## Como ejecutar

```bash
node maria-montepeque.js
```

La funcion principal `evaluarEstadosSalto(items)` puede importarse tambien con:

```javascript
const { evaluarEstadosSalto } = require('./maria-montepeque.js');
```

## Pruebas

### Caso normal (ejemplo del enunciado)

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso adicional (sin bloqueados)

Entrada:

```text
["aprobado", "pendiente"]
```

Resultado esperado:

```text
{ accion: "revisar pendiente", motivo: "hay paracaidistas en espera de aprobacion." }
```

### Caso adicional (todos aprobados)

Entrada:

```text
["aprobado", "aprobado"]
```

Resultado esperado:

```text
{ accion: "continuar salto", motivo: "todos los estados permiten continuar sin bloqueos." }
```

### Caso borde (lista vacia)

Entrada:

```text
[]
```

Resultado esperado:

```text
{ accion: "sin accion", motivo: "no hay paracaidistas para revisar." }
```

## Explicacion final

La solucion funciona porque separa claramente las reglas del problema en tres estructuras de datos (prioridades, acciones y motivos), evitando logica condicional repetida. El caso borde de lista vacia se maneja explicitamente al inicio de la funcion, y cualquier estado no reconocido queda cubierto por un valor por defecto en vez de fallar silenciosamente.