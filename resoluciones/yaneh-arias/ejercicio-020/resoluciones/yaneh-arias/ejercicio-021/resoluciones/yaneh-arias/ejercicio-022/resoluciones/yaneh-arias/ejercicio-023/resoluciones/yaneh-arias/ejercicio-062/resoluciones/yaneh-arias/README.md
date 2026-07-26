# Ejercicio 062: Porcentajes y Proporciones en Fútbol Sala

## ¿Cómo pensé el problema?
1. Analicé los datos de entrada: un arreglo de puntajes base, un porcentaje de bonificación/mejora y un valor de penalización.
2. Diseñé un ciclo acumulador para sumar los elementos del arreglo y obtener un promedio base preciso.
3. Apliqué la regla de porcentajes multiplicando el promedio por el porcentaje indicado y sumándolo al resultado, restando posteriormente la penalización.
4. Establecí estructuras condicionales (if/else) para clasificar el puntaje final en categorías (*elite*, *competitivo*, *novato*).

## Reglas Aplicadas
* Validación de arreglos vacíos para prevenir errores de ejecución.
* Uso de ciclos y acumuladores para procesar las listas de datos.
* Uso de operaciones aritméticas con porcentajes y redondeo de datos numéricos.

## ¿Cómo ejecutar o revisar tu solución?
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Abre tu terminal en la ruta de tu archivo: `ejercicio-062/resoluciones/irma-arias/`
3. Ejecuta el comando: `node irma-arias.js`

## Casos Probados
* **Caso Normal:** Puntajes `[20, 25, 30, 35]`, 10% de mejora y penalización de 2.
* **Caso Borde:** Puntajes bajos `[5, 8, 10]`, 5% de mejora y penalización de 4 para verificar el comportamiento con rangos mínimos.