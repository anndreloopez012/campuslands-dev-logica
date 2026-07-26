# Ejercicio 090: Redondeo y Precisión en Viajes y Turismo

## ¿Cómo pensé el problema?
1. Analicé las entradas: un arreglo con los costos de los diferentes servicios turísticos (hospedaje, transporte, tours) y el nivel de precisión o cantidad de decimales requeridos.
2. Sumé los costos para hallar el total y los dividí entre la cantidad de servicios para obtener el promedio.
3. Apliqué fórmulas matemáticas de redondeo controlando la cantidad de cifras decimales para garantizar precisión financiera en el presupuesto de viaje.

## Reglas Aplicadas
* Validación de listas de costos vacías o niveles de precisión negativos.
* Control estricto de la precisión numérica mediante factores de potencia de 10 y redondeo matemático.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-090/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista de tres costos con decimales complejos y precisión a 2 decimales.
* **Caso Borde:** Lista vacía para comprobar la respuesta segura del sistema ante ausencia de datos.
