# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo `figuras` (objetos con `ancho` y `alto`), un precio por cm² (`precioCm2`) y un costo por unidad de trazo (`costoTrazo`).
* **Proceso**: Cálculo iterativo del área y perímetro de cada figura, aplicación de las tarifas correspondientes y acumulación del costo total, seguido de una clasificación por rangos de precio.
* **Salida**: Un objeto que indica el `costo_final` (con formato), la `clasificacion` de complejidad y una `explicacion` breve.

## Reglas identificadas

1. El costo por figura se calcula mediante la fórmula: $(\text{ancho} \times \text{alto} \times \text{precioCm2}) + (2 \times (\text{ancho} + \text{alto}) \times \text{costoTrazo})$.
2. La clasificación de complejidad se define por el costo total: "Complejo" ($> 500$), "Estándar" ($> 200$), y "Simple" ($\le 200$).
3. El cálculo debe procesar cada elemento del arreglo de figuras, permitiendo cotizar diseños compuestos.

## Pruebas

### Caso normal

* **Entrada**: `[{ ancho: 10, alto: 10 }], 2, 5`
* **Resultado esperado**: `{ costo_final: "240.00", clasificacion: "Estándar", ... }`

### Caso borde

* **Entrada**: `[{ ancho: 2, alto: 2 }], 1, 1`
* **Resultado esperado**: `{ costo_final: "12.00", clasificacion: "Simple", ... }`

## Explicacion final

La solución funciona al desglosar el costo total en dos componentes técnicos del tatuaje: el relleno (área) y el delineado (perímetro). Al recorrer el arreglo mediante `.forEach()`, se garantiza que el sistema pueda manejar tanto tatuajes de un solo elemento como composiciones más complejas. La clasificación final actúa como un indicador de esfuerzo para el artista, proporcionando una estructura lógica que conecta las dimensiones físicas con el valor comercial del trabajo.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (10x10, precio 2, trazo 5)**:
* Área: $100$, Perímetro: $2 \times (10+10) = 40$.
* Costo: $(100 \times 2) + (40 \times 5) = 200 + 200 = 400$.
* Clasificación: Como $200 < 400 \le 500$, es "Estándar".