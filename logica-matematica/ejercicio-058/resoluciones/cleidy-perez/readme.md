# Normalización de puntaje para soldadura

## Análisis

**Entrada:**
- Arreglo con trabajadores y su puntaje.

**Proceso:**
- Recorrer el arreglo.
- Convertir el puntaje de 100 a una escala de 10.
- Clasificar el resultado.
- Calcular el promedio.

**Salida:**
- Puntaje normalizado de cada trabajador.
- Promedio de los puntajes.

## Reglas identificadas

- Si el puntaje normalizado es 8 o más, es Excelente.
- Si está entre 6 y 7.9, es Aprobado.
- Si es menor de 6, debe mejorar.

## Pruebas

### Caso normal

**Entrada:**

```javascript
[
 {nombre:"Juan", puntaje:60},
 {nombre:"Ana", puntaje:90}
]
```

**Resultado esperado:**

```
Juan: Aprobado (6)
Ana: Excelente (9)
Promedio normalizado: 7.5
```

### Caso borde

**Entrada:**

```javascript
[
 {nombre:"Luis", puntaje:0}
]
```

**Resultado esperado:**

```
Luis: Debe mejorar (0)
Promedio normalizado: 0
```

## Explicación final

La solución utiliza un arreglo para almacenar los puntajes de los trabajadores. Recorre los datos con un ciclo, convierte los puntajes a una escala de 10, los clasifica con condicionales y calcula el promedio mediante un acumulador.

## Sugerencia

Convierte cada regla del problema en una condición antes de programar.