# Ejercicio 061 - clasificacion por reglas

## Analisis

- Entrada: un arreglo `items` con estados de tipo texto (`bloqueado`, `pendiente`, `aprobado`), pudiendo incluir valores no reconocidos.
- Proceso: se asigna una prioridad numerica a cada estado y se recorre el arreglo con `reduce` para encontrar el estado de mayor prioridad en un solo paso.
- Salida: un objeto con `accion` (el estado a revisar) y `motivo` (la explicacion de por que ese estado gana la prioridad).

## Reglas identificadas

1. `bloqueado` tiene la prioridad mas alta porque representa un riesgo que debe atenderse primero.
2. `pendiente` tiene prioridad media porque es una tarea en progreso.
3. `aprobado` tiene la prioridad mas baja porque ya no requiere atencion inmediata.
4. Un estado no reconocido recibe la prioridad mas baja posible (fallback) y no puede ganar sobre estados conocidos.
5. Un arreglo vacio no genera una accion de revision, sino un resultado indicando que no hay items.

## Pruebas

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
{ accion: "revisar bloqueado", motivo: "la regla prioriza riesgos antes de tareas normales." }
```

### Caso borde

Entrada:

```text
items: []
```

Resultado esperado:

```text
{ accion: "sin acciones", motivo: "no hay items para evaluar." }
```

### Caso adicional (estado desconocido)

Entrada:

```text
items: ["pendiente", "en_revision"]
```

Resultado esperado:

```text
{ accion: "revisar pendiente", motivo: "la regla prioriza tareas en progreso antes de finalizadas." }
```

## Explicacion final

La solucion usa una tabla de prioridades (`PRIORIDAD_ESTADO`) en vez de condicionales encadenados, lo que permite comparar estados con una sola pasada usando `reduce`. Cada estado tiene ademas su propio motivo predefinido en `MOTIVO_ESTADO`, así la respuesta siempre es consistente con la regla que gano. Los estados no reconocidos usan una prioridad de respaldo (0) para que nunca superen a un estado valido, y el arreglo vacio se maneja como caso especial antes de ejecutar el `reduce`.
