# Ejercicio 100: Comida urbana - Estrategias de selección

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, diseñé una solución modular dividida en tres etapas: una función para validar la existencia y estructura del arreglo de opciones, una función analítica matemática encargada de calcular una puntuación ponderada basada en el sabor, tiempo de preparación, precio y opciones dietéticas, y finalmente una función iterativa de selección para aislar la alternativa más eficiente para el menú.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el arreglo de opciones entrantes contenga platos válidos para procesar.
2. **Ponderación de atributos gastronómicos:** Asignar mayor peso al sabor y factores inclusivos (opciones veganas), penalizando de forma controlada los tiempos de espera excesivos y los costos elevados.
3. **Optimización por ciclos:** Recorrer de manera exhaustiva el listado para determinar la opción ganadora sin utilizar librerías externas.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-100/resoluciones/irma-arias/irma-arias.js