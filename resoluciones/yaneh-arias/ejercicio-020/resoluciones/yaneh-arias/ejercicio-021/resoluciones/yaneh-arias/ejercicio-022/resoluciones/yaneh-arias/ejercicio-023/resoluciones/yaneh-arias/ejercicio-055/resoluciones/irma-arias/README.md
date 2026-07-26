# Ejercicio 055: Dibujo digital - Velocidad, tiempo y distancia

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en velocidad, tiempo y distancia dentro del contexto de dibujo digital, organicé el código en funciones desacopladas. Primero creé un validador estricto para evitar divisiones entre cero (tiempos inválidos) o distancias negativas. Luego, implementé la fórmula física estándar de velocidad para medir la rapidez de los trazos del pincel sobre el lienzo virtual, clasificando el estilo de dibujo resultante según su velocidad en píxeles por segundo.

## Reglas aplicadas
1. **Validación de parámetros:** Asegurar que el tiempo sea estrictamente mayor a cero y la distancia sea un número positivo o cero.
2. **Cálculo de velocidad:** Dividir la distancia total del trazo (en píxeles) entre el tiempo transcurrido (en segundos).
3. **Clasificación del trazo:** Asignar una categoría artística basada en rangos de velocidad (boceto rápido, entintado fluido o detalle minucioso).

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-055/resoluciones/irma-arias/irma-arias.js