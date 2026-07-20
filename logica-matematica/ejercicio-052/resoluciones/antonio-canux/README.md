# Ejercicio 052: Probabilidad Básica - Pingpong

**Camper:** Antonio Canux

## Analisis

- Entrada: Dos valores numéricos enteros: `saquesExitosos` (cantidad de veces que el jugador logró un punto o un saque válido) y `saquesFallidos` (cantidad de veces que el saque quedó en la red o salió de la mesa).
- Proceso: Sumar ambos valores para obtener el total de saques (el espacio muestral completo). Dividir los casos favorables (`saquesExitosos`) entre el total de saques para obtener la probabilidad matemática. Multiplicar por 100 para tener un porcentaje legible y asignar una clasificación basada en ese número. Validar que el total no sea 0 para evitar errores matemáticos.
- Salida: Un objeto que contiene `probabilidad_exito_porcentaje` (número), `clasificacion` (cadena de texto) y `explicacion` (cadena de texto detallando el cálculo).

## Reglas identificadas

1. **Ley de Laplace:** La probabilidad básica de un evento se calcula dividiendo el número de casos favorables entre el número de casos posibles totales.
2. **Validación de Espacio Muestral:** Si el total de eventos posibles es 0 (no se han realizado saques), la probabilidad se fuerza a 0 para prevenir un error de división por cero (`NaN` o `Infinity` en JavaScript).
3. **Reglas de Clasificación:**
    - $\ge 70\%$: "ofensivo implacable"
   - $\ge 40\%$ y $< 70\%$: "jugador balanceado"
   - $< 40\%$: "en desarrollo"

## Pruebas

### Caso normal

Entrada:
- saquesExitosos: `45`
- saquesFallidos: `15`

Resultado esperado:
- probabilidad_exito_porcentaje: `75` (Total de saques: 60. 45/60 = 0.75 * 100 = 75%)
- clasificacion: `"ofensivo implacable"`
- explicacion: `"De 60 saques registrados, 45 fueron exitosos. La probabilidad de que el proximo saque sea exitoso es del 75%."`

### Caso borde

Entrada:
- saquesExitosos: `0`
- saquesFallidos: `0`

Resultado esperado:
- probabilidad_exito_porcentaje: `0`
- clasificacion: `"sin datos"`
- explicacion: `"No hay historial de saques para calcular la probabilidad."`

## Explicacion final

Esta solución es efectiva porque aplica directamente la teoría básica de la probabilidad (casos favorables sobre casos posibles) de forma programática. Al introducir una validación inicial (`if totalSaques === 0`), el código se vuelve robusto, evitando que la aplicación se rompa si se ingresa a un jugador nuevo sin historial en el torneo de pingpong. Además, transformar el número fraccionario a un porcentaje facilita la lectura y la toma de decisiones mediante los condicionales de clasificación.