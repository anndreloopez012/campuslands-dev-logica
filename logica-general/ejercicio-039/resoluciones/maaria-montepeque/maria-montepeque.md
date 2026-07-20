# Plantilla de solucion

## Analisis

- Entrada: una lista de estados de items, donde cada estado es uno de `"aprobado"`, `"pendiente"` o `"bloqueado"`.
- Proceso: se identifica el estado con mayor prioridad de revision presente en la lista, siguiendo el orden: bloqueado > pendiente > aprobado.
- Salida: un objeto con la accion a tomar (`revisar <estado>`) y el motivo de esa decision.

## Reglas identificadas

1. Si hay al menos un item bloqueado, ese es el estado que se debe revisar primero.
2. Si no hay bloqueados pero hay pendientes, se revisan los pendientes.
3. Si todos los items estan aprobados, no hay riesgo urgente, pero se informa esa conclusion.

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

Tambien se probo el caso de una lista donde todos los items estan `"aprobado"`, que produce `revisar aprobado` con el motivo de que no hay revision urgente pendiente.

## Explicacion final

Uso un objeto de mapeo (`PRIORIDAD`) en lugar de condicionales encadenados para ordenar los estados por urgencia. Esto hace que agregar o cambiar el orden de prioridad sea tan simple como editar un numero, sin tocar la logica de decision. La lista de items se filtra primero para descartar estados invalidos, y luego se reduce a un solo estado usando el de menor valor numerico (mayor prioridad). Los casos borde (lista vacia y estados invalidos) se manejan de forma explicita antes de aplicar la logica principal.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.