# Plantilla de solucion

## Analisis

* **Entrada**: Un objeto `peleadoresPorNivel` donde las claves son el nombre del nivel y los valores son la cantidad (`n`) de peleadores en dicho nivel.
* **Proceso**: Cálculo de combinaciones de 2 elementos por cada nivel mediante la fórmula de combinatoria simple y acumulación del total de enfrentamientos.
* **Salida**: Un objeto que contiene el `total_peleas` acumulado, un `detalle_por_nivel` con los cálculos individuales y una `explicacion`.

## Reglas identificadas

1. El número de enfrentamientos 1vs1 posibles para un grupo de $n$ personas se calcula mediante la fórmula: $\frac{n(n-1)}{2}$.
2. El resultado final debe ser la suma de las combinaciones calculadas independientemente en cada nivel.
3. El formato de salida debe ser un objeto estructurado que desglose los resultados por categoría y presente el consolidado global.

## Pruebas

### Caso normal

* **Entrada**: `{ Principiante: 4, Intermedio: 3 }`
* **Resultado esperado**: `{ total_peleas: 9, detalle_por_nivel: { Principiante: 6, Intermedio: 3 }, ... }`

### Caso borde

* **Entrada**: `{ Profesional: 1 }`
* **Resultado esperado**: `{ total_peleas: 0, detalle_por_nivel: { Profesional: 0 }, ... }`

## Explicacion final

La solución funciona al aplicar una regla matemática precisa de combinatoria para grupos de 2, la cual es eficiente y evita el uso de bucles anidados costosos. Al iterar sobre el objeto mediante un bucle `for...in`, se garantiza que cada categoría sea tratada de forma aislada, permitiendo que el sistema escale sin problemas ante la adición de nuevos niveles de peleadores.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (Principiante: 4)**:
* Fórmula: $\frac{4 \times (4 - 1)}{2} = \frac{4 \times 3}{2} = \frac{12}{2} = 6$.


* **Ejemplo manual (Intermedio: 3)**:
* Fórmula: $\frac{3 \times (3 - 1)}{2} = \frac{3 \times 2}{2} = \frac{6}{2} = 3$.


* **Total**: $6 + 3 = 9$.