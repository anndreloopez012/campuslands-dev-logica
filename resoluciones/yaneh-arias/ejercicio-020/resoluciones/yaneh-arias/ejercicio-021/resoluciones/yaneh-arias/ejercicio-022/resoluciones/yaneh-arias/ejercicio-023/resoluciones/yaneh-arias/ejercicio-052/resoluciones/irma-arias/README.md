# Ejercicio 052: Ping pong - Probabilidad básica

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en probabilidad básica dentro del contexto de un partido de ping pong, dividí la lógica en tres componentes clave: una función de validación estricta para evitar errores lógicos (como probabilidades mayores al 100% o denominadores en cero), una función matemática encargada de calcular el porcentaje de efectividad de los saques, y un sistema de clasificación cualitativa según el rendimiento del deportista.

## Reglas aplicadas
1. **Validación de rangos estadísticos:** Comprobar que los casos favorables no superen los casos totales y que el total de intentos sea estrictamente mayor a cero.
2. **Cálculo de probabilidad:** Aplicar la fórmula clásica dividiendo los eventos exitosos entre el espacio muestral total.
3. **Interpretación de resultados:** Transformar el valor decimal en un porcentaje claro y emitir una evaluación de rendimiento basada en umbrales lógicos.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-052/resoluciones/irma-arias/irma-arias.js