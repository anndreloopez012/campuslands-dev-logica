# Sistema de turnos para soldadura

## Análisis

**Entrada:**
- Arreglo con trabajadores, turno y horas trabajadas.

**Proceso:**
- Recorrer el arreglo.
- Verificar si el trabajador hizo horas extra.
- Sumar las horas trabajadas.
- Calcular el promedio de horas.

**Salida:**
- Estado de cada trabajador.
- Total de horas.
- Promedio de horas.

## Reglas identificadas

- Si trabaja más de 8 horas, tiene horas extra.
- Si trabaja 8 horas o menos, tiene turno normal.
- Calcular el total y el promedio de horas.

## Pruebas

### Caso normal

**Entrada:**

```javascript
[
 {nombre:"Juan", turno:"Mañana", horas:8},
 {nombre:"Ana", turno:"Noche", horas:10}
]
```

**Resultado esperado:**

```
Juan: Turno normal.
Ana: Tiene horas extra.
Total de horas: 18
Promedio de horas: 9
```

### Caso borde

**Entrada:**

```javascript
[
 {nombre:"Luis", turno:"Tarde", horas:8}
]
```

**Resultado esperado:**

```
Luis: Turno normal.
Total de horas: 8
Promedio de horas: 8
```

## Explicación final

La solución utiliza un arreglo para almacenar los trabajadores. Mediante una función, un ciclo y condicionales se verifica si existen horas extra. Además, se usa un acumulador para sumar las horas y realizar el cálculo del promedio.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.