# Ejercicio 055: Velocidad, Tiempo, Distancia - Dibujo Digital

**Camper:** Antonio Canux

## Analisis

- Entrada: Dos valores numéricos. `distanciaPixeles` (la longitud total de la línea dibujada) y `velocidadPixelesPorSegundo` (la rapidez con la que el usuario mueve el lápiz digital sobre la tableta).
- Proceso: Validar que la velocidad sea mayor a cero para evitar divisiones inválidas. Luego, aplicar la fórmula de la cinemática para aislar el tiempo. Se redondea el resultado a dos decimales y se clasifica el tipo de trazo en base a la cantidad de segundos que tomó realizarlo.
- Salida: Un objeto que contiene `tiempo_segundos` (número), `clasificacion` (cadena de texto) y una `explicacion` de los cálculos (cadena de texto).

## Reglas identificadas

1. **Fórmula de tiempo:** Derivada de la fórmula original de la velocidad ($v = \frac{d}{t}$), se utiliza la ecuación para encontrar el tiempo:
   $t = \frac{d}{v}$
2. **Validación de Hardware:** Si la velocidad del lápiz es $\le 0$, indica un error de lectura de la tableta gráfica. El programa debe detener el cálculo para evitar el error `Infinity` (división por cero).
3. **Escalas de Trazos:**
   - Tiempo $< 0.5$ s: "trazo rapido (boceto)"
   - Tiempo $\ge 0.5$ s y $\le 2.0$ s: "trazo normal (entintado)"
   - Tiempo $> 2.0$ s: "trazo lento (detalle)"

## Pruebas

### Caso normal

Entrada:
- distanciaPixeles: `1200`
- velocidadPixelesPorSegundo: `800`

Resultado esperado:
- tiempo_segundos: `1.5`
- clasificacion: `"trazo normal (entintado)"`
- explicacion: `"Para procesar un trazo de 1200 pixeles a 800 px/s, el motor tardara 1.5 segundos."`

### Caso borde

Entrada:
- distanciaPixeles: `500`
- velocidadPixelesPorSegundo: `0`

Resultado esperado:
- tiempo_segundos: `0`
- clasificacion: `"error de hardware"`
- explicacion: `"La velocidad del stylus debe ser mayor a 0 px/s."`

## Explicacion final

La solución toma un principio físico universal (MRU) y lo abstrae para resolver un problema de desarrollo de software (rendimiento de dibujo digital). La validación temprana (`if velocidad <= 0`) asegura que el motor no intente realizar cálculos matemáticos imposibles, lo cual es vital en aplicaciones en tiempo real como los lienzos digitales. Las reglas condicionales añaden una capa de lógica de negocio que permite categorizar el comportamiento del usuario según la velocidad de su mano.