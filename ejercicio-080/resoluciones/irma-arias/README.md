
# Ejercicio 080: Comida urbana - Estrategias de selección

## ¿Cómo pensé el problema?
Aplicando los criterios del nivel intermedio aplicado, dividí el problema en funciones pequeñas y especializadas. Una función valida la integridad del listado de opciones gastronómicas, otra filtra los puestos que se ajustan al presupuesto y a la calificación mínima permitida, y la última aplica un algoritmo de ordenamiento y ranking para seleccionar la mejor alternativa considerando el tiempo de espera.

## Reglas aplicadas
1. **Validación inicial:** Asegurar que el catálogo de comida urbana contenga elementos antes de procesar la búsqueda.
2. **Filtrado por restricciones:** Descartar automáticamente aquellos platos que superen el presupuesto o tengan una calificación inferior a la deseada.
3. **Estrategia de ranking:** Priorizar la opción con mayor puntaje de calidad y, en caso de empate, seleccionar la que ofrezca el menor tiempo de espera.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-080/resoluciones/irma-arias/irma-arias.js