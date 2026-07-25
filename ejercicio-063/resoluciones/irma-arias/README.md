# Ejercicio 063: Torneo de Esports - Toma de decisiones

## ¿Cómo pensé el problema?
Analicé que un torneo de esports requiere ordenar a los competidores basándose en su rendimiento numérico (puntos) y establecer un criterio de desempate claro (menor cantidad de faltas o penalizaciones) para tomar una decisión justa y automatizada.

## Reglas aplicadas
1. Validar que la entrada de datos no esté vacía para evitar errores en tiempo de ejecución.
2. Comparar los puntos de manera descendente (mayor puntaje primero).
3. Si hay empate en los puntos, aplicar una segunda regla evaluando las penalizaciones de forma ascendente (menor penalización gana).

## Cómo ejecutar la solución
1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo desde la terminal con el comando:
   ```bash
   node ejercicio-063/resoluciones/irma-arias/irma-arias.js