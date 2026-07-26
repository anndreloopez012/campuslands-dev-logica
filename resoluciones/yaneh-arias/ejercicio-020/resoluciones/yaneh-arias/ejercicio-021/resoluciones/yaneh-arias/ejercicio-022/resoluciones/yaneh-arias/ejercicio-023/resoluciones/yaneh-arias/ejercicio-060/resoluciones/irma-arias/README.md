# Ejercicio 060: Comida urbana - Simulaciones con fórmulas

## ¿Cómo pensé el problema?
Para resolver este reto de nivel difícil enfocado en simulaciones con fórmulas dentro del contexto de un negocio de comida urbana, organicé la solución por medio de validaciones y modelado matemático. Primero implementé un validador estricto para comprobar que las variables de entrada (porciones, distancia y congestión) cumplieran con las restricciones físicas y lógicas del problema. Posteriormente, estructuré fórmulas para simular el costo total de producción y el tiempo estimado de entrega considerando variables dinámicas como el tráfico urbano.

## Reglas aplicadas
1. **Validación de parámetros:** Garantizar que las porciones y factores multiplicadores sean mayores a cero y las distancias no presenten valores negativos.
2. **Cálculo de costos operativos:** Aplicar un costo por porción sumado a un cargo fijo de cocina para obtener el costo total de producción.
3. **Simulación de tiempos de entrega:** Sumar el tiempo fijo de preparación con el producto de la distancia, el factor de velocidad y la congestión vial.
4. **Clasificación del servicio:** Categorizar la agilidad de la entrega basándose en rangos de tiempo totales.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-060/resoluciones/irma-arias/irma-arias.js