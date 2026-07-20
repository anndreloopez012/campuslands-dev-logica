# Estadísticas de ranking para arquitectura 3D

## Análisis

**Entrada:**
- Arreglo con proyectos y sus puntos.

**Proceso:**
- Recorrer el arreglo.
- Clasificar cada proyecto según sus puntos.
- Sumar los puntos.
- Calcular el promedio.

**Salida:**
- Ranking de cada proyecto.
- Total de puntos.
- Promedio.

## Reglas identificadas

- Si tiene 90 o más puntos, es Excelente.
- Si tiene entre 75 y 89 puntos, es Bueno.
- Si tiene menos de 75 puntos, es Regular.

## Pruebas

### Caso normal

**Entrada:**

```javascript
[
 {nombre:"Casa", puntos:80},
 {nombre:"Edificio", puntos:95}
]
```

**Resultado esperado:**

```
Casa: Bueno
Edificio: Excelente
Total de puntos: 175
Promedio: 87.5
```

### Caso borde

**Entrada:**

```javascript
[
 {nombre:"Parque", puntos:70}
]
```

**Resultado esperado:**

```
Parque: Regular
Total de puntos: 70
Promedio: 70
```

## Explicación final

La solución utiliza un arreglo para almacenar los proyectos. Recorre los datos con un ciclo, usa condicionales para asignar un ranking, un acumulador para sumar los puntos y realiza el cálculo del promedio mediante una función.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.