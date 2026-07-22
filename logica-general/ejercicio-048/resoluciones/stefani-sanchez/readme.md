# Ejercicio 048 - Logica general 048 - flujos paso a paso

## ¿Cómo pensé el problema?

Analicé el flujo de tareas en una producción de cine de ciencia ficción. Para evitar retrasos críticos, la prioridad debe ser resolver tareas en estado "bloqueado" antes que las demás tareas pendientes o aprobadas.

## Entradas

- `items`: Lista de estados de escenas o efectos especiales (`["aprobado", "pendiente", "bloqueado"]`).
- `prioridad`: Nivel de urgencia (`"alta"`, `"media"`, `"baja"`).
- `regla`: Criterio de ordenamiento (`"revisar bloqueados primero"`).

## Reglas aplicadas

- Validar que la entrada sea un arreglo no vacío.
- Si existe al menos un elemento en estado "bloqueado" y la regla lo indica, la acción inmediata es revisar dicho elemento.
- En ausencia de elementos bloqueados, atender los pendientes.
- Si no hay pendientes ni bloqueados, finalizar el flujo.

## Salida

Objeto con la acción a tomar y el motivo explícito de la decisión.

## Casos de prueba

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero
```

Salida:

```text
{
  accion: 'revisar bloqueado',
  motivo: 'la regla prioriza riesgos antes de tareas normales.'
}
```

### Caso borde

Entrada:

```text
items: []
prioridad: baja
regla: revisar bloqueados primero
```

Salida:

```text
{
  accion: 'sin accion',
  motivo: 'la lista de tareas de la pelicula esta vacia o es invalida.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
