# Ejercicio 081: Operaciones Aritméticas Controladas en Videojuegos Competitivos

## ¿Cómo pensé el problema?
1. Analicé las entradas: una lista de puntajes base obtenidos en partidas, un bono acumulativo y una penalización.
2. Sumé todos los elementos del arreglo para obtener el acumulado base.
3. Apliqué las operaciones aritméticas controladas sumando el bono y restando la penalización, validando que el resultado no sea negativo y clasificando al jugador según su puntaje final.

## Reglas Aplicadas
* Validación de listas de puntajes vacías para evitar fallos de ejecución.
* Control aritmético seguro con límites mínimos en cero.

## ¿Cómo ejecutar la solución?
1. Abre tu terminal en: \ejercicio-081/resoluciones/yaneh-arias/\
2. Ejecuta: \
ode yaneh-arias.js\

## Casos Probados
* **Caso Normal:** Lista de puntajes [12, 18, 25, 30] con bono de 8 y penalización de 3.
* **Caso Borde:** Lista vacía para comprobar la respuesta segura del sistema.
