
# Ejercicio 072: Ping Pong - Comparación de opciones

## ¿Cómo pensé el problema?
Aplicando el nivel intermedio aplicado, dividí el problema en funciones pequeñas y modulares. Una función se encarga de validar la integridad de los datos de entrada, otra compara de forma lógica dos opciones de manera individual aplicando criterios de rendimiento y desempate, y la función principal recorre el conjunto para seleccionar la opción óptima.

## Reglas aplicadas
1. **Validación modular:** Verificar que el conjunto de opciones contenga elementos antes de iniciar el análisis.
2. **Cálculo de efectividad:** Evaluar la proporción de partidos ganados frente a los jugados.
3. **Criterio de desempate:** Si dos opciones tienen el mismo porcentaje de éxito, se selecciona aquella que presente menor cantidad de errores no forzados.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-072/resoluciones/irma-arias/irma-arias.js