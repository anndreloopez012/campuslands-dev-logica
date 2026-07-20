# Estrategias de selección de comida urbana

## Análisis

**Entrada:**
- Arreglo de puestos con precio y tiempo de espera.
- Presupuesto máximo.

**Proceso:**
- Validar el precio.
- Recorrer el arreglo.
- Seleccionar los puestos que cumplen el presupuesto y el tiempo de espera.

**Salida:**
- Puestos recomendados y cantidad de opciones.

## Reglas identificadas

- El precio debe ser numérico y no negativo.
- El precio debe ser menor o igual al presupuesto.
- El tiempo de espera debe ser de 10 minutos o menos.

## Pruebas

### Caso normal

**Entrada:**
```javascript
presupuestoMax = 30
```

**Resultado esperado:**
```text
Tacos Don Luis: recomendado
Hot Dogs Plaza: no recomendado
Opciones recomendadas: 1
```

### Caso borde

**Entrada:**
```javascript
presupuestoMax = 0
```

**Resultado esperado:**
```text
Opciones recomendadas: 0
```

## Explicación final

La solución usa un arreglo, una función, ciclos, condicionales y un acumulador para elegir los puestos que cumplen las condiciones definidas.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.