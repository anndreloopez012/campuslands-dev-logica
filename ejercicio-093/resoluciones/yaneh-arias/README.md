# Ejercicio 093: Coordenadas y Distancia en Paracaidismo

## ¿Cómo pensé el problema?
1. Analicé las entradas: un par de coordenadas cartesianas [x, y] para el punto de salto del avión y otro para la zona exacta de aterrizaje.
2. Apliqué la fórmula de distancia euclidiana basada en el teorema de Pitágoras para hallar la separación lineal entre ambos puntos.
3. Estructuré el resultado controlando la precisión decimal y validando que las coordenadas tengan la estructura correcta.

## Reglas Aplicadas
* Validación de estructuras de coordenadas completas de 2 dimensiones.
* Uso de operaciones matemáticas básicas (potencias y raíz cuadrada) para distancia euclidiana.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-093/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Salida en [0,0] y aterrizaje en [3,4] (triángulo clásico de distancia 5).
* **Caso Borde:** Mismas coordenadas de salida y llegada para comprobar distancia cero.
