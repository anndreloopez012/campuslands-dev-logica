# Ejercicio 051: Kickboxing - Conteo combinatorio simple

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en conteo combinatorio dentro del contexto de kickboxing, estructuré la solución de manera modular. Primero implementé una función matemática para calcular factoriales, seguida de una función de validación de rangos numéricos para evitar errores lógicos (como seleccionar más elementos de los disponibles), y finalmente la función principal que aplica la fórmula matemática de combinaciones sin repetición.

## Reglas aplicadas
1. **Validación de restricciones combinatorias:** Asegurar que el número de elementos a seleccionar ($k$) sea menor o igual al total disponible ($n$), y que ambos sean positivos.
2. **Cálculo factorial:** Determinar de forma iterativa los factoriales necesarios para resolver la fórmula general de combinaciones.
3. **Estructura limpia:** Devolver un objeto claro con el resultado del conteo y su respectiva justificación técnica.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-051/resoluciones/irma-arias/irma-arias.js