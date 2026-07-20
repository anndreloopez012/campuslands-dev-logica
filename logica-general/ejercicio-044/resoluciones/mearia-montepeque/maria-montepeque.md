# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de motos en el inventario (`aprobado`, `pendiente`, `bloqueado`).
- Proceso: se recorre la lista y se determina cual es el estado de mayor riesgo presente, usando un mapa de prioridades numericas en lugar de condicionales encadenados.
- Salida: un objeto con el estado prioritario detectado, la accion recomendada y el motivo de esa decision.

## Reglas identificadas

1. Si hay al menos una moto `bloqueada`, esa es siempre la prioridad, sin importar cuantos `pendientes` o `aprobados` existan.
2. Si no hay bloqueos pero existe al menos un `pendiente`, se revisa ese estado antes de cerrar el ciclo.
3. Si todas las motos estan `aprobadas`, no se requiere ninguna accion.
4. Si la lista esta vacia o contiene solo estados no reconocidos, se responde que no hay accion posible y se explica el motivo.

## Pruebas

### Caso normal

Entrada:

```text
["aprobado", "pendiente", "bloqueado"]
```

Resultado esperado:

```text
estado: bloqueado
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.
```

### Caso borde

Entrada:

```text
[]
```

Resultado esperado:

```text
estado: null
accion: sin acciones
motivo: el inventario esta vacio, no hay motos que revisar.
```

## Explicacion final

La solucion usa un objeto `PRIORIDADES` que asigna un numero a cada estado (`bloqueado: 1`, `pendiente: 2`, `aprobado: 3`), y con `reduce` se busca el estado con el numero mas bajo dentro de la lista. Esto evita cadenas de `if/else` y hace que agregar un nuevo estado en el futuro solo requiera una linea nueva en el mapa. Los estados que no estan en el mapa se ignoran al calcular la prioridad, y si ninguno es reconocido (o la lista esta vacia) se devuelve una respuesta explicita indicando que no hay accion posible, en vez de fallar silenciosamente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.