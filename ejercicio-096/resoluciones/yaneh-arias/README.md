# Ejercicio 096: Presupuestos y Descuentos en Animación 3D

## ¿Cómo pensé el problema?
1. Analicé las entradas: el costo base del proyecto de animación 3D y el porcentaje de descuento aplicable.
2. Apliqué la regla matemática calculando la rebaja proporcional sobre el costo inicial y restándola para obtener el valor final.
3. Estructuré la salida validando que los valores monetarios y porcentuales se mantengan en rangos lógicos permitidos.

## Reglas Aplicadas
* Validación de rangos permitidos (costos no negativos y descuentos entre 0% y 100%).
* Control de precisión decimal en los montos calculados.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-096/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Costo base de 1500 con un 15% de descuento.
* **Caso Borde:** Costo de 800 con 0% de descuento para verificar el comportamiento sin rebajas.
