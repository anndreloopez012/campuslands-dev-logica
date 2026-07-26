# Ejercicio 092: Probabilidad Básica en Ping Pong

## ¿Cómo pensé el problema?
1. Analicé las entradas: el número de casos exitosos (puntos ganados) y el total de casos posibles (jugadas evaluadas).
2. Apliqué la regla de probabilidad clásica dividiendo los casos favorables entre el total de casos.
3. Transformé el resultado en un porcentaje exacto y en valor decimal, controlando los límites lógicos para evitar errores de división por cero.

## Reglas Aplicadas
* Validación estricta de rangos (casos totales mayores a cero y casos favorables dentro del rango válido).
* Control de formato y precisión decimal para el porcentaje de probabilidad.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-092/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** 14 aciertos en 20 jugadas de ping pong.
* **Caso Borde:** 0 jugadas totales para comprobar la respuesta segura del sistema ante datos nulos.
