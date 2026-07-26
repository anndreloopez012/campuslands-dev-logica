# Ejercicio 089: Módulos y Divisibilidad en Películas de Miedo

## ¿Cómo pensé el problema?
1. Analicé las entradas: el minuto exacto de la trama de la película de miedo y el intervalo clave de tiempo en el que ocurren los eventos de tensión.
2. Apliqué la operación matemática del módulo (%) para calcular el residuo de dividir el minuto entre el intervalo clave.
3. Determiné si existe divisibilidad exacta para verificar la sincronización de las escenas clave dentro del filme.

## Reglas Aplicadas
* Validación de intervalos mayores a cero para evitar errores matemáticos de división por cero.
* Uso del operador de módulo para evaluación exacta de residuos.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-089/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Minuto 45 evaluado con un intervalo clave de 5 minutos.
* **Caso Borde:** Minuto 47 evaluado con un intervalo clave de 5 minutos para comprobar el manejo de residuos.
