# Solución Ejercicio 058 - Sistemas de Turnos

**Autor:** Evelyn Barios

## 1. Análisis del Problema

El ejercicio 058 se centra en "sistemas de turnos" con una temática de "soldadura". He interpretado esto como la necesidad de crear un sistema que gestione y asigne una lista de tareas de soldadura a los turnos de trabajo disponibles (diurno y nocturno), considerando la capacidad de cada turno y la prioridad de las tareas.

El objetivo es automatizar la distribución del trabajo de manera eficiente, asegurando que las tareas más importantes se completen primero y que no se sobrecargue ningún turno.

## 2. Reglas Aplicadas

He diseñado un sistema de gestión de turnos con las siguientes reglas:

-   **Entradas**: La función principal recibe dos argumentos:
    -   `tareas`: Un arreglo de objetos, donde cada objeto representa una tarea de soldadura con `id`, `prioridad` ('alta', 'media', 'baja') y `complejidad` (un número que representa las horas o el esfuerzo requerido).
    -   `capacidadTurnos`: Un objeto que define la capacidad total de trabajo para cada turno (ej. `{ diurno: 8, nocturno: 8 }`).

-   **Proceso**:
    1.  **Priorización**: Las tareas se ordenan para ser procesadas. Las de prioridad `alta` van primero, seguidas de `media` y `baja`.
    2.  **Asignación**: El sistema recorre la lista de tareas ordenadas. Para cada tarea, intenta asignarla al turno que tenga más capacidad restante en ese momento. Esto ayuda a balancear la carga.
    3.  **Validación de Capacidad**: Una tarea solo se asigna si la complejidad de la misma no excede la capacidad restante del turno.
    4.  **Registro**: Si una tarea no puede ser asignada a ningún turno por falta de capacidad, se marca como "no asignada".

-   **Salidas**: La función devuelve un objeto que contiene:
    -   `turnos`: Un objeto que detalla las tareas asignadas a cada turno y la capacidad que les queda.
    -   `tareasNoAsignadas`: Un arreglo con los IDs de las tareas que no pudieron ser asignadas.
    -   `resumen`: Un texto breve que resume el resultado de la asignación.

## 3. Cómo Ejecutar la Solución

1.  Abre una terminal.
2.  Navega a la carpeta donde se encuentra el archivo `evelyn-barios.js`.
3.  Ejecuta el script usando Node.js con el siguiente comando:

    ```bash
    node evelyn-barios.js
    ```

La salida en la consola mostrará los resultados de los dos casos de prueba definidos en el archivo.

## 4. Casos de Prueba

### Caso de Prueba 1: Normal
-   **Entrada**: Un conjunto de 4 tareas con diferentes prioridades y complejidades que, en total, pueden ser manejadas por los dos turnos.
-   **Resultado Esperado**: Todas las tareas son asignadas. Las de prioridad 'alta' se procesan primero, distribuyéndose entre los turnos para optimizar la capacidad.

### Caso de Prueba 2: Borde (Sobrecarga)
-   **Entrada**: Un conjunto de tareas cuya complejidad total excede la capacidad combinada de ambos turnos. Incluye dos tareas de 'alta' prioridad que consumen casi toda la capacidad.
-   **Resultado Esperado**: El sistema asigna las tareas de alta prioridad, pero la última tarea ('T07') no puede ser asignada y queda en la lista de `tareasNoAsignadas`. Esto demuestra que el sistema maneja correctamente la sobrecarga y respeta los límites de capacidad.