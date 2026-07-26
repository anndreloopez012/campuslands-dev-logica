# Ejercicio 053: Paracaidismo - Coordenadas y distancia

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en coordenadas y distancias dentro del contexto de paracaidismo, estructuré la lógica en componentes modulares: una función de validación para garantizar que los datos ingresados sean numéricos, una función matemática basada en el teorema de Pitágoras (distancia euclidiana) para calcular la separación exacta entre el punto de impacto objetivo y el aterrizaje real, y un evaluador de precisión por rangos de distancia.

## Reglas aplicadas
1. **Validación de tipos:** Verificar estrictamente que las coordenadas (x, y) provistas correspondan a valores numéricos.
2. **Cálculo geométrico:** Aplicar la fórmula de distancia euclidiana entre dos puntos en un plano cartesiano.
3. **Calificación cualitativa:** Clasificar la calidad del aterrizaje del paracaidista en función de la desviación en metros respecto al blanco.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-053/resoluciones/irma-arias/irma-arias.js