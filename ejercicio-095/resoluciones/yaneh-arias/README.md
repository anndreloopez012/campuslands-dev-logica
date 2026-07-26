# Ejercicio 095: Velocidad, Tiempo y Distancia en Dibujo Digital

## ¿Cómo pensé el problema?
1. Analicé las entradas: la distancia total en píxeles que recorre el trazo del lienzo digital y la velocidad de procesamiento del sistema.
2. Apliqué la relación física fundamental despejando el tiempo ( = \frac{Distancia}{Velocidad}$).
3. Estructuré la salida validando que la velocidad no sea cero para prevenir errores matemáticos.

## Reglas Aplicadas
* Validación de rangos permitidos (velocidad estrictamente mayor a cero y distancias no negativas).
* Control de precisión decimal en la respuesta de tiempo.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-095/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Distancia de 1200 píxeles con velocidad de 150 unidades.
* **Caso Borde:** Distancia de 0 píxeles para verificar el tiempo ante un lienzo estático.
