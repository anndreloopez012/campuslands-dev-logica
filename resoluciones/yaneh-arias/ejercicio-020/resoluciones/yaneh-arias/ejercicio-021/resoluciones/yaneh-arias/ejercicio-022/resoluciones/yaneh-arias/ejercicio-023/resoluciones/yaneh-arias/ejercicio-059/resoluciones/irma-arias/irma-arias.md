# Ejercicio 059: Fórmulas químicas - Validaciones numéricas

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en validaciones numéricas dentro del contexto de fórmulas químicas, estructuré la solución mediante funciones de control modular. Diseñé un validador unitario estricto para comprobar que cada dato numérico (como coeficientes, masas molares y valencias) no sea nulo, no esté corrupto (`NaN`), sea estrictamente mayor a cero y no sobrepase límites físicos desproporcionados. Si algún valor falla, el sistema intercepta el error inmediatamente antes de ejecutar cualquier cálculo estequiométrico.

## Reglas aplicadas
1. **Verificación de tipo:** Asegurar que los datos de entrada correspondan estrictamente a números reales.
2. **Control de rangos físicos:** Rechazar valores menores o iguales a cero (imposibles en masas o moles reales) y valores excesivamente altos fuera del rango analítico permitido.
3. **Interceptación de errores:** Detener el flujo del proceso y retornar un mensaje descriptivo indicando exactamente qué campo numérico falló la validación.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-059/resoluciones/irma-arias/irma-arias.js