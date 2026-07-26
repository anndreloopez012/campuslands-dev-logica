# Ejercicio 058: Soldadura - Normalización de puntajes

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en la normalización de puntajes dentro del contexto de inspección de soldadura, estructuré el código en funciones desacopladas. Primero creé un validador para asegurar que los datos ingresados constituyeran un arreglo de números válidos. Después, implementé el algoritmo de normalización Min-Max (restando el mínimo y dividiendo entre el rango total) para estandarizar las métricas de resistencia de las probetas entre 0 y 1, incorporando también una salvaguarda ante casos donde todos los valores sean idénticos.

## Reglas aplicadas
1. **Validación de entradas:** Comprobar que el arreglo de puntajes brutos no esté vacío y contenga exclusivamente valores numéricos.
2. **Cálculo Min-Max:** Identificar los límites del conjunto de datos y aplicar la transformación matemática de escala.
3. **Control de casos borde:** Manejar de forma segura escenarios donde el puntaje máximo y mínimo sean iguales para prevenir errores matemáticos.
4. **Calificación de calidad:** Asignar un dictamen técnico a cada probeta de soldadura según su valor normalizado resultante.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-058/resoluciones/irma-arias/irma-arias.js