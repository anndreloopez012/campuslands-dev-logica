
# Ejercicio 068: Películas de Ciencia Ficción - Flujos paso a paso

## ¿Cómo pensé el problema?
Analicé que un flujo secuencial paso a paso requiere evaluar condiciones de manera ordenada y escalonada (como una tubería o pipeline). Cada paso valida una regla específica antes de permitir que los datos avancen hacia el procesamiento final de decisión.

## Reglas aplicadas
1. **Paso 1:** Validar que la estructura de entrada no esté vacía o nula para prevenir fallos.
2. **Paso 2:** Comprobar que el año de lanzamiento de la película sea coherente y válido.
3. **Paso 3:** Clasificar la obra mediante rangos condicionales basados en su calificación asignada.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-068/resoluciones/irma-arias/irma-arias.js