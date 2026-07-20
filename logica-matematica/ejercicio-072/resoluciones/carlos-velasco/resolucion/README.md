# Plantilla de solucion

## Analisis

* **Entrada**: Dos valores numéricos: `puntosGanados` y `puntosPerdidos`.
* **Proceso**: Suma de los puntos para obtener el total, validación contra división por cero, cálculo de la proporción de victorias y formato de salida a porcentaje con dos decimales.
* **Salida**: Un objeto que contiene la `probabilidad_victoria` expresada como porcentaje y una `explicacion` sobre el cálculo realizado.

## Reglas identificadas

1. **Validación de Datos**: Si la suma de puntos ganados y perdidos es cero, no se puede calcular una probabilidad.
2. **Cálculo de Proporción**: La probabilidad se define como la parte (victorias) dividida por el todo (total de puntos), multiplicada por 100.
3. **Formateo**: El resultado final debe mostrarse como un string con el símbolo "%" y truncado a un máximo de dos decimales.

## Pruebas

### Caso normal

* **Entrada**: `15, 5`
* **Resultado esperado**: `{ probabilidad_victoria: "75%", explicacion: "Se calcularon las probabilidades basándose en 15 juegos ganados de un total de 20." }`

### Caso borde

* **Entrada**: `0, 10`
* **Resultado esperado**: `{ probabilidad_victoria: "0%", explicacion: "Se calcularon las probabilidades basándose en 0 juegos ganados de un total de 10." }`

## Explicacion final

La solución funciona porque realiza un cálculo estadístico directo, asegurando primero la integridad de los datos mediante una validación de división por cero. El uso de `toFixed(2)` junto con `parseFloat()` permite presentar los datos de manera limpia y profesional, evitando la aparición de números decimales extensos o imprecisos. Esta lógica es robusta para cualquier conjunto de datos numéricos donde se requiera extraer un porcentaje de éxito relativo al total de intentos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual (15 ganados, 5 perdidos)**: $(15 / 20) = 0.75 \rightarrow 0.75 \times 100 = 75\%$.
* **Ejemplo manual (0 ganados, 10 perdidos)**: $(0 / 10) = 0 \rightarrow 0 \times 100 = 0\%$.