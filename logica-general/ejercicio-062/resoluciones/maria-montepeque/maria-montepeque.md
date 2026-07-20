# Ejercicio 062 - Control de calidad en linea de produccion

## Analisis

- Entrada: un arreglo de estados de los elementos de un lote de produccion. Cada estado puede ser `bloqueado`, `pendiente`, `en-revision` o `aprobado`.
- Proceso: se recorre el lote una sola vez para determinar el estado con mayor prioridad de atencion, siguiendo el orden `bloqueado > pendiente > en-revision > aprobado`. Un estado no reconocido se trata como el mas urgente, ya que representa una anomalia que debe verificarse antes de continuar.
- Salida: un objeto con `accion` (que hacer con el lote) y `motivo` (justificacion de esa accion).

## Reglas identificadas

1. Si existe al menos un elemento `bloqueado`, la accion es detener la produccion.
2. Si no hay bloqueados pero existe al menos un `pendiente`, la accion es revisar los pendientes.
3. Si no hay bloqueados ni pendientes pero existe al menos un `en-revision`, la accion es esperar la revision.
4. Si todos los elementos estan `aprobado`, la accion es continuar la produccion.
5. Si aparece un estado no reconocido, la accion es verificar ese estado antes que cualquier otro, porque es una anomalia.
6. Si el lote esta vacio, no hay accion que tomar.

## Pruebas

### Caso normal

Entrada: `["aprobado", "pendiente", "bloqueado"]`

Resultado esperado:

```js
{ accion: "detener produccion", motivo: "hay elementos bloqueados que impiden continuar la produccion" }
```

### Caso borde: lote vacio

Entrada: `[]`

Resultado esperado:

```js
{ accion: "sin_accion", motivo: "no hay elementos en el lote" }
```

### Caso borde: sin bloqueados

Entrada: `["aprobado", "en-revision", "pendiente"]`

Resultado esperado:

```js
{ accion: "revisar pendiente", motivo: "hay elementos pendientes que requieren revision antes de continuar" }
```

### Caso borde: todos aprobados

Entrada: `["aprobado", "aprobado"]`

Resultado esperado:

```js
{ accion: "continuar produccion", motivo: "todos los elementos del lote estan aprobados" }
```

### Caso borde: estado no reconocido

Entrada: `["aprobado", "defectuoso"]`

Resultado esperado:

```js
{ accion: "verificar estado desconocido", motivo: "se encontro un estado no reconocido en el lote" }
```

## Explicacion final

La solucion usa un objeto de mapeo numerico (`PRIORIDADES`) en lugar de condicionales encadenados, de forma que agregar o cambiar un estado en el futuro solo requiere modificar el mapeo. Con `reduce` se recorre el lote una unica vez para encontrar el estado mas urgente, tratando cualquier valor no incluido en el mapeo como la maxima prioridad para forzar su verificacion. Los objetos `ACCIONES` y `MOTIVOS` separan la logica de decision del texto que se muestra, manteniendo el codigo facil de leer y de extender.