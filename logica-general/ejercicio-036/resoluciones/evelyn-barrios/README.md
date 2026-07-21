# Solución Ejercicio 036: Mínimos y Límites en Taller Mecánico

## Razonamiento del Problema

El problema consiste en diagnosticar el nivel de aceite de un motor de acuerdo a umbrales de capacidad mínima y máxima. El objetivo es determinar si el nivel actual es óptimo, bajo o demasiado alto, y proporcionar una explicación clara del estado.

## Reglas Aplicadas

1.  **Entradas**: La función principal recibe tres valores numéricos:
    *   `capacidadMinima`: El nivel mínimo de aceite que el motor necesita para operar de forma segura.
    *   `capacidadMaxima`: El nivel máximo de aceite que el motor puede contener sin riesgo de daños.
    *   `nivelActual`: El nivel de aceite medido en el motor.

2.  **Regla 1 (Nivel Bajo)**: Si el `nivelActual` es menor que la `capacidadMinima`, el estado del motor se considera "nivel_bajo", lo que indica que se necesita rellenar aceite.

3.  **Regla 2 (Nivel Alto)**: Si el `nivelActual` es mayor que la `capacidadMaxima`, el estado es "nivel_alto", lo que sugiere que se debe drenar el exceso de aceite.

4.  **Regla 3 (Nivel Óptimo)**: Si el `nivelActual` no es ni bajo ni alto (es decir, está entre `capacidadMinima` y `capacidadMaxima`, inclusive), el estado se considera "nivel_optimo".

5.  **Salida**: La solución debe devolver un objeto que contenga el `estado` resultante y una `explicacion` detallada y fácil de entender.

## Cómo Ejecutar la Solución

La solución está implementada en JavaScript en el archivo `evelyn-barrios.js`. Para ejecutarla y ver los resultados de las pruebas:

1.  Abre una terminal o consola de comandos.
2.  Navega hasta la carpeta que contiene el archivo: `logica-matematica/ejercicio-036/resoluciones/evelyn-barrios/`.
3.  Ejecuta el script usando Node.js:

    ```bash
    node evelyn-barrios.js
    ```

La salida en la terminal mostrará los resultados de los casos de prueba definidos en el archivo.

## Casos de Prueba

Se han incluido los siguientes casos de prueba para asegurar que la lógica es correcta:

1.  **Prueba 1 (Nivel Óptimo)**: Se prueba un nivel de aceite que está dentro del rango esperado.
    *   Entrada: `capacidadMinima: 4`, `capacidadMaxima: 6`, `nivelActual: 5`
    *   Resultado Esperado: El estado es `nivel_optimo`.

2.  **Prueba 2 (Nivel Bajo)**: Se prueba un caso donde el nivel de aceite está por debajo del mínimo.
    *   Entrada: `capacidadMinima: 4`, `capacidadMaxima: 6`, `nivelActual: 3.5`
    *   Resultado Esperado: El estado es `nivel_bajo`.

3.  **Prueba 3 (Nivel Alto)**: Se prueba un caso donde el nivel de aceite excede el máximo permitido.
    *   Entrada: `capacidadMinima: 4`, `capacidadMaxima: 6`, `nivelActual: 6.5`
    *   Resultado Esperado: El estado es `nivel_alto`.