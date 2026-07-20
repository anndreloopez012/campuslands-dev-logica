# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de números `pruebas` (registros de rendimiento) y dos valores numéricos `min` y `max` (límites de rango).
* **Proceso**: Cálculo del valor máximo y el promedio aritmético del arreglo, seguido de una comparación lógica del valor máximo contra los límites establecidos para determinar el estado de la unidad.
* **Salida**: Un objeto que contiene el `maximo`, `promedio`, `clasificacion` y una `explicacion` textual.

## Reglas identificadas

1. **Validación de Integridad**: Si el arreglo `pruebas` está vacío, el sistema debe retornar un mensaje de error.
2. **Clasificación por Límite Superior**: Si el valor máximo supera `max`, la moto se clasifica como "Desgaste Excesivo".
3. **Clasificación por Límite Inferior**: Si el valor máximo es menor que `min`, la moto se clasifica como "Bajo Rendimiento"; de lo contrario, se marca como "Certificada".

## Pruebas

### Caso normal

* **Entrada**: `[100, 150, 200], 100, 250`
* **Resultado esperado**: `{ maximo: 200, promedio: "150.00", clasificacion: "Certificada", explicacion: "Moto con prueba máxima de 200km frente a límites 100-250." }`

### Caso borde

* **Entrada**: `[50, 60], 100, 250`
* **Resultado esperado**: `{ maximo: 60, promedio: "55.00", clasificacion: "Bajo Rendimiento", explicacion: "Moto con prueba máxima de 60km frente a límites 100-250." }`

## Explicacion final

La solución funciona porque se centra en el rendimiento crítico (el valor máximo) como indicador principal de la salud mecánica, lo cual es más preciso que utilizar únicamente el promedio. La estructura de control condicional asegura que la clasificación sea excluyente y clara. Al utilizar `.toFixed(2)` en el promedio, se garantiza que los reportes de rendimiento sean consistentes, facilitando la auditoría técnica de los resultados obtenidos tras las pruebas.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo (Caso [100, 150, 200], 100, 250)**:
* Máximo: $200$.
* Promedio: $(100+150+200)/3 = 450/3 = 150.00$.
* Clasificación: $100 \le 200 \le 250$ $\rightarrow$ "Certificada".