# Ejercicio 018 - Sistemas de Turnos

## Cómo pensé el problema

Primero identifiqué las entradas, que son una lista de trabajos de soldadura. Después definí las reglas para decidir cuál trabajo debe atenderse primero.

## Entradas

- Lista de trabajos.
- Operario.
- Prioridad.
- Estado.

## Salidas

- Trabajo seleccionado para atender.
- Información del operario.
- Prioridad.
- Estado.

## Reglas aplicadas

1. Si existe un trabajo bloqueado, se atiende primero.
2. Si no hay bloqueados, se atiende un trabajo con prioridad alta.
3. Si no existen trabajos bloqueados ni de prioridad alta, se selecciona el primer trabajo disponible.
4. Si la lista está vacía, se informa que no existen trabajos pendientes.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Entrada:

- Carlos (media, pendiente)
- Ana (alta, bloqueado)
- Luis (alta, pendiente)
- Marta (baja, pendiente)

Resultado esperado:

Se selecciona el trabajo de Ana porque está bloqueado.

### Caso borde

Entrada:

Lista vacía.

Resultado esperado:

```
No existen trabajos pendientes.
```

## Explicación

La solución recorre la lista utilizando ciclos y aplica las reglas de negocio mediante condicionales. Primero busca trabajos bloqueados, luego prioridades altas y finalmente selecciona el primer trabajo disponible. También valida el caso en el que no existan trabajos.