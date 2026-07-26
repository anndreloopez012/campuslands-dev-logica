# Ejercicio 091: Conteo Combinatorio Simple en Kickboxing

## ¿Cómo pensé el problema?
1. Analicé las entradas: el número de técnicas de golpes de puño disponibles y la cantidad de patadas que el luchador puede ejecutar.
2. Apliqué la regla del principio multiplicativo del conteo combinatorio, multiplicando ambas opciones independientes.
3. Estructuré la salida verificando que los datos de entrada fueran estrictamente mayores a cero.

## Reglas Aplicadas
* Validación de rangos numéricos positivos para evitar combinaciones vacías o erróneas.
* Uso de multiplicación simple para el cálculo de combinaciones posibles.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-091/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** 4 tipos de golpes y 3 tipos de patadas.
* **Caso Borde:** 0 golpes para comprobar la respuesta segura del sistema ante datos inválidos.
